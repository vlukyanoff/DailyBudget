import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default function({drawer}) {
  function onClick(action) {
    action();
    drawer.closeDrawer();
  }

  return (
    <View style={styles.container}>
        <View style={styles.itemsGroup}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000')}>
                <View style={styles.item} onPress={() => onClick(Actions.home)}>
                    <View><Icon name='md-home' color={'rgba(0, 0, 0, 0.54)'} size={20}/></View>
                    <View><Text style={styles.itemText}>Главная</Text></View>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000')}>
                <View style={styles.item} onPress={() => onClick(Actions.settings)}>
                    <View><Icon name='md-settings' color={'rgba(0, 0, 0, 0.54)'} size={20}/></View>
                    <View><Text style={styles.itemText}>Настройки</Text></View>
                </View>
            </TouchableNativeFeedback>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    itemsGroup: {
        paddingTop: 8
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 16,
        paddingRight: 16
    },
    itemText: {
        paddingLeft: 20,
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.87)'
    }
});
