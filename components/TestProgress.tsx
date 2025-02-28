import React from "react";
import { View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";

interface Test {
  testName: string;
  testStatus: string;
}

interface TestProgressProps {
  tests: Test[];
}

const TestProgress = ({ tests }: TestProgressProps) => {
  const calculateCompletionDetails = (tests: Test[]) => {
    const completedTests = tests.filter(
      (test) => test.testStatus === "Completed"
    ).length;
    const totalTests = tests.length;
    return { completedTests, totalTests };
  };

  const { completedTests, totalTests } = calculateCompletionDetails(tests);
  const completionPercentage = (completedTests / totalTests) * 100;

  return (
    <View className="bg-white items-center rounded-lg w-32 h-16">
      <Text className="font-rubik-bold">
        {completedTests} / {totalTests}
      </Text>
      <ProgressBar
        progress={completionPercentage / 100}
        color="#3CC19A"
      />
    </View>
  );
};

export default TestProgress;
