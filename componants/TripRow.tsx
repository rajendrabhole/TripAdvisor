import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import  Styles from '../style/Styles';

export interface CardDetails {
    name : string;
    startDate : string;
    endDate : string;
    status: string;
    destination: {};
    callback : Function;
    isAppforground : boolean;
}

const TripRow: React.FC<CardDetails> = ({name, startDate, endDate, status, destination, callback, isAppforground}) => {
  return (
    <View style={Styles.row}>
        <View style={(isAppforground===true && status === 'NON_STRATED')?Styles.highlightedBackgrpund: Styles.container}>
            <TouchableOpacity onPress={() => {callback(destination)}}>
                <Text style={Styles.cardTitle}>{name}</Text>
                <Text style={Styles.cardText}>{startDate} - {endDate} </Text>
                <Text style={Styles.status}>{status}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
export default TripRow;