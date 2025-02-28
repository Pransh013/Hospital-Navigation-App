import { ButtonProps } from "@/types";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ title, onPress, buttonStyles, titleStyles }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="button"
      className={`bg-button-bg rounded-lg w-full py-4 ${buttonStyles}`}
    >
      <Text
        className={`text-lg text-center font-rubik-medium ${titleStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
