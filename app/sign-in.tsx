import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {

  return (
    <SafeAreaView className="bg-primary-background h-full py-10 px-4">
      <ScrollView contentContainerClassName="h-full">
        <Text>Sign In</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
