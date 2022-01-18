import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from '../style/Styles';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Landing');
        }, 2000);
    }, [])

    return (
        <View style={[styles.parentView, styles.fullscreen]}>
            <Text style={styles.homeText}>Freely</Text>
        </View>
    )
}
