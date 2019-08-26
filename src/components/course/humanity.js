
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Subtitle, Container,Content} from 'native-base';

class humanity extends Component {
    static navigationOptions = {
        title: "رشته علوم انسانی",
        headerRight: <Thumbnail small source={require('../../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
         <Container>
           <Content style={{padding:10}}>
             <Text style={styles.header1}></Text>
             <Text style={styles.body1}>
             موضع اصلی دروس رشته علوم انسانی، مطالعه مسایل مربوط به انسان است. افرادی که در دروس ادبیات،عربی و مطالعات اجتماعی قوی هستند، شرایط اولیه برای ورود به رشته انسانی را دارند. رشته دانشگاهی علوم انسانی متنوع و بسیار جذاب است البته به شرطی که به زمینه های علوم انسانی علاقه داشته باشید. در سایر کشورها با هوش ترین و توانمندترین دانش آموزان می توانند وارد رشته علوم انسانی شوند اما متاسفانه در کشور ما به  رشته انسانی در دبیرستان توجه لازم نمی شود.</Text>
             <Text style={styles.body1}>
برای آشنایی بیشتر با رشته علوم انسانی دانش آموزان می توانند دروسی که باید در دوره دوم متوسطه رشته انسانی بخوانند را به طور کلی بررسی کنند. برخی از عناوین کتاب های تخصصی رشته علوم انسانی عبارتند از: علوم و فنون ادبی، جامعه شناسی، تاریخ ایران و جهان ، ادبیات فارسی، جغرافیای ایران، اقتصاد،  عربی، نگارش، منطق، فلسفه، منطق، ارایه های ادبی، روان شناسی، زبان فارسی، علوم اجتماعی
             برخی از رشته های تحصیلی در دانشگاه بهشرح زیر است:</Text>
             <Text style={styles.body1}>
             زبان و ادبیات ملل مختلف - 
ادیان و مذاهب مختلف - 
علوم ورزشی - 
باستان شناسی - 
تاریخ - 
حقوق - 
جغرافی - 
اقتصاد - 
جامعه شناسی - 
علوم اجتماعی و مردم شناسی - 
فلسفه و منطق - 
روانشناسی - 
مدیریت های مختلف اقتصادی، بازرگانی و دولتی - 
علوم تربیتی و ...
             </Text>
             <Text></Text>
           </Content>
         </Container>
          );
      }
  }
  
const styles = StyleSheet.create({
  header1: {
    fontFamily: 'sans',
    fontSize: 15,
    color: '#007c8f',
    textAlign: 'right',
  },
  body1: {
    fontFamily: 'sans',
    fontSize: 12,
    color: '#333',
    textAlign: 'right'
  },
  header2: {
    fontFamily: 'sans',
    fontSize: 14,
    color: 'purple',
    textAlign: 'right',
    textDecorationLine:'underline'
  },
  header3: {
    fontFamily: 'sans',
    fontSize: 14,
    color: 'blue',
    textAlign: 'right'
  },
})
export default humanity;