import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    DatePickerAndroid,
    TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class ModalView extends Component {
    async openDialog(date) {
        const {action, year, month, day} = await DatePickerAndroid.open({date: date});

        if (action === DatePickerAndroid.dateSetAction) {
            const selectedDate = new Date(year, month, day).getTime();

            this.props.onSelectDate(selectedDate);
        }
    }

    render() {
        const {isVisible, date, dateText, sum, onChange, onClose} = this.props;

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
                        <Text style={styles.title} onPress={() => this.openDialog(date)}>
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
    }
}

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