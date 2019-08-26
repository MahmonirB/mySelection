
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Subtitle,Container,Content} from 'native-base';

class religous extends Component {
    static navigationOptions = {
        title: "رشته معارف اسلامی",
        headerRight: <Thumbnail small source={require('../../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
         <Container>
           <Content  style={{padding:10}}>
           <Text style={styles.header1}>آشنایی با رشته علوم و معارف اسلامی</Text>
           <Text style={styles.body1}>
           دانش آموزانی که می خواهند وارد رشته علوم و معارف اسلامی شوند باید به درس زبان و ادبیات عرب علاقه مند و در آن قوی باشند. زیرا آشنایی با زبان عربی برای این رشته ضروری است. برای ورود به دانشگاه دانش آموزان رشته علوم و معارف اسلامی می توانند در رشته های دانشگاهی علوم انسانی تحصیل کنند. همچنین آنها می توانند وارد برخی از موسسات آموزش عالی خاص در رشته های مذهبی و اسلامی شوند.</Text>
           <Text style={styles.body1}>
برای آشنایی بیشتر با رشته علوم و معارف اسلامی دانش آموزان می توانند دروسی که باید در دوره دوم متوسطه رشته علوم و معارف اسلامی  بخوانند را به طور کلی بررسی کنند. بسیاری از دروس  رشته علوم و معارف اسلامی با رشته انسانی مشترک است. برخی از عناوین کتاب های تخصصی رشته علوم و معارف اسلامی عبارتند از: احکام، اخلاق اسلامی، اصول عقاید، علوم  و معارف قرآنی، تاریخ اسلام، عربی زبان قرآن، معارف اسلامی، فلسفه (آشنایی با فلسفه اسلامی)
           </Text>
           <Text style={styles.body1}>
           فارغ التحصیلان این رشته مجاز خواهند بود تا در رشته های دانشگاهی مربوط به گروه ادبیات و علوم انسانی ادامه تحصیل بدهند. همچنین برخی از موسسات آموزش عالی خاص مانند دانشگاه علوم و حدیث، از بین داوطلبین مذکور برای ادامه تحصیل در رشته های مذهبی و اسلامی دانشجو می پذیرد.
           این رشته به طور خاص موضوعات اسلامی اختصاص دارد.تسلط به دروس زبان و ادبیات عربی در این رشته از الزلمات به شمار می آید.علت این موضوع این است که دروس این رشته  بیشتر مراجعی به زبان عربی دارند.موضاعات درسی این رشته شامل:
           </Text>
           <Text style={styles.body1}>قرآن و حدیث</Text>
           <Text style={styles.body1}>مطالعه تاریخ و تمدن کشورهای مسلمان</Text>
           <Text style={styles.body1}>کتب عرفانی و فلسفه اسلامی</Text>
           <Text style={styles.body1}>تحقیق و مطالعه بر روی فقه و مبانی حقوق اسلامی</Text>
           <Text style={styles.header2}>مهم ترین دروس</Text>
           <Text style={styles.body1}>
           اصول فقه - 
معارف اسلامی - 
تفسیر قرآن - 
اخلاق اسلامی - 
مبادی العربیه
آشنایی با قرآن</Text>
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
export default religous;