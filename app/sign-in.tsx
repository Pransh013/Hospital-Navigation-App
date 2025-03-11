import { View, Text, ScrollView, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { FormStateType } from "@/types";
import FormInput from "@/components/FormInput";
import { formSchema } from "@/schema";
import { initialFormState } from "@/constants/data";
import { handleInputChange } from "@/lib/utils";
import GenderSelect from "@/components/GenderSelect";
import PackageTypeRadio from "@/components/PackageType";
import Images from "@/constants/images";
import { useAuth } from "@/contexts/AuthContext";

const SignIn = () => {
  const [formState, setFormState] = useState<FormStateType>(initialFormState);
  const [formErrors, setFormErrors] = useState<any>([]);
  const router = useRouter()
  const { login } = useAuth();

  const handleLogin = async () => {
    const result = formSchema.safeParse(formState);
    if (!result.success) {
      setFormErrors(result.error.errors);
      return;
    }

    const userData = {
      name: formState.name,
      mobile: formState.mobile,
      email: formState.email,
      gender: formState.gender,
      packageType: formState.packageType,
      isAuthenticated: true,
    };

    await login(userData);
    router.replace("/");
  };

  return (
    <SafeAreaView className="bg-primary-background h-full py-8 px-4">
      <ScrollView contentContainerClassName="h-full">
        <View className="h-full">
          <Text className="text-center text-xl font-rubik mb-5">
            Hospital Way Finder
          </Text>

          <View className="flex-row justify-between">
            <View className="items-center justify-center flex-1">
              <Text className="text-center text-4xl font-rubik-semibold ">
                Validate Your
              </Text>
              <Text className="text-center text-4xl font-rubik-semibold ">
                Wellness Test
              </Text>
            </View>
            <View className="relative">
              <Image source={Images.Doctor} alt="doctor" />
              <Image
                source={Images.Like}
                alt="like"
                className="absolute -top-1 left-5"
              />
              <Image
                source={Images.Document}
                alt="document"
                className="absolute -left-4 top-1/2 -translate-y-1/2"
              />
            </View>
          </View>

          <View className="bg-white rounded-lg py-5 px-4 gap-5">
            <FormInput
              label="Name"
              placeholder="Enter your name"
              value={formState.name}
              onChange={(text) => handleInputChange("name", text, setFormState)}
            />

            <FormInput
              label="Mobile No."
              placeholder="Enter your mobile no."
              value={formState.mobile}
              keyboardType="phone-pad"
              onChange={(text) =>
                handleInputChange("mobile", text, setFormState)
              }
            />

            <FormInput
              label="Email"
              placeholder="Enter your email"
              value={formState.email}
              onChange={(text) =>
                handleInputChange("email", text, setFormState)
              }
            />

            <GenderSelect
              value={formState.gender}
              onChange={(val) => setFormState({ ...formState, gender: val })}
            />

            <PackageTypeRadio
              value={formState.packageType}
              onChange={(val) =>
                setFormState({ ...formState, packageType: val })
              }
            />

            <Button
              onPress={handleLogin}
              title="Submit"
              titleStyles="text-white"
            />

            {formErrors[0]?.message && (
              <Text className="text-red-500 text-center font-rubik text-lg">
                **{formErrors[0]?.message}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
