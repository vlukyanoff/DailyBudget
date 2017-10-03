import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    ToolbarAndroid
} from 'react-native';
import moment from 'moment';
import 'moment/locale/ru';
import {getMonthlyBudget, getDailySpending} from './selectors';
import {changeDailySpending} from './actions';
import {connect} from 'react-redux';
import {DayView} from './day-view';
import {AddView} from './add-view';
import {ModalView} from './modal-view';
import {Toolbar, ToolbarItem} from '../toolbar/index';
import Icon from 'react-native-vector-icons/Ionicons';

const dateFormat = 'dddd, D MMMM';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

class Home extends Component {
    _today = null;

    constructor(props) {
        super(props);

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const date = today.getDate();

        this._today = new Date(year, month, date);

        moment.locale('ru');

        this.state = {
            modalIsVisible: false
        }
    }

    _getBalance = (date) => {
        const {monthlyBudget, dailySpending} = this.props;
        const daysInMonth = moment(date).daysInMonth();
        const dailyBalance = Math.floor(monthlyBudget / daysInMonth);
        const dayNumber = moment(date).get('date');
        const monthNumber = moment(date).get('month');
        const datesWithSpending = Object.keys(dailySpending);
        const monthlySpending = datesWithSpending.reduce((spending, dateWithSpending) => {
            if (
                moment(+dateWithSpending).get('month') === monthNumber &&
                moment(+dateWithSpending).get('day') <= dayNumber
            ) {
                if (isNumeric(dailySpending[dateWithSpending])) {
                    return spending + +dailySpending[dateWithSpending];
                }
            }

            return spending;
        }, 0);

        return (dailyBalance * dayNumber) - monthlySpending;
    };

    _changeModalVisibility = () => {
        this.setState({ modalIsVisible: !this.state.modalIsVisible })
    };

    render() {
        const {modalIsVisible, index} = this.state;
        const {changeDailySpending, dailySpending} = this.props;
        const selectedDate = this._today.getTime();

        return (
            <View style={styles.container}>
                <Icon.ToolbarAndroid
                    navIconName='md-menu'
                    onIconClicked={this.props.onMenuClick}
                    actions={[{title: 'Settings', iconName: 'md-calendar', show: 'always'}]}
                    style={styles.toolbar}
                />
                <AddView
                    onPress={() => this._changeModalVisibility()}
                />
                <DayView
                    balance={this._getBalance(selectedDate)}
                    dateText={moment(selectedDate).format(dateFormat)}
                />
                <ModalView
                    isVisible={modalIsVisible}
                    date={selectedDate}
                    sum={dailySpending[selectedDate]}
                    onChange={(date, val) => changeDailySpending(date, val)}
                    onSubmit={() => this._changeModalVisibility()}
                />
            </View>
        );
    }
}

export default connect(state => ({
    monthlyBudget: getMonthlyBudget(state),
    dailySpending: getDailySpending(state)
}), {
    changeDailySpending
})(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 16
    },
    toolbar: {
        height: 56
    }
});
