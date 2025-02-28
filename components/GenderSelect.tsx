import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const GenderSelect = ({
  value,
  onChange,
}: {
  value: "male" | "female" | "other";
  onChange: (val: "male" | "female" | "other") => void;
}) => {
  return (
    <View>
      <Text className="mb-1 text-gray-700">Select Gender:</Text>
      <View className="border border-gray-300 rounded-md">
        <Picker selectedValue={value} onValueChange={onChange}>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
    </View>
  );
};

export default GenderSelect;
