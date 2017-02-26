import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard
} from 'react-native';
import {getIncome, getSaving, getSpending} from './selectors';
import {connect} from 'react-redux';
import {changeIncome, changeSaving, changeSpending} from './actions';

const Settings = function ({
    income,
    saving,
    spending,
    changeIncome,
    changeSaving,
    changeSpending
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Доход в месяц, руб
            </Text>
            <TextInput
                value={income}
                onChangeText={text => changeIncome(text)}
                onSubmitEditing={Keyboard.dismiss}
                keyboardType={'numeric'}
                style={styles.input}
            />
            <Text style={styles.label}>
                Откладываем, %
            </Text>
            <TextInput
                value={saving}
                onChangeText={text => changeSaving(text)}
                onSubmitEditing={Keyboard.dismiss}
                keyboardType={'numeric'}
                style={styles.input}
            />
            <Text style={styles.label}>
                Обязательные расходы (пока только один пункт)
            </Text>
            <TextInput
                value={spending}
                onChangeText={text => changeSpending(text)}
                onSubmitEditing={Keyboard.dismiss}
                keyboardType={'numeric'}
                style={styles.input}
            />
        </View>
    )
};

export default connect(state => ({
    income: getIncome(state),
    saving: getSaving(state),
    spending: getSpending(state)
}), {
    changeIncome,
    changeSaving,
    changeSpending
})(Settings);

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    label: {
        fontSize: 16,

    },
    input: {
        marginBottom: 20
    },
});
