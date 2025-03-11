import { ButtonProps } from "@/types";
import { TouchableOpacity, Text } from "react-native";

const Button = ({
  title,
  onPress,
  buttonStyles,
  titleStyles,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="button"
      className={`${
        disabled ? "bg-gray" : "bg-button-bg"
      } rounded-lg items-center justify-center py-4 ${buttonStyles}`}
      disabled={disabled}
    >
      <Text className={`text-lg text-center font-rubik-medium ${titleStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
