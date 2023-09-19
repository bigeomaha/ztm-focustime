import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Theme } from '../utils/theme';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ focusCurrentSubject }) => {
    const [subject, setSubject] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    label="What would you like to focus on?"
                    onChangeText={(text) => setSubject(text)} />
                <View style={styles.buttonContainer}>
                    <RoundedButton title=' + '
                        size={Theme.sizes.xxxl}
                        onPressHandler={() => focusCurrentSubject(subject)} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        justifyContent: 'center',
        marginLeft: Theme.sizes.sm,
    },
    textInput: {
        flex: 1,
        marginRight: Theme.sizes.sm,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'top',
        margin: Theme.sizes.sm,
        padding: Theme.sizes.md,
    },
});
