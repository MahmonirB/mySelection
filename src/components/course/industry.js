
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Text, Button, Thumbnail, Subtitle, Container, Content, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class industry extends Component {
  static navigationOptions = {
    title: "معرفی شاخه فنی و حرفه ای",
    headerRight: <Thumbnail small source={require('../../../assets/img/title3.png')} style={{ marginRight: 20 }} />
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content style={{padding:10}}>
        <Text style={styles.header1}>
          معرفی رشته های فنی و حرفه ای
          </Text>
        <Text style={styles.body1}>
          هنرستان های فنی حرفه ای از مدارس معتبر زیر نظر وزارت آموزش و پرورش می باشند و رشته های بسیار متنوعی را در شاخه فنی حرفه ای ارائه می دهند. هنرستان  فنی حرفه ای سعی دارد به تربیت نیروی متخصص و فنی در رشته های تحصیلی مختلف بپردازد ، در هنرستان های فنی حرفه ای بیشتر دروس به صورت عملی و در کارگاه ها اجرا می شوند و تعداد کمتری از دروس به صورت نظری می باشند.

همچنین این مدارس به دلیل نیاز به کارگاه آموزشی برای ارائه دروس ، محیط آموزشی متفاوت تری نسبت به مدارس معمولی دارند. رشته فنی حرفه ای شامل 4 زیر گروه هنر ، مدیریت و خدمات ، صنعت و کشاورزی می باشد که هر کدام از این زیر گروه ها چندین زیر شاخه دارند که عبارتند از :
          </Text>
        <Text style={styles.header2}>
          گروه هنر
          </Text>
        <Text style={styles.body1}>
          گروه هنر شامل 13 زیر گروه است و بیشترین متقاضی را در بین 4 زیر شاخه دارا می باشد.
</Text>

   <Text style={styles.body1}>نمایش </Text>
   <Text style={styles.body1}> نقشه کشی معماری</Text>
   <Text style={styles.body1}> چاپ دستی</Text>
    <Text style={styles.body1}> نوازندگی ساز ایرانی</Text> 
    <Text style={styles.body1}> نوازندگی ساز جهانی</Text> 
    <Text style={styles.body1}> نقاشی</Text> 
    <Text style={styles.body1}> گرافیک</Text> 
    <Text style={styles.body1}> تولید برنامه تلویزیونی</Text> 
    <Text style={styles.body1}> انیمشین و پویا نمایی</Text> 
    <Text style={styles.body1}> صنایع دستی</Text> 
    <Text style={styles.body1}> معماری داخلی</Text> 
    <Text style={styles.body1}> طراحی دوخت</Text> 
    <Text style={styles.body1}> فتوگرافیک</Text> 
    <Text style={styles.body1}> سینما</Text> 
    <Text style={styles.body1}> طراحی زبان بصری</Text> 
    <Text style={styles.body1}> مرمت آثار فرهنگی</Text> 
    <Text style={styles.body1}> موسیقی مبانی آهنگ سازی</Text> 
 <Text style={styles.body1}> پشتیبانی صحنه</Text>
<Text  style={styles.body1}>
برخی از رشته های ذکر شده در همه ی مدارس ارائه نمی شوند و فقط بعضی از مدارس دارای این رشته ها هستند.
رشته طراحی و دوخت فقط برای خانم ها و در هنرستان های دخترانه ارائه می شود.
          </Text>
        <Text style={styles.header2}>
          گروه مدیریت و خدمات
          </Text>
        <Text style={styles.body1}>
          این رشته در 3 گروه طبقه بندی می شود که شامل گروه بازرگانی و امور اداری ، گروه بهداشت و سلامت و گروه خدمات می باشد.
</Text>
<Text style={styles.body1}>گروه خدمات : ناوبری ، حمل و نقل</Text>
<Text style={styles.body1}>گروه بازرگانی و امور اداری : حسابداری</Text>
<Text style={styles.body1}>گروه بهداشت و سلامت : تربیت کودک ، تربیت بدنی</Text>
<Text style={styles.body1}>
در رشته کودکیاری ، اصول تربیتی خانواده و روش های صحیح و اصولی پرورش کودکان مطرح می شود و فقط در هنرستان های دخترانه این رشته ارائه می شود.
          </Text>
        <Text style={styles.header2}>
          گروه صنعت
          </Text>
        <Text style={styles.body1}>
          گروه صنعت از 5 زیر گروه تشکیل شده است که عبارتند از :
</Text>
 <Text style={styles.header3}>زیر گروه برق و رایانه</Text>
 <Text style={styles.body1}>الکتروتکنیک</Text>
 <Text style={styles.body1}>الکترونیک</Text>
 <Text style={styles.body1}>شبکه و نرم افزار</Text>
 <Text style={styles.body1}>الکترونیک و مخابرات دریایی</Text>
 <Text style={styles.header3}>زیر گروه تعمیر و نگهداری ماشین آلات دریایی</Text>
 <Text style={styles.body1}>مکانیک موتورهای دریایی</Text>
 <Text style={styles.header3}>زیر گروه مواد و فرآوری</Text>
 <Text style={styles.body1}>سرامیک</Text>
 <Text style={styles.body1}>صنایع شیمیایی</Text>
 <Text style={styles.body1}>صنایع نساجی</Text>
 <Text style={styles.body1}>متالوژی</Text>
 <Text style={styles.body1}>معدن</Text>
 <Text style={styles.header3}>زیر گروه مکانیک</Text>
 <Text style={styles.body1}>مکاترونیک</Text>
 <Text style={styles.body1}>صنایع فلزی</Text>
 <Text style={styles.body1}>تاسیسات مکانیکی</Text>
 <Text style={styles.body1}>ماشین ابزار</Text>
 <Text style={styles.body1}>مکانیک خودرو</Text>
 <Text style={styles.body1}>صنایع چوب و مبلمان</Text>
 <Text style={styles.body1}>ابزار</Text>
 <Text style={styles.header3}>زیر گروه معماری ساختمان</Text>
 <Text style={styles.body1}>معماری</Text>

        <Text style={styles.header2}>
          گروه کشاورزی
          </Text>
        <Text style={styles.body1}>امور دامی</Text>
        <Text style={styles.body1}>امور زراعی</Text>
        <Text style={styles.body1}>امور باغی</Text>
        <Text style={styles.body1}>ماشین های کشاورزی</Text>
        <Text style={styles.body1}>صنایع غذایی</Text>
        <Text style={styles.body1}>
تحصیل در رشته های فنی حرفه ای مزایا و معایب خود را دارد که از معایب آن می توان به عدم وجود دانشگاه درجه یک تا مقطع ارشد اشاره کرد ، در واقع با انتخاب رشته های فنی حرفه ای شانس تحصیل در دانشگاه های درجه یک کشور را از دست داده ایم ولی به طور کلی دانشگاه های فنی حرفه ای که زیر نظر وزارت علوم تحقیقات و فناوری فعالیت می کنند بهترین گزینه ممکن برای دارندگان مدرک دیپلم رشته فنی حرفه ای می باشند. به جز دانشگاه های فنی حرفه ای ، دانشگاه های علمی کاربردی ، آزاد و غیر انتفاعی نیز از رشته های فنی حرفه ای ارائه می دهند.

ولی در کنار این معایب ، مزایای خاص خود را نیز دارد که می توان  به راحت تر وارد بازار کار شدن فارغ التحصیلان این رشته اشاره کرد از آنجایی که اساس رشته های فنی حرفه ای کار های عملی و کارگاهی می باشد بنابراین فارغ التحصیلان این رشته زودتر مهارت خود را در شغل انتخابی به ظهور می رسانند و به دلیل نیاز اساسی کشور به نیروی انسانی متخصص و فنی در همه ی زمینه ها ، دانش آموزان این رشته بعد از فارغ التحصیلی با بازار کار مناسبی روبرو می شوند. </Text>
<Text style={styles.header2}>
            تفاوت رشته فنی حرفه ای با کار دانش
          </Text>
          <Text style={styles.body1}>
            در رشته کار دانش تقریبا اکثر دروس به صورت عملی است و بیشتر وقت هنرجویان در کارگاه ها و آزمایشگاه ها گذرانده می شود ولی در رشته ی فنی حرفه ای تعدادی از دروس به صورت تئوری نیز ارائه می شود. بنابراین دروس رشته فنی حرفه ای به مراتب سخت از شاخه کار دانش می باشد و برای دانش آموزانی که علاقه ای به مباحث تئوری ندارند ، رشته کاردانش مناسب تر است
    شاخه کار دانش به دلیل آنکه دروس عملی بیشتری دارد ، تعداد رشته های بیشتری را نیز شامل می شود به طوری که در این شاخه بیش از 150 رشته ارائه می شود در حالی که در رشته فنی حرفه ای حدود 40 زیر رشته موجود می باشد.
    تفاوت سوم این دو رشته در مورد بازار کار می باشد به جرات می توان گفت فارغ التحصیلان شاخه کاردانش سریع تر جذب کار می شوند زیرا در رشته کار دانش ، دانش آموزان به صورت عملی مهارتی را می آموزند و پس از اخذ مدرک دیپلم می توانند مسئولیت شغلی را بر عهده بگیرند ، اما در رشته فنی حرفه ای دانش آموزان پس از گرفتن دیپلم و در پایان دوره کاردانی به عنوان تکنسین وارد بازار کار می شوند.
    نکته دیگری که لازم است ذکر شود این است که ، زمینه تحصیل در مقاطع بالاتر برای هر دو رشته فراهم است و دانش آموزان هر دو رشته می توانند پس از دریافت مدرک دیپلم ، برای تحصیل در دانشگاه اقدام کنند.
</Text>
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
export default industry;