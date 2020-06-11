import Index from './pages/Index';
import TestScan from './pages/TestScan'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    'Index': {
      screen: Index,
      navigationOptions: {
        title: "Tela de Teste"
      }
    },
    'TestScan': {
      screen: TestScan,
      navigationOptions: {
        title: "Tela do Leitor"
      }
    }
  }, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#06f"
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
