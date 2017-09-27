import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight,
    ToolbarAndroid
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
import {Toolbar, ToolbarItem} from '../toolbar/index';

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
        }
    }

    // _getBalance = (date) => {
    //     const {monthlyBudget, dailySpending} = this.props;
    //     const daysInMonth = +moment(date).daysInMonth();
    //     const dailyBalance = Math.floor(monthlyBudget / daysInMonth);
    //     const dayNumber = moment(date).get('date');
    //     const monthNumber = moment(date).get('month');
    //     const datesWithSpending = Object.keys(dailySpending);
    //     const monthlySpending = datesWithSpending.reduce((spending, dateWithSpending) => {
    //         if (
    //             moment(+dateWithSpending).get('month') === monthNumber &&
    //             moment(+dateWithSpending).get('date') <= dayNumber
    //         ) {
    //             return spending + +dailySpending[dateWithSpending];
    //         }
    //
    //         return spending;
    //     }, 0);
    //
    //     return (dailyBalance * dayNumber) - monthlySpending;
    // };

    render() {
        // const {modalIsVisible, index} = this.state;
        // const {changeDailySpending, dailySpending} = this.props;
        // const selectedDate = this._days[index].getTime();

        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    navIcon={require('../menu.png')}
                    onIconClicked={this.props.onMenuClick}
                    actions = {[
                        {title: "Log out", icon: require("../menu.png"), show: "always"}
                    ]}
                />
                <View style={styles.content}>
                </View>
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
