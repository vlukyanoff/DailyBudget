import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard,
    ToolbarAndroid
} from 'react-native';
import {getIncome, getSaving, getSpending} from './selectors';
import {connect} from 'react-redux';
import {changeIncome, changeSaving, changeSpending} from './actions';
import {Actions} from 'react-native-router-flux';

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
            <ToolbarAndroid
                style={styles.toolbar}
                title={'Настройки'}
                navIcon={require('../menu.png')}
                onIconClicked={Actions.home}
            />
            <View style={styles.content}>
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
        flex: 1
    },
    content: {
        padding: 16
    },
    label: {
        fontSize: 16
    },
    input: {
        marginBottom: 20
    },
    toolbar: {
        height: 56
    }
});
