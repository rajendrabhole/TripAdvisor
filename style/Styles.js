import { StyleSheet } from "react-native";
const colors = require('./colors');

const styles = StyleSheet.create({
    parentView:{
        flex : 1,
    },
    fullscreen:{
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : colors.SCREEN_BACKGROUND
    },
    homeText:{
        textAlign : "center",
        justifyContent: 'center',
        fontSize : 25
    },

    row: {
        flexDirection: 'row',
    },
    container:{
        flexDirection : 'column',
        marginTop :5,
        marginBottom : 5,
        marginLeft : 20,
        marginRight : 20,
        backgroundColor : '#FFF0ED',
        borderRadius : 10,
        borderWidth: 1,
        borderColor : 'black',
        backgroundColor : colors.TRIP_CARD_BACKGROUND
    },

    cardTitle: {
        fontWeight : 'bold',
        fontSize : 20,
        color : colors.TEXT,
        fontFamily: "SF Pro Disply"
      },

    cardText :{
        textAlign : "right",
        justifyContent: 'center',
        fontSize : 16,
        color : colors.TEXT,
        fontFamily: "SF Pro Disply"
    },

    status:{
        textAlign : "left",
        fontSize : 12,
        fontSzie : 'bold',
        justifyContent : 'flex-end',
        color : colors.TEXT,
        fontFamily: "SF Pro Disply"
    },

    destinationTitle:{
        flexDirection : 'row',
        fontWeight : 'bold',
        fontSize : 20,
        marginLeft : 20,
        marginTop : 20,
        color : colors.TEXT,
        fontFamily: "SF Pro Disply"
    },
    destinationScroll :{
        flexDirection : 'row',
        marginTop : 10,
        marginLeft : 25,
    },
    destinationText :{
        textAlign : "right",
        fontSize : 16,
        color : colors.TEXT,
        fontFamily: "SF Pro Disply"
    }
    
  })

  export default styles;