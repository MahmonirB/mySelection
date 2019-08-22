
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Subtitle} from 'native-base';

class Total_Report extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: "نمایش انتخاب رشته",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
    render() {
      const score=this.props.navigation.getParam("score","No score sent");
      return (
        <View ><Text>گزارش کامل</Text>
        <Text>scorre:{JSON.stringify(score)}</Text>
        </View>
        );
    }
}

export default Total_Report;