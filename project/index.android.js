/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Navigation from './navigation/component';
import Home from './home/component';
import Settings from './settings/component';

export default class DailyBudget extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        ref={drawer => this._drawer = drawer}
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Navigation drawer={this._drawer}/>}
      >
        <Router hideNavBar={true}>
          <Scene key="root">
            <Scene key="home" component={Home} initial={true}/>
            <Scene key="settings" component={Settings} title="Настройки"/>
          </Scene>
        </Router>
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('DailyBudget', () => DailyBudget);
