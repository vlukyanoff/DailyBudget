import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal
} from 'react-native';
import ActionButton from 'react-native-action-button';

export const AddView = ({onPress}) => {
    return (
        <ActionButton buttonColor={'rgba(231,76,60,1)'} onPress={onPress}/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});