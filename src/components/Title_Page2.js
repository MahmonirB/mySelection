

import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image} from 'react-native';
import { Text, Button, Thumbnail, Subtitle } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Title_Page2 extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.welcome]} >
          <Thumbnail square source={require("../../assets/img/title.png")} style={{ width: 100, height: 100 }} />
          <Text style={styles.welcome}>آشنایی با رشته های تحصیلی دوره دوم متوسطه</Text>
          <Text style={styles.subTitle}>برای آشنایی با شرایط ثبت نام در رشته های تحصیلی دوره دوم متوسطه و  آینده شغلی و رشته های دانشگاهی مرتبط با آن کلیک گنید.</Text>
          <Image source={require('../../assets/img/bullet2.png')} style={styles.bullet} />
          <Button full rounded onPress={() => navigate('Help')} style={styles.helpButton} ><Text style={styles.helpbtn}>آشنایی با رشته های تحصیلی</Text></Button>
            </View>
        <View style={styles.btn}>
            <Button transparent onPress={() => navigate('Home')}><Text style={styles.btnText}>قبلی</Text></Button>
            <Button transparent onPress={() => navigate('Register')}><Text style={styles.btnText}>شروع</Text></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'sans',
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom:15,
  },
  subTitle: {
    fontFamily: 'sans',
    fontSize: 12,
    color: '#ccc',
    paddingHorizontal: 20,
    lineHeight:25,
    marginBottom:20,
    textAlign:'center',
  },
  btnText: {
    fontFamily: 'sans',
    fontSize: 14,
    color: '#faa819',
  },
  btn: {
    flex: 0,
    flexDirection:'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  helpbtn:{
    fontFamily: 'sans',
    fontSize: 14,
    color:'#fff',
  },
  helpButton:{
    backgroundColor:'#007c8f',
    borderColor:'#007c8f',
  },
  bullet:{
    width:30,
    height:20,
    marginBottom:20,
    marginTop:20
      },
});
export default Title_Page2;