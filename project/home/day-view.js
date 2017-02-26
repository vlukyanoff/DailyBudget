import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export const DayView = ({balance}) => {
    return (
        <View style={[ styles.page ]}>
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
    balance: {
        fontSize: 32
    }
});