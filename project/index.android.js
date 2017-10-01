import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    DrawerLayoutAndroid
} from 'react-native';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import Navigation from './navigation/component';
import Home from './home/container';
import Settings from './settings/container';
import {store, persistor} from './app-store';
import {Provider} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DailyBudget extends Component {
    constructor() {
        super();

        this.openDrawer = this.openDrawer.bind(this);
    }

    _drawer;

    openDrawer() {
        this._drawer.openDrawer();
    }

    render() {
        return (
            <View style={styles.container}>
                <DrawerLayoutAndroid
                    ref={drawer => this._drawer = drawer}
                    drawerWidth={250}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => <Navigation drawer={this._drawer}/>}
                >
                    <Provider store={store} persistor={persistor}>
                        <Router hideNavBar={true} onMenuClick={this.openDrawer}>
                            <Scene key="root" hideNavBar>
                                <Scene key="home" type={ActionConst.REPLACE} component={Home} initial={true}/>
                                <Scene key="settings" type={ActionConst.REPLACE} component={Settings} title="Настройки"/>
                            </Scene>
                        </Router>
                    </Provider>
                </DrawerLayoutAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('DailyBudget', () => DailyBudget);

