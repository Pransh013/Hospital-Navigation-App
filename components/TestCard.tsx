import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import Icon from "./Icon";
import { formatWaitingTime } from "@/lib/utils";
import { TestType } from "@/types";

const TestCard = ({
  test,
  onMarkComplete,
}: {
  test: TestType;
  onMarkComplete: (testName: string) => void;
}) => {
  const isCompleted = test.testStatus === "Completed";
  const formattedWaitingTime = formatWaitingTime(test.waitingTime);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardPress = () => {
    if (!isCompleted) {
      setModalVisible(true);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={handleCardPress}>
        <View
          className={`h-20 w-full rounded-md flex-row justify-between px-5 py-2 ${
            isCompleted ? "bg-[#CCFDE8]" : "border border-[#EB996E]"
          }`}
        >
          <View className=" justify-center">
            <Text className="text-lg font-rubik-medium">{test.testName}</Text>
            {isCompleted ? (
              <View className="flex-row items-center gap-1">
                <View className="rounded-full items-center justify-center bg-button-bg size-4">
                  <Icon name="Check" color="white" strokeWidth={2} size={10} />
                </View>
                <Text className="text-green font-rubik-medium">
                  Test Completed
                </Text>
              </View>
            ) : (
              <View className="flex-row items-center justify-center gap-1">
                <Icon name="Clock" color="#5D5D5D" size={16} />
                <View className="flex-row gap-1 mt-1">
                  <Text className="text-zinc-500 font-rubik-light text-sm ">
                    Waiting time:
                  </Text>
                  <Text className="text-zinc-500 font-rubik-semibold text-sm">
                    {formattedWaitingTime}
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View className="justify-center flex-row items-center gap-3">
            <View className="justify-center items-center">
              <View className="flex-row items-center gap-0.5">
                <Icon name="Building" color="#5E5D5D" size={14} />
                <Text className="text-sm text-gray">Floor</Text>
              </View>
              <Text className="text-2xl font-rubik-medium text-gray">
                {test.floorNumber}
              </Text>
            </View>
            <View className="h-5/6 w-0.5 bg-zinc-500/50"></View>
            <View className="justify-center items-center">
              <View className="flex-row items-center gap-0.5">
                <Icon name="House" color="#5E5D5D" size={14} />
                <Text className="text-sm text-gray">Room</Text>
              </View>
              <Text className="text-2xl font-rubik-medium text-gray">
                {test.roomNumber}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-teal-800/40">
          <View className="bg-white p-6 h-1/3 rounded-lg w-4/5 relative">
            <Text className="text-gray font-rubik text-center">
              Name of the test
            </Text>
            <Text className="text-black font-rubik-semibold text-xl text-center">
              {test.testName}
            </Text>

            <View className="gap-6 mt-4">
              <View className="flex-row justify-center items-center px-4">
                <View className="justify-center items-center gap-0.5 w-1/2">
                  <Text className="text-sm text-gray font-rubik">
                    Patients in line
                  </Text>
                  <Text className="text-xl text-green font-rubik-semibold">
                    {test.patientsInLine}
                  </Text>
                </View>
                <View className="justify-center items-center gap-0.5 w-1/2">
                  <Text className="text-sm text-gray font-rubik">
                    Waiting Time
                  </Text>
                  <Text className="text-xl text-green font-rubik-semibold">
                    {formattedWaitingTime}
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-center items-center px-4">
                <View className="justify-center items-center gap-0.5 w-1/2">
                  <Text className="text-sm text-gray font-rubik">Room No.</Text>
                  <Text className="text-xl text-green font-rubik-semibold">
                    {test.roomNumber}
                  </Text>
                </View>
                <View className="justify-center items-center gap-0.5 w-1/2">
                  <Text className="text-sm text-gray text-center font-rubik">
                    Floor No.
                  </Text>
                  <Text className="text-xl text-green font-rubik-semibold">
                    {test.floorNumber}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                onMarkComplete(test.testName);
                setModalVisible(false);
              }}
              activeOpacity={0.7}
              accessibilityRole="button"
              className="bg-button-bg rounded-lg w-full py-4 mt-4"
            >
              <Text className="text-white text-lg text-center font-rubik-medium">
                Mark as Complete
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="absolute right-4 top-3 "
            >
              <Icon name="X" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TestCard;
