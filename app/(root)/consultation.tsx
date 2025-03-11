import Button from "@/components/Button";
import ConsultationDetails from "@/components/ConsultationDetails";
import DoctorCard from "@/components/DoctorCard";
import Header from "@/components/Header";
import { reminders } from "@/constants/data";
import { useRouter } from "expo-router";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Consultation = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-background-secondary flex-1 relative w-screen">
      <ScrollView contentContainerClassName="flex-1 py-10 items-center w-full">
        <Header />
        <View className="rounded-full w-[241px] h-[226px] -right-14 -top-28  bg-[#d4e8e0ad] absolute -z-10"></View>
        <View className="rounded-full w-[241px] h-[226px] top-20 -left-10  bg-[#d4e8e0c9] absolute -z-10"></View>
        <Text className="text-4xl text-center mt-4 font-rubik-semibold">
          Appointment
        </Text>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="w-full"
        >
          <View className="bg-white rounded-lg h-full mt-4 px-4 py-6">
            <ConsultationDetails />
            <DoctorCard />
            <View className="bg-card-to rounded-2xl p-5 mx-6 mt-6">
              <Text className="text-white text-xl font-rubik-semibold text-center mb-2">
                Things to remember
              </Text>
              {reminders.map((item, idx) => (
                <View className="flex-row items-center gap-1" key={idx}>
                  <Text className="text-white text-2xl">•</Text>
                  <Text className="text-white font-rubik text-lg">{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <Button
          title="Share Reports"
          onPress={() => {
            router.push("/share-reports");
          }}
          buttonStyles="w-3/4 mt-8"
          titleStyles="text-white"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Consultation;
