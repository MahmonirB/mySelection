
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Subtitle,Container,Content} from 'native-base';

class exprimental extends Component {
    static navigationOptions = {
        title: "رشته علوم تجربی",
        headerRight: <Thumbnail small source={require('../../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
         <Container>
           <Content  style={{padding:10}}>
             <Text style={styles.header1}>معرفی رشته تجربی</Text>
             <Text style={styles.body1}>
             رشته  علوم تجربی را می توان در معرفی رشته های دبیرستان در شاخه نظری نام برد.مهم ترین دروس این رشته زیست شناسی،علوم تجربی دوره اول متوسطه،ریاضی و شیمی است.این رشته بیشتر برای علاقه مندان به ساختار بدنی انسان یا جانواران و علاقه مندان به گیاهان و طبیعت توصیه می شود.عموم درس های این رشته حفظ کردنی است و بجز ریاضی درس حل کردنی دیگری ندارد و به همین دلیل داشتن یک حافظه خوب در این رشته بسیار مفید خواهد بود.

علوم تجربی توانسته است بعد از رشته ریاضی بیشترین تنوع در انتخاب رشته دانشگاهی را به خود اختصاص دهد ولی گل سرسبد این رشته ها پزشکی و دندانپزشکی است که ظرفیت بسیار کمی دارد.بیشتر کسانی که وارد این رشته می شوند به عشق پزشکی و دندانپزشکی می آیند ولی باید بدانید که پذیرفته شدن در این دو رشته آن هم در بهترین دانشگاه های کشور کار بسیار دشواری است که نیاز به تلاش و پشتکار زیادی دارد.

پذیرفته شدن در سایر رشته های دانشگاهی ناشی از رشته علوم تجربی آسان تر است و رشته های آزمایشگاهی و پرستاری در رده های بعد قرار میگیرند.آینده شغلی این رشته ها خوب و است و در  مراکز درمانی مشغول به کار می شوند.اگر علاقه مند به این رشته ها هستید باید بدانید سختی های خاص خودش را هم دارد و بهتر است قبل از انتخاب رشته با فارق التحصیلان این رشته مشورت کنید.
             </Text>
             <Text style={styles.body1}>
             رشته های دانشگاهی که از رشته علوم تجربی تجربی ناشی می شوند شامل ۵ زیر گروه هستند که در اینجا به معرفی این زیر گروه ها و رشته های آن می پردازیم.
</Text>
<Text style={styles.header2}>زیر گروه اول</Text>
<Text style={styles.body1}>بیوتکنولوژی</Text>
<Text style={styles.body1}>پزشکی</Text>
<Text style={styles.body1}>دامپزشکی</Text>
<Text style={styles.body1}>دندانپزشکی</Text>
<Text style={styles.body1}>اتاق عمل</Text>
<Text style={styles.body1}>بینایی سنجی</Text>
<Text style={styles.body1}>زیست شناسی</Text>
<Text style={styles.body1}>علوم آزمایشگاهی</Text>
<Text style={styles.body1}>علوم تغذیه</Text>
<Text style={styles.body1}>علوم تربیتی</Text>
<Text style={styles.body1}>فیزیوتراپی و ...</Text>
<Text style={styles.header2}>زیر گروه دوم</Text>
<Text style={styles.body1}>دارو سازی</Text>
<Text style={styles.body1}>شیمی</Text>
<Text style={styles.body1}>مهندسی بهداشت حرفه ای</Text>
<Text style={styles.body1}>مهندسی بهداشت محیط</Text>
<Text style={styles.body1}>شیمی</Text>
<Text style={styles.body1}>کارشناسی بهداشت عمومی</Text>
<Text style={styles.body1}>کارشناسی تکنولوژی پزشکی هسته ای</Text>
<Text style={styles.body1}>کارشناسی فناوری اطلاعات سلامت</Text>
<Text style={styles.body1}>کارشناسی بهداشت عمومی و ...</Text>
<Text style={styles.header2}>زیر گروه سوم</Text>
<Text style={styles.body1}>اقیانوس شناسی</Text>
<Text style={styles.body1}>زمین شناسی</Text>
<Text style={styles.header2}>زیر گروه چهارم</Text>
<Text style={styles.body1}>
الهیات و معارف اسلامی و ارشاد- 
علوم قضایی - 
اقتصاد اسلامی - 
حسابداری - 
زبان و ادبیات عربی - 
فناوری اطلاعات و ارتباطات - 
علوم اقتصادی - 
علوم انتظامی - 
مدیریت مالی - 
مدیریت صنعتی - 
مدیریت کسب و کار های کوچک - 
مدیریت فرهنگی هنری - 
مدیریت بازرگانی دریایی
و…
</Text>
<Text style={styles.header2}>
زیر گروه پنجم
</Text>
<Text style={styles.body1}>
اقتصاد کشاورزی - 
امنیت اطلاعاتی - 
آموزش تربیت بدنی - 
تربیت مربی عقیدتی سیاسی - 
کتابداری در شاخه پزشکی - 
مهندسی صنایع مبلمان - 
مددکاری اجتماعی
و…</Text>
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
export default exprimental;