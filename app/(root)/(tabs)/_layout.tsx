import { TabIcon } from "@/components/TabIcon";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="House" title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="share-reports"
        options={{
          title: "Share Reports",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon="ClipboardPlus"
              title="Share Reports"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
