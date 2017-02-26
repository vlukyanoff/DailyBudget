import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight
} from 'react-native';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import moment from 'moment';
import 'moment/locale/ru';
import {getMonthlyBudget, getDailySpending} from './selectors';
import {changeDailySpending} from './actions';
import {connect} from 'react-redux';
import {DayView} from './day-view';
import {AddView} from './add-view';
import {ModalView} from './modal-view';

const dateFormat = 'dd, D MMM';

class Home extends Component {
    _days = [];

    constructor(props) {
        super(props);

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const date = today.getDate();

        this._days = [
            new Date(year, month, date - 1),
            new Date(year, month, date),
            new Date(year, month, date + 1)
        ];

        moment.locale('ru');


        this.state = {
            modalIsVisible: false,
            index: 1,
            routes: this._days.map((day, key) => ({key: key.toString(10), title: moment(day).format(dateFormat)}))
        }
    }

    _handleChangeTab = (index) => {
        this.setState({ index });
    };

    _renderHeader = (props) => {
        return <TabBar {...props} />;
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '0':
                return <DayView balance={this._getBalance(this._days[0])} />;
            case '1':
                return <DayView balance={this._getBalance(this._days[1])} />;
            case '2':
                return <DayView balance={this._getBalance(this._days[2])} />;
            default:
                return null;
        }
    };

    _getBalance = (date) => {
        const {monthlyBudget, dailySpending} = this.props;
        const daysInMonth = +moment(date).daysInMonth();
        const dailyBalance = Math.floor(monthlyBudget / daysInMonth);
        const dayNumber = moment(date).get('date');
        const monthNumber = moment(date).get('month');
        const datesWithSpending = Object.keys(dailySpending);
        const monthlySpending = datesWithSpending.reduce((spending, dateWithSpending) => {
            if (
                moment(+dateWithSpending).get('month') === monthNumber &&
                moment(+dateWithSpending).get('date') <= dayNumber
            ) {
                return spending + +dailySpending[dateWithSpending];
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
        const selectedDate = this._days[index].getTime();

        return (
            <View style={styles.container}>
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
                <AddView
                    onPress={() => this._changeModalVisibility()}
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
    }
});
