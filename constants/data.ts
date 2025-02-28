import { FormStateType, TestType } from "@/types";

export const initialFormState: FormStateType = {
  name: "",
  mobile: "",
  gender: "male",
  packageType: "individual",
};

export const tests: TestType[] = [
  {
    testName: "CBC Test",
    testStatus: "Completed",
    waitingTime: null,
    floorNumber: 2,
    roomNumber: 18,
    patientsInLine: 0,
  },
  {
    testName: "Cholesterol Test",
    testStatus: "Pending",
    waitingTime: "15 minutes",
    floorNumber: 1,
    roomNumber: 10,
    patientsInLine: 5,
  },
  {
    testName: "Lipid Test",
    testStatus: "Pending",
    waitingTime: "30 minutes",
    floorNumber: 2,
    roomNumber: 14,
    patientsInLine: 10,
  },
  {
    testName: "Phosphate Test",
    testStatus: "Pending",
    waitingTime: "45 minutes",
    floorNumber: 3,
    roomNumber: 21,
    patientsInLine: 12,
  },
  {
    testName: "Creatinine Test",
    testStatus: "Pending",
    waitingTime: "1 hour",
    floorNumber: 1,
    roomNumber: 9,
    patientsInLine: 15,
  },
];
