import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function({backgroundColor, children}) {
    return (
        <View style={[styles.toolbar, {backgroundColor}]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        flexWrap: 'wrap',
        height: 56,
        shadowColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});