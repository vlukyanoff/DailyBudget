import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const defaultPressColor = 'rgba(255, 255, 255, .4)';

export default function({iconName, iconColor = 'white', pressColor = defaultPressColor, onPress}) {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(pressColor, true)}>
            <View style={styles.toolbarButton} onPress={onPress}>
                <Icon name={iconName} style={[styles.toolbarButtonIcon, {color: iconColor}]} />
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    toolbarButton: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbarButtonIcon: {
        fontSize: 22 // maybe 24 ??
    }
});