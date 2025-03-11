import { View, Text } from "react-native";
import Icon from "./Icon";

const ConsultationDetails = () => {
  return (
    <View className="justify-between flex-row items-center px-4 pb-4">
      <View className="justify-center items-center">
        <Text className="text-zinc-500 font-rubik-medium text-lg">Time</Text>
        <Text className="text-green font-rubik-semibold text-xl">4:30 PM</Text>
      </View>
      <View className="h-5/6 w-0.5 bg-zinc-500/50"></View>
      <View className="justify-center items-center">
        <Text className="text-zinc-500 font-rubik-medium text-lg">Floor</Text>
        <Text className="text-green font-rubik-semibold text-xl">04</Text>
      </View>
      <View className="h-5/6 w-0.5 bg-zinc-500/50"></View>
      <View className="justify-center items-center">
        <Text className="text-zinc-500 font-rubik-medium text-lg">Room</Text>
        <Text className="text-green font-rubik-semibold text-xl">08</Text>
      </View>
    </View>
  );
};

export default ConsultationDetails;
