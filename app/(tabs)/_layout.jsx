import { View, Image } from 'react-native';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  const homeIconInactive = require('../../assets/ri_home-fill (1).png'); // Relative path
  const homeIconActive = require('../../assets/HomeIcon.png'); // Relative path
  const homeIconActive1 = require('../../assets/icon2.png'); // Relative path
  const homeIconInactive2 = require('../../assets/icon1.png'); // Relative path
  const homeIconInactive4 = require('../../assets/profileicon.png')
  const homeIconActive3 = require('../../assets/profileiconact.png')

  return (
    <Tabs
    screenOptions ={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#474747' 
      }
    }
    }>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            console.log('Focused:', focused); // Check if focused state is correct
            return (
              <Image
                source={focused ? homeIconActive : homeIconInactive}
                style={{ width: 30, height: 30 }}
              />
            );
          },
        }}
      />
      <Tabs.Screen // Corrected typo: Tabs.screen -> Tabs.Screen
        name="search"
        options={{
          title: "Post",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={focused ? homeIconActive1 : homeIconInactive2}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
     <Tabs.Screen // Corrected typo: Tabs.screen -> Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={focused ? homeIconActive3 : homeIconInactive4}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tabs>

  );
};

export default TabsLayout;