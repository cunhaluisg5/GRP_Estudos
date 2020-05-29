import Index from './pages/Index';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    'Index' : {
      screen: Index,
      navigationOptions: {
        title: "Tela de Teste"
      }
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:"#06f"
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
      }
    }
  }
);

const Router = createAppContainer(AppNavigator); 
export default Router;
