import React from 'react';
import { View, Text } from 'react-native';
import  styles from '../style/Styles';

export default class Home extends React.Component {
    render() {
        return (
            <View style={[styles.parentView, styles.fullscreen]}>
                <Text style={styles.homeText}>Home</Text>
            </View>
        );
    }
}
