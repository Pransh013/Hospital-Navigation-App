import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary-background justify-center h-full py-10">
      <ScrollView contentContainerClassName="h-full items-center">
        <Text>Hello There</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
