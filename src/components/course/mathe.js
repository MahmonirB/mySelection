
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Subtitle, Container, Content} from 'native-base';

class mathe extends Component {
    static navigationOptions = {
        title: "رشته ریاضی فیزیک",
        headerRight: <Thumbnail small source={require('../../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
    render() {
      const {navigate} = this.props.navigation;
      return (
       <Container>
         <Content  style={{padding:10}}>
           <Text style={styles.header1}>آشنایی با رشته ریاضی</Text>
           <Text style={styles.body1}>
           رشته ریاضی فیزیک یکی از رشته های دبیرستان است که تعداد زیادی از دانش آموزان وارد آن می شوند. دروس اصلی این رشته، فیزیک و ریاضی است.  دانش آموزانی که می خواهند رشته ریاضی فیزیک را انتخاب کنند باید اولا به این دروس علاقه داشته و ثانیا توانایی لازم برای یادگیری دروس فیزیک و ریاضی را داشته باشند.

البته درس شیمی هم نباید فراموش شود. برای قبولی و ورود به تعدادی از رشته های دانشگاهی ریاضی از جمله مهندسی شیمی، مهندسی پلیمر، مهندسی نفت و … قوی بودن در درس شیمی الزامی است.

برای آشنایی بیشتر با رشته ریاضی فیزیک دانش آموزان می توانند به صورت کلی با دروسی که باید در دوره دوم متوسطه بخوانند آشنا شوند. برخی از عناوین کتاب های تخصصی رشته ریاضی فیزیک عبارتند از: فیزیک (و آزمایشگاه فیزیک)، شیمی(و آزمایشگاه شیمی)،ریاضی، هندسه، جبر و احتمال،حسابان، هندسه تحلیلی و جبر خطی، حساب دیفرانسیل و انتگرال، ریاضیات گسسته

رشته ریاضی فیزیک در دانشگاه دارای تنوع و تعداد رشته دانشگاهی زیادی است . برای رسیدن به اکثر شغل های فنی و مهندسی باید در رشته ریاضی فیزیک تحصیل کرد.
کسانی که وارد این رشته می شوند معمولا به رشته های مهندسی علاقه مند بوده و توانایی استدلال و حل کردن مسائل را دارند.همچنین برای درس هایی مثل هندسه و ریاضیات گسسته باید توانایی تجسم کردن خوبی را دارا باشید.

اگر می خواهید در کنکور ریاضی فیزیک موفق شوید و رد رشته های فنی و مهندسی تحصیل کنید باید سرعت عمل خوبی داشته باشید و دقیق باشید.چون وجود یک اشتباه کوچک در محاسبات شانس موفقیت شما را پایین می آورد.علاوه بر دو درس ریاضی و فیزیک درس شیمی نیز از اهمیت زیادی در این رشته برخوردار است پس باید بتوانید با این دروس ارتباط خوبی برقرار کنید.

با صنعتی شدن ایران نیاز به رشته های فنی و مهندسی نیز افزایش یافته و بازار کار خوبی برای فارق التحصیلان این رشته ها وجود دارد.البته گستردگی رشته های ناشی از ریاضی و فیزیک در دانشگاه بسیار زیاد است و رشته های شناور و مشترکی مثل مدیریت و روانشناسی از طریق این رشته قابل ورود است.
           </Text>
           <Text style={styles.header2}>
           رشته های ریاضی در دانشگاه
           </Text>
           <Text style={styles.body1}>
           برای آشنایی بیشتر شما با رشته های ریاضی در دانشگاه تعدادی از آن ها را در این قسمت نام میبریم.این رشته ها به سه زیر گروه تقسیم می شوند.
</Text>
<Text style={styles.body1}>زیر گروه اول</Text>
<Text style={styles.body1}>
کاردانی مراقبت از پرواز - 
دبیری ریاضی - 
دبیری فیزیک - 
علوم تربیتی - 
علوم اقتصادی  - 
مدیریت هتلداری - 
آمار و کاربرد ها - 
مهندسی صنایع - 
کاردانی معماری - 
مهندسی مکانیک - 
مهندسی نساجی - 
مهندسی هوافضا - 
حسابداری - 
مهندسی عمران - 
مهندسی کامپیوتر - 
مهندسی پزشکی  
و…
</Text>
<Text style={styles.body1}>زیرگروه دوم</Text>
<Text style={styles.body1}>
شیمی - 
مهندسی ایمنی - 
مهندسی پلیمر - 
مهندسی شیمی - 
مهندسی نفت- 
مهندسی معدن
و…
</Text>
<Text style={styles.body1}>زیر  گروه سوم</Text>
<Text style={styles.body1}>
کاردانی برق - 
کاردانی صنایع - 
کاردانی عمران - 
کاردانی عملیات پتروشیمی - 
کاردانی معدن - 
کاردانی مکانیک - 
کاردانی الکترونیک هواپیمایی
و…
           </Text>
           <Text style={styles.body1}></Text>
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
export default mathe;