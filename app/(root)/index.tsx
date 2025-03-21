import Button from "@/components/Button";
import Header from "@/components/Header";
import TestCard from "@/components/TestCard";
import TestProgress from "@/components/TestProgress";
import { tests as initialTests } from "@/constants/data";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [tests, setTests] = useState(initialTests);
  const { user } = useAuth();
  const router = useRouter();

  const name = user?.name.split(" ")[0];

  const handleMarkComplete = (testName: string) => {
    setTests((prevTests) =>
      prevTests.map((test) =>
        test.testName === testName
          ? {
              ...test,
              testStatus: "Completed",
              waitingTime: null,
              patientsInLine: 0,
            }
          : test
      )
    );
  };

  const allTestsCompleted = tests.every(
    (test) => test.testStatus === "Completed"
  );

  return (
    <SafeAreaView className="bg-background-secondary flex-1 relative w-screen">
      <ScrollView contentContainerClassName="flex-1 py-10 items-center w-full">
        <Header />
        <View className="rounded-full w-[241px] h-[226px] -right-14 -top-28  bg-[#d4e8e0ad] absolute -z-10"></View>
        <View className="rounded-full w-[241px] h-[226px] top-20 -left-10  bg-[#d4e8e0c9] absolute -z-10"></View>
        <View className="flex-row px-4 mt-4 gap-3 justify-between">
          <View className="gap-1">
            <Text className="text-4xl font-rubik-semibold">Hii {name}!</Text>
            <Text className="font-rubik-medium text-lg text-zinc-500">
              Here Is Your Test Sequence
            </Text>
          </View>
          <TestProgress tests={tests} />
        </View>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="w-full"
        >
          <View className="bg-white rounded-t-xl h-full w-full mt-4 px-4 py-10 gap-4">
            {tests.map((test, index) => (
              <TestCard
                onMarkComplete={handleMarkComplete}
                key={index}
                test={test}
              />
            ))}
          </View>
        </ScrollView>
        <Button
          title="Proceed to Consultation"
          onPress={() => {
            router.push("/consultation");
          }}
          buttonStyles="w-3/4 mt-8"
          disabled={!allTestsCompleted}
          titleStyles="text-white"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
