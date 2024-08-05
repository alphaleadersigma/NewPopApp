import { View, Image } from 'react-native';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  const homeIconInactive = require('/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/ri_home-fill (1).png'); // Path to the inactive icon
  const homeIconActive = require('/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/HomeIcon.png'); // Path to the active icon
    
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={focused ? homeIconActive : homeIconInactive}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      {/* Add other tabs here */}
    </Tabs>
  );
};

export default TabsLayout;
