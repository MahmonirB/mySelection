import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image,Animated,Dimensions,Easing } from 'react-native';
import { Text, Button, Thumbnail, Subtitle } from 'native-base';

const {height}=Dimensions.get("window");
export default class Title_Page extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.animatedValue1=new Animated.Value(-50);
        this.animatedValue2=new Animated.Value(height);
    }
    componentDidMount(){
       Animated.parallel([
            Animated.timing(this.animatedValue1,{
                toValue:0,
                duration:1500,
                easing: Easing.ease
            }),
            Animated.timing(this.animatedValue2,{
                toValue:0,
                duration:1500,
                easing: Easing.ease
            })
        
        ]).start();
    }
  static navigationOptions = {
    header: null,
  }
render(){
  const { navigate } = this.props.navigation;
  const animatedStyle1={
      transform:[{
          translateY:this.animatedValue1
      }]
  }
  const animatedStyle2={
    transform:[{
        translateY:this.animatedValue2
    }]
}
  return(
<View style={styles.container}>
<Animated.View style={[styles.container, styles.welcome,animatedStyle1]}>
          <Thumbnail square source={require("../../assets/img/title3.png")} style={styles.pic} />
          <Text style={styles.welcome}>اپلیکیشن انتخاب رشته تحصیلی</Text>
          <Text style={styles.subTitle}>راهنمایی و مشاوره به دانش آموزان و والدین گرامی برای آگاهی از نحوه انتخاب رشته تحصیلی</Text>
          {/* <Image source={require('../../assets/img/bullet.png')} style={styles.bullet} /> */}
        </Animated.View>
        <Animated.View style={[styles.btn,animatedStyle2]}>
          <Button transparent onPress={() => navigate('AboutUs')}><Text style={styles.btnText}>درباره ما</Text></Button>
          <Button transparent onPress={() => navigate('Title2')}><Text style={styles.btnText}>بعدی</Text></Button>
        </Animated.View>
</View>
  )
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
    lineHeight: 40
  },
  subTitle: {
    fontFamily: 'sans',
    fontSize: 12,
    color: '#ccc',
    paddingHorizontal: 20,
  },
  btnText: {
    fontFamily: 'sans',
    fontSize: 14,
    color: '#faa819'
  },
  btn: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bullet: {
    width: 30,
    height: 20,
    marginBottom: 20,
    marginTop: 20
  },
  pic: {
    width: 100,
    height: 100
  }
});