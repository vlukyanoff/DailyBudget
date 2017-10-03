import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export const DayView = ({balance, dateText}) => {
    return (
        <View style={[ styles.page ]}>
            <Text style={styles.date}>{dateText}</Text>
            <Text style={styles.text}>Доступно</Text>
            <Text style={[ styles.balance ]}>{balance}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        fontSize: 14
    },
    text: {
        fontSize: 16
    },
    balance: {
        fontSize: 32
    }
});