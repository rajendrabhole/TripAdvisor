
import React, { useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { tripDataAction } from "./redux/actions/dataAction";
import Home from './screens/Home'
import Trips from './screens/Trips'
import TripDetails from './screens/TripDetails'
import Splash from './screens/Splash'
import Styles from './style/Styles'
import { store } from './redux/Store';
import { useDispatch } from "react-redux";
const jsonData = require('./asset/trip-list.json');


const Tab = createBottomTabNavigator();
const TripStack = createStackNavigator();

// const TripComponant: React.FC<void> = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(tripDataAction(jsonData));
//   }, []);

//   return (
//     <TripStack.Navigator>

//     </TripStack.Navigator>
//   );
// }

const Landing = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trips" component={Trips} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={Styles.parentView}>
        <NavigationContainer>

          <TripStack.Navigator >
            <TripStack.Screen name="Splash" component={Splash}
              options={{ headerShown: false }} />
            <TripStack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
            <TripStack.Screen name="Trips" component={Trips}/>
            <TripStack.Screen name="TipDetails" component={TripDetails} />
          </TripStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
