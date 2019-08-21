
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Subtitle} from 'native-base';

class industry extends Component {
    static navigationOptions = {
        title: "صنعت: فنی و حرفه ای",
        headerRight: <Thumbnail small source={require('../../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View ><Text>کشاورزی</Text>
        <Button transparent onPress={() => navigate('Home') }><Text>بازگشت</Text></Button>
        </View>
        );
    }
}

export default industry;