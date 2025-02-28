import { Text, View } from "react-native";
import { icons } from "lucide-react-native";
import Icon from "./Icon";

export const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: keyof typeof icons;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Icon name={icon} color={focused ? "#3CC19A" : "#666876"} size={24} />
    <Text
      className={`${
        focused
          ? "text-green font-rubik-medium"
          : "text-black-200 font-rubik"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);
