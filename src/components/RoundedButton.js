import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Theme } from '../utils/theme';

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPressHandler}>
            <Text style={[styles(size).text, textStyle]} >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = (size) =>
    StyleSheet.create({
        radius: {
            borderRadius: size / 2,
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Theme.colors.white,
            borderWidth: 2,
        },
        text: {
            color: Theme.colors.white,
            fontSize: size * .2,
            justifyContent: 'center',
        },
    });
