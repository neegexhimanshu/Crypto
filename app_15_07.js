
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, TouchableOpacity, FlatList, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//    <View>
//      <Text>Hello</Text>
//      <Icon name="rocket" size={30} color="#900" />
//    </View>
//   );
// };


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: [],
      city_display: "",
      desc: "",
      main: "",
      humidity: "",
      pressure: "",
      visibility: ""
    }
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
  render() {
    return (

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Home {this.state.data.length > 0 ? this.state.data[0].id : "kamal"}</Text>
        </View>
        <View>
        {
          this.state.data.length > 0 &&
        
        <FlatList
          contentContainerStyle={{ flexGrow: 1, marginTop: 25, marginHorizontal: 20, paddingBottom: 30 }}
          data={this.state.data}
          renderItem={({ item }) => this._renderItem(item)}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id} />
        }
        </View> 
      </View>
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
});

