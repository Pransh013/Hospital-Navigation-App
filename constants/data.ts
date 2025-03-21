import { FormStateType, TestType } from "@/types";

export const initialFormState: FormStateType = {
  name: "",
  mobile: "",
  email: "",
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
    testStatus: "Completed",
    waitingTime: "15 minutes",
    floorNumber: 1,
    roomNumber: 10,
    patientsInLine: 5,
  },
  {
    testName: "Lipid Test",
    testStatus: "Completed",
    waitingTime: "30 minutes",
    floorNumber: 2,
    roomNumber: 14,
    patientsInLine: 10,
  },
  {
    testName: "Phosphate Test",
    testStatus: "Completed",
    waitingTime: "45 minutes",
    floorNumber: 3,
    roomNumber: 21,
    patientsInLine: 12,
  },
  {
    testName: "Creatinine Test",
    testStatus: "Completed",
    waitingTime: "1 hour",
    floorNumber: 1,
    roomNumber: 9,
    patientsInLine: 15,
  },
  {
    testName: "Creatinine Test",
    testStatus: "Completed",
    waitingTime: "1 hour",
    floorNumber: 1,
    roomNumber: 9,
    patientsInLine: 15,
  },
  {
    testName: "Creatinine Test",
    testStatus: "Completed",
    waitingTime: "1 hour",
    floorNumber: 1,
    roomNumber: 9,
    patientsInLine: 15,
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

export const reminders = [
  "Carry all test reports",
  "List your symptoms and duration",
  "Note down current medications and allergies",
  "Mention previous medical history",
  "Follow pre-visit instructions (fasting, etc.)",
  "Bring ID & insurance details",
  "Arrive on time",
];