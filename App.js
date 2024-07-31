// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import NotificationPage from './Components/NotificationPage'; 
import TRquestions from './Components/TRquestions';
import HRQuestions from './Components/HRQuestions';
import McqQuestions from './Components/McqQuestions';
import Mockinterviews from './Components/Mockinterviews';
import Workshopareas from './Components/Workshopareas';
import FAQs from './Components/FAQs';
import Blog from './Components/Blog';
import Placements from './Components/Placements';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NotificationPage" component={NotificationPage} />
        <Stack.Screen name="TRquestions" component={TRquestions} />
        <Stack.Screen name="HRQuestions" component={HRQuestions} />
        <Stack.Screen name="McqQuestions" component={McqQuestions} />
        <Stack.Screen name="Mockinterviews" component={Mockinterviews} />
        <Stack.Screen name="Workshopareas" component={Workshopareas} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Placements" component={Placements} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
        <Stack.Screen name="About Us" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
