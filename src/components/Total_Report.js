
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Subtitle} from 'native-base';

class Total_Report extends Component {
    static navigationOptions = {
        title: "نمایش انتخاب رشته",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View ><Text>گزارش کامل</Text>
        <Button transparent onPress={() => navigate('Register') }><Text>بازگشت</Text></Button>
        </View>
        );
    }
}

export default Total_Report;