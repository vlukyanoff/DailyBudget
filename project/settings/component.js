import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import {getIncome} from './selectors';
import {connect} from 'react-redux';
import {changeIncome} from './actions';

const Settings = function({income, changeIncome}) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Доход в месяц, руб
      </Text>
      <TextInput value={income} onChangeText={text => changeIncome(text)} style={styles.input}/>
      <Text style={styles.welcome}>
        Откладываем, %
      </Text>
      <TextInput value={'20'} style={styles.input}/>
      <Text style={styles.welcome}>
        Обязательные расходы (пока только один пункт)
      </Text>
      <TextInput value={'3000'} style={styles.input}/>
    </View>
  )
}

export default connect(state => ({
    income: getIncome(state)
}), {
    changeIncome
})(Settings);

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    fontSize: 16,
    textAlign: 'left'
  },
  input: {
    marginBottom: 20
  },
});
