import Button from "@/components/Button";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Images from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ShareReports = () => {
  return (
    <SafeAreaView className="bg-background-secondary flex-1 py-10 px-2">
      <ScrollView contentContainerClassName="flex-1">
        <Header />
        <View className="mt-10 items-center justify-center px-10 gap-14 py-4">
          <View className="items-center justify-center gap-5">
            <View className="rounded-full items-center justify-center bg-button-bg size-14">
              <Icon name="Check" color="white" strokeWidth={3} size={32} />
            </View>
            <View>
              <Text className="text-center text-3xl font-rubik-medium">
                Your Consultation
              </Text>
              <Text className="text-center text-3xl font-rubik-medium">
                is Complete
              </Text>
            </View>
          </View>
          <View className="w-full gap-6">
            <Button
              onPress={() => {}}
              title="Download Reports"
              buttonStyles="w-full"
              titleStyles="text-white"
            />
            <Button
              onPress={() => {}}
              title="Share Reports on Email"
              buttonStyles="bg-transparent border border-button-bg"
              titleStyles="text-[#3CC19A]"
            />
            <Button
              onPress={() => {}}
              title="View all Tests"
              buttonStyles="bg-transparent py-0"
              titleStyles="text-[#3CC19A]"
            />
            <Button
              onPress={() => {}}
              title="Book Another Test"
              buttonStyles="bg-transparent border border-button-bg"
              titleStyles="text-[#3CC19A]"
            />
          </View>
          <View className="relative items-center">
            <View className="rounded-full w-[241px] h-[226px] -top-8 -left-20 bg-[#d4e8e0c9] absolute -z-10"></View>
            <Image source={Images.DoctorM} alt="doctorM" className="" />
            <Image
              source={Images.Document2}
              alt="document"
              className="absolute -left-8 top-2 w-16 h-16"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShareReports;
