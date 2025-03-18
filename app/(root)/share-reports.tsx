import Button from "@/components/Button";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Images from "@/constants/images";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as MailComposer from "expo-mail-composer";
import * as WebBrowser from "expo-web-browser";

const REPORT_URL =
  "https://drive.google.com/uc?export=download&id=1arQHpStc1de23PljBwg65Votpb-9mlo2";

const ShareReports = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [localReportUri, setLocalReportUri] = useState<string | null>(null);
  const router = useRouter();

  const ensureReportDownloaded = async () => {
    try {
      if (localReportUri) {
        const fileInfo = await FileSystem.getInfoAsync(localReportUri);
        if (fileInfo.exists) {
          return localReportUri;
        }
      }

      setIsLoading(true);

      const reportsDir = `${FileSystem.documentDirectory}reports/`;
      const dirInfo = await FileSystem.getInfoAsync(reportsDir);

      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(reportsDir, {
          intermediates: true,
        });
      }

      const destinationUri = `${reportsDir}medical-report.pdf`;

      const downloadResumable = FileSystem.createDownloadResumable(
        REPORT_URL,
        destinationUri
      );

      const result = await downloadResumable.downloadAsync();
      if (!result || !result.uri) {
        setIsLoading(false);
        Alert.alert(
          "Download Error",
          "Failed to download the report. Please try again."
        );
        return;
      }
      setLocalReportUri(result.uri);
      setIsLoading(false);

      return result.uri;
    } catch (error) {
      setIsLoading(false);
      console.error("Error downloading report:", error);
      Alert.alert(
        "Download Error",
        "Failed to download the report. Please check your internet connection."
      );
      return null;
    }
  };

  const handleDownload = async () => {
    try {
      const reportUri = await ensureReportDownloaded();
      if (!reportUri) return;
      await Sharing.shareAsync(reportUri);
    } catch (error) {
      console.error("Error in download:", error);
      Alert.alert("Error", "Failed to save the report");
    }
  };

  const handleEmailShare = async () => {
    try {
      const reportUri = await ensureReportDownloaded();
      if (!reportUri) return;

      const isAvailable = await MailComposer.isAvailableAsync();

      if (isAvailable) {
        await MailComposer.composeAsync({
          subject: "Your Medical Report",
          body: "Please find your medical report attached.",
          attachments: [reportUri],
        });
      } else {
        Alert.alert(
          "Email Not Available",
          "No email client is configured on this device."
        );
      }
    } catch (error) {
      console.error("Error in email share:", error);
      Alert.alert("Error", "Failed to share via email");
    }
  };

  const handleViewAllTests = () => {
    router.push("/");
  };

  const handleBookAnotherTest = () => {
    router.push("/");
  };

  return (
    <SafeAreaView className="bg-background-secondary flex-1 py-10">
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
              onPress={handleDownload}
              title="Download Reports"
              buttonStyles="w-full"
              titleStyles="text-white"
            />
            <Button
              onPress={handleEmailShare}
              title="Share Reports on Email"
              buttonStyles="bg-transparent border border-button-bg"
              titleStyles="text-[#3CC19A]"
            />
            <Button
              onPress={handleViewAllTests}
              title="View all Tests"
              buttonStyles="bg-transparent"
              titleStyles="text-[#3CC19A] border-b border-button-bg"
            />
            <Button
              onPress={handleBookAnotherTest}
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
