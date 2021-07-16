import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,Button,
  useColorScheme,
  View, TouchableOpacity, FlatList, Image
} from 'react-native';
import IconEnt from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  NavigationContainer, NavigationHelpersContext} from '@react-navigation/native';
import {  createStackNavigator } from '@react-navigation/stack';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import SearchScreen from './pages/SearchScreen';
import { color } from 'react-native-elements/dist/helpers';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: 'red' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page' }} />
           <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: 'Search Page' }} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}/>
 
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/> 
    </Stack.Navigator>
  );
}
function SearchStack(){
  return(
    <View>
      <Text>This is search page</Text>
    </View>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   city: "",
    //   data: [],
    //   city_display: "",
    //   desc: "",
    //   main: "",
    //   humidity: "",
    //   pressure: "",
    //   visibility: ""
    // }
   this.state = {
      email: '',
      password: ''
   }
  //  handleEmail = (text) => {
  //     this.setState({ email: text })
  //  }
    this.fetch_coin()
    //this.fetch_weather()
  }
  
   

 


    
  fetch_coin = () => {
    //console.log("Cccccccccccccccccccc");
    fetch("https://api.coingecko.com/api/v3/coins/")
      .then((response) => response.json())
      .then((json => {
        this.setState({ data: json })

        //console.log(json);
      }))
  }
  _renderItem = (item) => {

    return (
      <TouchableOpacity onPress={() => this.handleClick(item)}>
        <View style={{flexDirection:'row'}}>
          <View>
          <Image source = {{uri:item.image.thumb}}
   style = {{ width: 20, height: 20 }}
   />    
          </View>

           <View style={{flexDirection:'column'}}>
             <View><Text style={{color:'white',paddingLeft:20}}>{item.id}</Text></View>
             <View><Text style={{color:'white'}}>{item.market_data.current_price.inr}</Text></View>            
          </View>

          <View style={{flexDirection:'column'}}>
          <View><Text style={{color:'white'}}>{item.market_data.price_change_percentage_24h_in_currency.inr}%</Text></View>
             <View><Text style={{color:'white'}}>{item.market_data.price_change_percentage_24h_in_currency.inr}%</Text></View>
            </View>
        </View>
        {/* <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10, alignItems: 'center' }}>
          <View style={{flexDirection:'row',justifyContent:'space-between', width:'100%'}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Image source = {{uri:item.image.thumb}}
   style = {{ width: 20, height: 20 }}
   />

            </View>
            <View style={{alignItems:'flex-start'}}>
            <Text style={styles.text}>{item.id}</Text>
            </View>
            <View><Text style={styles.text}>{item.market_data.current_price.inr}</Text></View>
             <View><Text style={styles.text}>{item.market_data.price_change_percentage_24h_in_currency.inr}%</Text></View>
          </View>
        
        </View> */}
      </TouchableOpacity>
    )
  }
  render(){
    return (
      <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen 
          name="SearchScreen" component={SearchScreen} options={{ tabBarLabel:'Search',tabBarIcon: ({color, size}) =>( <IconEnt
            name="magnifying-glass"
            color={color}
            size={size}
          />) }} />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <IconEnt
                name="cog"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
         )
  }
 

}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
   backgroundColor:'black'
     
  },
  powderblue: {
    width: 200,
    padding: 20,
    backgroundColor: 'powderblue',
  },
  text:{
    color:"#fff",
    textTransform: 'uppercase',
     
  }
})
