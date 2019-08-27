import {createStackNavigator, createAppContainer} from 'react-navigation';
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
import Industry2 from './src/components/course/industry2';
import {Root} from 'native-base';
import React from 'react';
import { fadeIn } from 'react-navigation-transitions';

const MainNavigator = createStackNavigator({
  Home: {screen: Title_Page},
  Register: {screen: Register_Score},
  Report:{screen:Total_Report},
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