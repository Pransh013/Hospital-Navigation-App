import React from "react";
import { View, Text } from "react-native";

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
  const progressWidth =
    totalTests > 0 ? (completedTests / totalTests) * 100 : 0;

  return (
    <View className="bg-white items-center rounded-lg w-36 h-16 p-4 justify-center">
      <Text className="font-rubik-bold mb-2">
        {completedTests} / {totalTests}
      </Text>

      {/* Custom Progress Bar */}
      <View className="w-full h-2.5 bg-zinc-200 rounded-md overflow-hidden">
        <View
          className="h-full bg-green rounded-md"
          style={{ width: `${progressWidth}%` }}
        />
      </View>
    </View>
  );
};

export default TestProgress;
