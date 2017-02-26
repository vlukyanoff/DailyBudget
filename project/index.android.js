import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    DrawerLayoutAndroid
} from 'react-native';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import Navigation from './navigation/component';
import Home from './home/component';
import Settings from './settings/container';
import appStore from './app-store';
import {Provider} from 'react-redux';

export default class DailyBudget extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                ref={drawer => this._drawer = drawer}
                drawerWidth={250}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <Navigation drawer={this._drawer}/>}
            >
                <Provider store={appStore}>
                    <Router hideNavBar={true}>
                        <Scene key="root">
                            <Scene key="home" type={ActionConst.REPLACE} component={Home} initial={true}/>
                            <Scene key="settings" type={ActionConst.REPLACE} component={Settings} title="Настройки"/>
                        </Scene>
                    </Router>
                </Provider>
            </DrawerLayoutAndroid>
        );
    }
}

AppRegistry.registerComponent('DailyBudget', () => DailyBudget);
