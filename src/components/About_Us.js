
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Container,Content} from 'native-base';

class About_Us extends Component {
    static navigationOptions = {
        title: "درباره ما",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container>
          <Content style={styles.pad}>
            <Text style={styles.header1}>درباره ما</Text>
            <Text style={styles.body1}>
              این اپلیکیشن با هدف راهنمایی دانش آموزان پایه نهم برای انتخاب رشته تحصیلی تولید شده است.
              دانش آموزان با وارد کردن نمرات مورد نیاز، رشته های مجاز برای ادامه تحصیل در دوره دوم متوسطه را مشاهده می کنند.
            </Text>
            <Text style={styles.body2}>تمامی حقوق مادی و معنوی این اپلیکیشن متعلق به </Text>
            <Text style={styles.body3}>هنرستان تلاش منطقه 18 تهران است.</Text>
          <Text style={styles.body2}>برای آگاهی بیشتر به کانال hedayat18@ مراجعه کنید.</Text>
          </Content>
        </Container>
        );
    }
}
const styles=StyleSheet.create({
  header1:{
    fontFamily:'sans',
    fontSize:14,
    color:'#007c8f',
    textAlign:'right'
  },
  body1:{
    fontFamily:'sans',
    fontSize:12,
    textAlign:'right'
  },
  pad:{
    padding:10
  },
  body2:{
    fontFamily:'sans',
    fontSize:12,
    color:'#007c8f',
    textAlign:'center',
    marginTop:20
  },
  body3:{
    fontFamily:'sans',
    fontWeight:'bold',
    fontSize:12,
    color:'#007c8f',
    textAlign:'center'
  },
})
export default About_Us;