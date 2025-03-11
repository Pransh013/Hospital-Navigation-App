import { PackageTypeRadioProps } from "@/types";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

const PackageTypeRadio = ({ value, onChange }: PackageTypeRadioProps) => {
  return (
    <View className="mb-2">
      <Text className="text-base font-rubik mb-2">Package Type</Text>
      <RadioButton.Group
        onValueChange={(val) => onChange(val as "individual" | "corporate")}
        value={value}
      >
        <View className="flex-row items-center gap-5">
          <View className="flex-row items-center gap-1">
            <RadioButton value="individual" color="#3CC19A" />
            <Text className="font-rubik">Individual</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <RadioButton value="corporate" color="#3CC19A" />
            <Text className="font-rubik">Corporate</Text>
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default PackageTypeRadio;
