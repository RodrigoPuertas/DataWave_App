import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Importar as telas que você irá criar
import HomeScreen from './Screens/HomeScreen';
import DataInputScreen from './Screens/DataInputScreen';
import TimeDomainInputScreen from './Screens/TimeDomainInputScreen';
import FrequencyDomainInputScreen from './Screens/FrequencyDomainInputScreen';
import ImpulseResponseScreen from './Screens/ImpulseResponseScreen';
import FrequencyResponseScreen from './Screens/FrequencyResponseScreen';
import OutputSpectrumScreen from './Screens/OutputSpectrumScreen';
import TimeDomainOutputScreen from './Screens/TimeDomainOutputScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home" // Define a tela inicial
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Data Input') {
              iconName = focused ? 'create' : 'create-outline';
            } else {
              iconName = 'analytics-outline'; // Ícones para outras telas
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          drawerActiveTintColor: 'blue',
          drawerInactiveTintColor: 'gray',
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Data Input" component={DataInputScreen} />
        <Drawer.Screen name="Time Domain Input" component={TimeDomainInputScreen} />
        <Drawer.Screen name="Frequency Domain Input" component={FrequencyDomainInputScreen} />
        <Drawer.Screen name="Impulse Response" component={ImpulseResponseScreen} />
        <Drawer.Screen name="Frequency Response" component={FrequencyResponseScreen} />
        <Drawer.Screen name="Output Spectrum" component={OutputSpectrumScreen} />
        <Drawer.Screen name="Time Domain Output" component={TimeDomainOutputScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
