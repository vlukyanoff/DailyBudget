import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    ToolbarAndroid,
    DatePickerAndroid,
    TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ModalView = ({isVisible, date, dateText, sum, onChange, onClose}) => {
    return (
        <Modal
            animationType={'fade'}
            visible={isVisible}
            onRequestClose={() => {}}
        >
            <Icon.ToolbarAndroid
                navIconName='md-close'
                onIconClicked={onClose}
                style={styles.toolbar}
            >
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, .4)', true)}>
                    <Text style={styles.title} onPress={() => DatePickerAndroid.open({date: date})}>
                        {dateText} <Icon name='md-arrow-dropdown' size={20} />
                    </Text>
                </TouchableNativeFeedback>
            </Icon.ToolbarAndroid>
            <View style={styles.container}>
                <Text style={styles.label}>
                    Потрачено, руб
                </Text>
                <TextInput
                    value={sum}
                    onChangeText={text => onChange(date, text)}
                    onSubmitEditing={onClose}
                    keyboardType={'numeric'}
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
    toolbar: {
        height: 56
    },
    label: {
        fontSize: 16
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    }
});