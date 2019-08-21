import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Thumbnail} from 'native-base';
import Title_Page from './src/components/Title_Page';
import Register_Score from './src/components/Register_Score';
import Total_Report from './src/components/Total_Report';
import About_Us from './src/components/About_Us';
import Title_Page2 from './src/components/Title_Page2';
import Help from './src/components/Help';
import Mathe from './src/components/course/mathe';
import Exprimental from './src/components/course/exprimental';
import Humanity from './src/components/course/humanity';
import Industry from './src/components/course/industry';
import Agriculture from './src/components/course/agriculture';
import Art from './src/components/course/art';
import Service from './src/components/course/service';
import Industry2 from './src/components/course/industry2';
import Agriculture2 from './src/components/course/agriculture2';
import Art2 from './src/components/course/art2';
import Service2 from './src/components/course/service2';

import { fromRight } from 'react-navigation-transitions';

const MainNavigator = createStackNavigator({
  Home: {screen: Title_Page},
  Register: {screen: Register_Score},
  Report:{screen:Total_Report},
  AboutUs:{screen:About_Us},
  Title2:{screen:Title_Page2},
  Help:{screen:Help},
  Agriculture:{screen:Agriculture},
  Art:{screen:Art},
  Industry:{screen:Industry},
  Service:{screen:Service},
  Agriculture2:{screen:Agriculture2},
  Art2:{screen:Art2},
  Industry2:{screen:Industry2},
  Service2:{screen:Service2},
  Humanity:{screen:Humanity},
  Exprimental:{screen:Exprimental},
  Mathe:{screen:Mathe}
},
{
  transitionConfig: () => fromRight(),
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#04b4cf',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily:'sans',
      textAlign:'center',
      fontSize:14,
      flex: 1,
    },
  },
});
// #007c8f
const App = createAppContainer(MainNavigator);

export default App;