
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Text, Button, Thumbnail, Subtitle, Container, Content } from 'native-base';

class industry2 extends Component {
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
            معرفی رشته های کارودانش
          </Text>
          <Text style={styles.body1}>
            رشته ی کاردانش با هدف آموختن فنون و مهارت های مورد نیاز جامعه به افراد و هدایت و پرورش استعداد های دانش آموزان ، ایجاد شده است. رشته کاردانش شامل 3 زیر شاخه اصلی صنعت ، خدمات و کشاورزی و هنر می باشد. هر کدام از این 3 شاخه شامل چندین رشته می باشد ، به طوری که مجموعا شاخه کاردانش بیش از 150 زیر شاخه را شامل می شود ، ولی باید این نکته را در نظر داشته باشید که تمام این رشته ها در یک هنرستان کار دانش ارائه نمی شود ، در واقع هیچ هنرستانی تمام رشته ها را به صورت یک جا ارائه نمی دهد.
          </Text>
          <Text style={styles.header2}>
            شاخه صنعت
          </Text>
          <Text style={styles.body1}>برق ساختمان</Text>
          <Text style={styles.body1}>نقشه کشی صنعتی به کمک رایانه</Text>
          <Text style={styles.body1}>تولید کننده چند رسانه ای</Text>
          <Text style={styles.body1}>تولید و توسعه دهنده پایگاه های اینترنتی</Text>
          <Text style={styles.body1}>عیب یابی سیستم های رایانه ای</Text>
          <Text style={styles.body1}>تصویر سازی دیجیتالی</Text>
          <Text style={styles.body1}>برنامه نویسی پایگاه داده</Text>
          <Text style={styles.body1}>آبکاری فلزات</Text>
          <Text style={styles.body1}>ریخته گری</Text>
          <Text style={styles.body1}>معماری آینه کاری</Text>
          <Text style={styles.body1}>سنگ کاری و کاشی کاری</Text>
          <Text style={styles.body1}>تعمیر موتورهای دیزل دریایی</Text>
          <Text style={styles.body1}>نصب و سرویس آسانسور</Text>
          <Text style={styles.body1}>تاسیسات بهداشتی ساختمان</Text>
          <Text style={styles.body1}>تاسیسات حرارتی و برودتی</Text>
          <Text style={styles.body1}>تراشکاری</Text>
          <Text style={styles.body1}>ماشین های الکتریکی</Text>
          <Text style={styles.body1}>نقشه کشی ساختمان</Text>
          <Text style={styles.body1}>تزئینات داخلی ساختمان</Text>
          <Text style={styles.body1}>کارهای فلزی ساختمان</Text>
          <Text style={styles.body1}>کارهای عمومی ساختمان</Text>
          <Text style={styles.body1}>نساجی عمومی</Text>
          <Text style={styles.body1}>مکانیک صنایع</Text>
          <Text style={styles.body1}>برق صنعتی</Text>
          <Text style={styles.body1}>الکترونیک صنعتی</Text>
          <Text style={styles.body1}>برنامه نویسی بازی های رایانه ای</Text>
          <Text style={styles.body1}>اتوماسیون صنعتی</Text>
          <Text style={styles.body1}>تعمیر ابزار دقیق</Text>
          <Text style={styles.body1}>تولید محتوای الکترونیکی</Text>
          <Text style={styles.body1}>تعمیر دستگاه های پزشکی</Text>
          <Text style={styles.body1}>تابلو سازی برق صنعتی</Text>
          <Text style={styles.body1}>تعمیر لوازم خانگی برقی</Text>
          <Text style={styles.body1}>تعمیر تلفن های رومیزی و همراه</Text>
          <Text style={styles.body1}>سیستم های صوتی و تصویری</Text>
          <Text style={styles.body1}>طراحی و توسعه صفحات وب</Text>
          <Text style={styles.body1}>فرزکاری CNC</Text>
          <Text style={styles.body1}>ساخت مصنوعات فلزی</Text>
          <Text style={styles.body1}>روکش کاری چوبی</Text>
          <Text style={styles.body1}>مبل سازی مدرن</Text>
          <Text style={styles.body1}>خدمات فنی خودرو</Text>
          <Text style={styles.body1}>پلاستیک کار</Text>
          <Text style={styles.body1}>تعمیر و نصب ماشین ابزار</Text>
          <Text style={styles.body1}>تاسیسات حرارت مرکزی</Text>
          <Text style={styles.body1}>ماشین ابزار</Text>
          <Text style={styles.body1}>ناظر فنی چاپ</Text>
          <Text style={styles.body1}>چاپ افست</Text>
          <Text style={styles.body1}>مدلسازی</Text>
          <Text style={styles.body1}>مبل سازی کلاسیک</Text>
          <Text style={styles.body1}>رنگ کاری مبلمان چوبی</Text>
          <Text style={styles.body1}>تعمیر خودروهای تجاری</Text>
          <Text style={styles.body1}>جوشکاری برق</Text>
          <Text style={styles.body1}>تزئینات داخلی چوبی</Text>
          <Text style={styles.body1}>خدمات پس از فروش خودروهای سبک</Text>
          <Text style={styles.body1}>جوشکاری گاز محافظ</Text>
          <Text style={styles.body1}>اپراتور CNC چوب</Text>
          <Text style={styles.body1}>بازسازی مبلمان</Text>
          <Text style={styles.body1}>تاسیسات گازرسی ساختمان</Text>
          <Text style={styles.body1}>تراشکاری CNC</Text>
          <Text style={styles.body1}>تراشکاری و فرزکاری</Text>
          <Text style={styles.body1}>تعمیر موتور خودرو</Text>
          <Text style={styles.body1}>کابینت سازی چوبی</Text>
          <Text style={styles.body1}>قالب سازی فلزی</Text>
          <Text style={styles.body1}></Text>
          <Text style={styles.header2}>
            شاخه کشاورزی و خدمات
          </Text>
          <Text style={styles.body1}>امور اداری</Text>
          <Text style={styles.body1}>حسابداری مالی</Text>
          <Text style={styles.body1}>هتلداری</Text>
          <Text style={styles.body1}>مدیریت و برنامه ریزی امور خانواده</Text>
          <Text style={styles.body1}>هوانوردی</Text>
          <Text style={styles.body1}>ایمنی و آتش نشانی</Text>
          <Text style={styles.body1}>مددیاری سالمندان</Text>
          <Text style={styles.body1}>مددیاری افراد با نیروهای ویژه</Text>
          <Text style={styles.body1}>تولید نهال و جنگل کاری</Text>
          <Text style={styles.body1}>زراعت غلات و حبوبات</Text>
          <Text style={styles.body1}>پرورش قارچ خوراکی</Text>
          <Text style={styles.body1}>پرورش میوه های هسته دار</Text>
          <Text style={styles.body1}>کشت و کار مکانیزه</Text>
          <Text style={styles.body1}>پرورش پرندگان زینتی</Text>
          <Text style={styles.body1}>تعمیر ماشین های ثابت کشاورزی</Text>
          <Text style={styles.body1}>تعمیر موتورهای سبک کشاورزی</Text>
          <Text style={styles.body1}>تعمیر سیستم انتقال نیروهیدرولیک</Text>
          <Text style={styles.body1}>ایجاد و نگهداری فضای سبز</Text>
          <Text style={styles.body1}>پرورش صنعتی دام های سنگین</Text>
          <Text style={styles.body1}>تکثیر ماهیان گرم آبی</Text>
          <Text style={styles.body1}>پرورش صنعتی دام های سبک</Text>
          <Text style={styles.body1}>پرورش درختان گرمسیری</Text>
          <Text style={styles.body1}>پرورش ماهیان گرم آبی</Text>
          <Text style={styles.body1}>پرورش زنبور عسل و کرم ابریشم</Text>
          <Text style={styles.body1}>پرورش و نگهداری اسب</Text>
          <Text style={styles.body1}>پرورش میگو</Text>
          <Text style={styles.body1}>پرورش ماکیان</Text>
          <Text style={styles.body1}>مکانیک تراکتور و تیلر</Text>
          <Text style={styles.body1}>تکثیر و پرورش ماهیان سرد آبی</Text>
          <Text style={styles.body1}>راهنمای گردشگری</Text>
          <Text style={styles.body1}>بورس و اوراق بهادار</Text>
          <Text style={styles.body1}>دریانوردی صیادی</Text>
          <Text style={styles.body1}>تکثیر میگو</Text>
          <Text style={styles.body1}>زراعت گیاهان علوفه ای و غده ای</Text>
          <Text style={styles.body1}>مرغداری صنعتی</Text>
          <Text style={styles.body1}>کشت گیاهان دارویی و زعفران</Text>
          <Text style={styles.body1}>پرورش گیاهان جالیزی و سبزی</Text>
          <Text style={styles.body1}>تولید نهال و جنگل کاری</Text>
          <Text style={styles.body1}>پرورش درخت و درختچه زینتی</Text>
          <Text style={styles.body1}>پرورش گل و گیاه آپارتمانی</Text>
          <Text style={styles.body1}>پرورش میوه های دانه دار و دانه ریز</Text>
          <Text style={styles.body1}>پرورش میوه های هسته دار</Text>
          <Text style={styles.body1}>تولید صنعتی فرآورده های لبنی</Text>
          <Text style={styles.body1}>تولید فرآورده های گوشتی</Text>
          <Text style={styles.body1}>فرآوری آبزیان و تولید کنسرو</Text>
          <Text style={styles.body1}></Text>
          <Text style={styles.header2}>
            شاخه هنر
          </Text>
          <Text style={styles.body1}>عکاسی</Text>
          <Text style={styles.body1}>معماری داخلی</Text>
          <Text style={styles.body1}>تولید محتوا و انیمیشن</Text>
          <Text style={styles.body1}>تصویر برداری</Text>
          <Text style={styles.body1}>چهره سازی</Text>
          <Text style={styles.body1}>نگارگری</Text>
          <Text style={styles.body1}>منبت کاری</Text>
          <Text style={styles.body1}>نقاشی ایرانی</Text>
          <Text style={styles.body1}>نوازندگی ساز ایرانی</Text>
          <Text style={styles.body1}>نوازندگی ساز جهانی</Text>
          <Text style={styles.body1}>آواز ایرانی</Text>
          <Text style={styles.body1}>آواز جهانی</Text>
          <Text style={styles.body1}>خیاطی لباس زنانه</Text>
          <Text style={styles.body1}>دستیاری طراحی لباس</Text>
          <Text style={styles.body1}>هنر آیینه کاری</Text>
          <Text style={styles.body1}>مدیریت آشپزی و قنادی</Text>
          <Text style={styles.body1}>خیاطی لباس شب و عروس</Text>
          <Text style={styles.body1}>طراحی طلا و جواهر</Text>
          <Text style={styles.body1}>خیاطی مردانه دوز</Text>
          <Text style={styles.body1}>عکاسی دیجیتال</Text>
          <Text style={styles.body1}>دوخت لباس های محلی</Text>
          <Text style={styles.body1}>خیاطی دوخت های تزئینی</Text>
          <Text style={styles.body1}>ساز سازی (سنتور و سه تار)</Text>
          <Text style={styles.body1}>ساز سازی (سه تار و ساز ضربی)</Text>
          <Text style={styles.body1}>طلا و جواهر سازی</Text>
          <Text style={styles.body1}>قلم زنی روی فلز</Text>
          <Text style={styles.body1}>صحافی و جلد سازی</Text>
          <Text style={styles.body1}>هنر معرق کاری</Text>
          <Text style={styles.body1}>چاپ باتیک و سیلک اسکرین</Text>
          <Text style={styles.body1}>چاپ باتیک و قلم کار</Text>
          <Text style={styles.body1}>چاپ دستی</Text>
          <Text style={styles.body1}>کاغذ سازی</Text>
          <Text style={styles.body1}>سراجی کفش</Text>
          <Text style={styles.body1}>هنر فرش</Text>
          <Text style={styles.body1}>گرافیک رایانه ای</Text>
          <Text style={styles.body1}>تصویر سازی و جلوه های رایانه ای</Text>
          <Text style={styles.body1}>دستیاری تهیه لباس های نمایشی</Text>
          <Text style={styles.body1}>صفحه آرایی</Text>
          <Text style={styles.body1}>معرفی کاشی</Text>
          <Text style={styles.body1}>خاتم کاری</Text>
          <Text style={styles.body1}>خاتم سازی</Text>
          <Text style={styles.body1}>تراش و تزئین شیشه و کریستال</Text>
          <Text style={styles.body1}>تراش سنگ های قیمتی</Text>
          <Text style={styles.body1}>کاشی سازی هفت رنگ</Text>
          <Text style={styles.body1}>سفال و لعاب</Text>
          <Text style={styles.body1}>طراحی و نقاشی فرش</Text>
          <Text style={styles.body1}>طراحی بسته بندی</Text>
          <Text style={styles.body1}>
            همانطور که مشاهده می کنید تنوع رشته های این شاخه ، کار را برای دانش آموزان راحت تر کرده است و دانش آموزان بر اساس علاقمندی خود می توانند یکی از این رشته ها را برای تحصیل انتخاب کنند.
          </Text>
          <Text style={styles.header2}>
            تفاوت رشته فنی حرفه ای با کار دانش
          </Text>
          <Text style={styles.body1}>
            در رشته کار دانش تقریبا اکثر دروس به صورت عملی است و بیشتر وقت هنرجویان در کارگاه ها و آزمایشگاه ها گذرانده می شود ولی در رشته ی فنی حرفه ای تعدادی از دروس به صورت تئوری نیز ارائه می شود. بنابراین دروس رشته فنی حرفه ای به مراتب سخت از شاخه کار دانش می باشد و برای دانش آموزانی که علاقه ای به مباحث تئوری ندارند ، رشته کاردانش مناسب تر است
    شاخه کار دانش به دلیل آنکه دروس عملی بیشتری دارد ، تعداد رشته های بیشتری را نیز شامل می شود به طوری که در این شاخه بیش از 150 رشته ارائه می شود در حالی که در رشته فنی حرفه ای حدود 40 زیر رشته موجود می باشد.
    تفاوت سوم این دو رشته در مورد بازار کار می باشد به جرات می توان گفت فارغ التحصیلان شاخه کاردانش سریع تر جذب کار می شوند زیرا در رشته کار دانش ، دانش آموزان به صورت عملی مهارتی را می آموزند و پس از اخذ مدرک دیپلم می توانند مسئولیت شغلی را بر عهده بگیرند ، اما در رشته فنی حرفه ای دانش آموزان پس از گرفتن دیپلم و در پایان دوره کاردانی به عنوان تکنسین وارد بازار کار می شوند.
    نکته دیگری که لازم است ذکر شود این است که ، زمینه تحصیل در مقاطع بالاتر برای هر دو رشته فراهم است و دانش آموزان هر دو رشته می توانند پس از دریافت مدرک دیپلم ، برای تحصیل در دانشگاه اقدام کنند.
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
    textAlign: 'right'
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
    textAlign: 'right'
  },
  header3: {
    fontFamily: 'sans',
    fontSize: 14,
    color: 'blue',
    textAlign: 'right'
  },
})
export default industry2;