import {createStackNavigator, createAppContainer} from 'react-navigation';
import Title_Page from './src/components/Title_Page';
import Register_Score from './src/components/Register_Score';
import Register_Score1 from './src/components/Register_Score1';
import Register_Score2 from './src/components/Register_Score2';
import Total_Report from './src/components/Total_Report';
import Total_Report1 from './src/components/Total_Report1';
import About_Us from './src/components/About_Us';
import Title_Page2 from './src/components/Title_Page2';
import Help from './src/components/Help';
import Mathe from './src/components/course/mathe';
import Exprimental from './src/components/course/exprimental';
import Humanity from './src/components/course/humanity';
import Industry from './src/components/course/industry';
import Industry2 from './src/components/course/industry2';
import Guide from './src/components/Guide';
import {Root} from 'native-base';
import React from 'react';
import { fadeIn } from 'react-navigation-transitions';

const MainNavigator = createStackNavigator({
  Home: {screen: Title_Page},
  Guide:{screen:Guide},
  Register: {screen: Register_Score},
  Register1: {screen: Register_Score1},
  Register2: {screen: Register_Score2},
  Report:{screen:Total_Report},
  Report1:{screen:Total_Report1},
  AboutUs:{screen:About_Us},
  Title2:{screen:Title_Page2},
  Help:{screen:Help},
  Industry:{screen:Industry},
  Industry2:{screen:Industry2},
  Humanity:{screen:Humanity},
  Exprimental:{screen:Exprimental},
  Mathe:{screen:Mathe}
},
{
  transitionConfig: () => fadeIn(),
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

export default () =>
<Root>
  <App />
</Root>;