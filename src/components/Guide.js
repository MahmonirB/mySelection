
import React,{Component} from 'react';
import {Platform, StyleSheet, View,Image} from 'react-native';
import {Text, Button,Thumbnail,Container,Content} from 'native-base';

class Guide extends Component {
    static navigationOptions = {
        title: "راهنما",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container>
          <Content style={styles.pad}>
            <Text style={styles.header1}>راهنمای کسب نمرات لازم</Text>
            <Text style={styles.body1}>حداقل نمرات لازم برای مجاز شدن در انتخاب رشته های تحصیلی در جدول زیر به  طور مجزا نمایش داده شده است.</Text>
            <View style={styles.table_box}>
            <Image source={require('../../assets/img/info_table.png')} style={styles.info_table} />
            <Text style={styles.body4}>نمرات بر اساس نمره برگه خرداد محاسبه می شود لذا در ثبت نمرات دقت گردد.</Text>
            </View>
           
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
  info_table:{
    width:280,
    height:350,
  },
  table_box:{
    alignItems:'center'
  },
  body4:{
    fontFamily:'sans',
    fontSize:12,
    textAlign:'center',
    marginTop:10
  },
  
})
export default Guide;