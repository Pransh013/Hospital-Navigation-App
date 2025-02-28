import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

type PackageTypeRadioProps = {
  value: "individual" | "corporate";
  onChange: (val: "individual" | "corporate") => void;
};

const PackageTypeRadio = ({ value, onChange }: PackageTypeRadioProps) => {
  return (
    <View className="mb-4">
      <Text className="text-base font-medium mb-2">Package Type</Text>
      <RadioButton.Group
        onValueChange={(val) => onChange(val as "individual" | "corporate")}
        value={value}
      >
        <View className="flex-row items-center gap-2 mb-2">
          <RadioButton value="individual" color="#3CC19A" />
          <Text>Individual</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <RadioButton value="corporate" color="#3CC19A" />
          <Text>Corporate</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default PackageTypeRadio;
