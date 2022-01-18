import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import Styles from '../style/Styles';
import TripRow from '../componants/TripRow';
import { tripDataAction } from '../redux/actions/dataAction';
const jsonData = require('../asset/trip-list.json');

const Trips: React.FC<void> = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tripDataAction(jsonData));
    }, []);

    const flatlistCallback = (tripInfo: {}): void => {
        navigation.navigate('TipDetails', {
            destination: tripInfo
        });
    };
    const { tripData } = useSelector((state) => state);

    const [showSpinner, setShowSippner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSippner(false)
        }, 2000);
    }, [])


    return (
        <View style={[Styles.parentView, Styles.fullscreen]}>
            {
                (showSpinner === true)?
                < ActivityIndicator animating={showSpinner} color="black" hidesWhenStopped/>
            :
            <FlatList
                data={tripData}
                renderItem={({ item }) => (
                    <TripRow name={item.name}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        status={item.status}
                        destination={item}
                        callback={flatlistCallback}
                    />
                )}
                keyExtractor={item => item.id}
            />

            }

        </View>
    );
}

export default Trips;
