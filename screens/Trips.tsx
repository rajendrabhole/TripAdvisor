import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, ActivityIndicator, AppState } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import Styles from '../style/Styles';
import TripRow from '../componants/TripRow';
import { tripDataAction } from '../redux/actions/dataAction';
const jsonData = require('../asset/trip-list.json');

const Trips: React.FC<void> = () => {
    const navigation = useNavigation();
    //Load Data in trip list
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tripDataAction(jsonData));
    }, []);

    //Navigate to detail screen
    const flatlistCallback = (tripInfo: {}): void => {
        navigation.navigate('TipDetails', {
            destination: tripInfo
        });
    };
    const { tripData } = useSelector((state) => state);

    //Before Data loading 
    const [showSpinner, setShowSippner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSippner(false)
        }, 2000);
    }, [])

    //Managing app state
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const [appForground, setAppForground] = useState(false);

  
    useEffect(() => {
      const subscription = AppState.addEventListener("change", nextAppState => {
        if (appState.current.match(/inactive|background/) && nextAppState === "active"
        ) {
            setAppForground(true);
        }
  
        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        console.log("AppState", appState.current);
      });
  
      return () => {
        subscription.remove();
      };
    }, []);
  


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
                        isAppforground={appForground}
                    />
                )}
                keyExtractor={item => item.id}
            />

            }

        </View>
    );
}

export default Trips;
