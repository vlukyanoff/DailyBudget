import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function({drawer}) {
  function onClick(action) {
    action();
    drawer.closeDrawer();
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Button title='Главная' onPress={() => onClick(Actions.home)}/>
      <Button title='Настройки' onPress={() => onClick(Actions.settings)}/>
    </View>
  )
}
