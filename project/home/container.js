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
import {getMonthlyBudget, getDailySpending, getSelectedDate} from './selectors';
import {changeDailySpending, changeSelectedDate} from './actions';
import {connect} from 'react-redux';
import {DayView} from './day-view';
import {AddView} from './add-view';
import {ModalView} from './modal-view';
import {Toolbar, ToolbarItem} from '../toolbar/index';
import Icon from 'react-native-vector-icons/Ionicons';

const dateFormat = 'dddd, D MMMM';
const shortDateFormat = 'dd, D MMM';

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
        const {modalIsVisible} = this.state;
        const {changeDailySpending, dailySpending, selectedDate, changeSelectedDate} = this.props;
        const date = selectedDate || this._today.getTime();

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
                    balance={this._getBalance(date)}
                    dateText={moment(date).format(dateFormat)}
                />
                <ModalView
                    isVisible={modalIsVisible}
                    date={date}
                    dateText={moment(date).format(shortDateFormat)}
                    sum={dailySpending[date]}
                    onChange={(date, val) => changeDailySpending(date, val)}
                    onClose={() => this._changeModalVisibility()}
                    onSelectDate={(date) => changeSelectedDate(date)}
                />
            </View>
        );
    }
}

export default connect(state => ({
    monthlyBudget: getMonthlyBudget(state),
    dailySpending: getDailySpending(state),
    selectedDate: getSelectedDate(state)
}), {
    changeDailySpending,
    changeSelectedDate
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
