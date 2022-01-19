
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login} from "./Login";
import {Home} from "./Home";
import {UserForm} from "./UserForm";
import {Cliente} from "./Cliente";
import {EmptyForm} from "./EmptyForm";
import {ServicoForm} from "./ServicoForm";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="EmptyForm" component={EmptyForm} />
        <Stack.Screen name="UserForm" component={UserForm} />
        <Stack.Screen name="ServicoForm" component={ServicoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
