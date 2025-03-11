import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const DoctorCard = () => {
  return (
    <View className="w-full flex-row items-center gap-8 bg-background-secondary rounded-md px-3 py-4">
      <Image source={images.MaleDoctor} />
      <View className="flex-1 items-center gap-3">
        <View>
          <Text className="text-center text-2xl font-rubik-medium">
            Dr. John Doe
          </Text>
          <View className="flex-row gap-2 items-center justify-center">
            <Text className="font-rubik text-zinc-500">Cardiologist</Text>
            <View className="h-5/6 w-0.5 bg-zinc-400"></View>
            <Text className="font-rubik text-zinc-500">Apollo Hospital</Text>
          </View>
        </View>
        <View className="flex-row justify-between w-full">
          <View className="items-center">
            <Text className="font-rubik text-zinc-500">Experience</Text>
            <Text className="font-rubik-medium text-zinc-600">6 years</Text>
          </View>
          <View className="items-center">
            <Text className="font-rubik text-zinc-500">Treated</Text>
            <Text className="font-rubik-medium text-zinc-600">50+</Text>
          </View>
          <View className="items-center">
            <Text className="font-rubik text-zinc-500">Rating</Text>
            <Text className="font-rubik-medium text-zinc-600">4.3 ⭐</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;
