import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput
} from 'react-native';

export const ModalView = ({isVisible, date, sum, onChange, onSubmit}) => {
    return (
        <Modal
            animationType={'fade'}
            visible={isVisible}
            onRequestClose={() => {}}
        >
            <View style={styles.container}>
                <Text style={styles.label}>
                    Потрачено, руб
                </Text>
                <TextInput
                    value={sum}
                    onChangeText={text => onChange(date, text)}
                    onSubmitEditing={() => onSubmit()}
                    keyboardType={'numeric'}
                    autoFocus={true}
                    style={styles.input}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    label: {
        fontSize: 16
    },
});