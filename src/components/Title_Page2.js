

import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image,Animated,Dimensions,Easing} from 'react-native';
import { Text, Button, Thumbnail } from 'native-base';

const {height}=Dimensions.get('window');

class Title_Page2 extends Component {
  constructor(props){
    super(props);
}
  static navigationOptions = {
    header: null,
  };
  componentWillMount(){
    this.animatedValue1=new Animated.Value(-50);
    this.animatedValue2=new Animated.Value(1);
    this.animatedValue3=new Animated.Value(height);
  }
  componentDidMount(){
    Animated.parallel([
      Animated.timing(this.animatedValue1,{
        toValue:0,
        duration:1500,
        easing:Easing.ease
      }),
      Animated.timing(this.animatedValue3,{
        toValue:0,
        duration:1000
      }),
      Animated.sequence([
      Animated.timing(this.animatedValue2,{
        toValue:0.2,
        duration:500,
        easing:Easing.cubic,
        delay:200
      }),
      Animated.timing(this.animatedValue2,{
        toValue:1,
        duration:500,
        easing:Easing.cubic
      })])
    ]).start();

  }
  render() {
    const { navigate } = this.props.navigation;
    const animatedStyle1={
      transform:[{
        translateY:this.animatedValue1
      }]
    }
    const animatedStyle2={
      opacity :this.animatedValue2
    }
    const animatedStyle3={
      transform:[{
          translateY:this.animatedValue3
        }]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.container, styles.welcome,animatedStyle1]} >
          <Thumbnail square source={require("../../assets/img/title.png")} style={{ width: 100, height: 100 }} />
          <Text style={styles.welcome}>آشنایی با رشته های تحصیلی دوره دوم متوسطه</Text>
          <Text style={styles.subTitle}>برای آشنایی با شرایط ثبت نام در رشته های تحصیلی دوره دوم متوسطه و  آینده شغلی و رشته های دانشگاهی مرتبط با آن کلیک گنید.</Text>
          {/* <Image source={require('../../assets/img/bullet2.png')} style={styles.bullet} />   */}
          <Animated.View style={animatedStyle2}>
            <Button full rounded onPress={() => navigate('Help')} style={styles.helpButton} ><Text style={styles.helpbtn}>آشنایی با رشته های تحصیلی</Text></Button>
          </Animated.View>
          </Animated.View>
        <Animated.View style={[styles.btn,animatedStyle3]}>
            <Button transparent onPress={() => navigate('Home')}><Text style={styles.btnText}>قبلی</Text></Button>
            <Button transparent onPress={() => navigate('Register')}><Text style={styles.btnText}>شروع</Text></Button>
        </Animated.View>
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