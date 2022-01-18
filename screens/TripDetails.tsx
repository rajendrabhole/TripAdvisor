import React from 'react';
import { Text, View} from 'react-native';
import  styles from '../style/Styles';
import { ScrollView } from 'react-native-gesture-handler';

interface Prop{
    route: any;
}

export default function TripDetails(prop: Prop){
    const title : string = prop.route.params.destination.name;
    const destinations: Array<string> = prop.route.params.destination.destinations;
        
        return (
            <View style={styles.parentView}>
                <Text style={styles.destinationTitle}>{title}</Text>
                <ScrollView style={styles.destinationScroll}>
                    {
                        destinations.map(([key, value]) =>
                            <Text style={styles.destinationText} key={key}>{value}</Text>
                        )
                    }
                </ScrollView>
            </View>
        );
    }

