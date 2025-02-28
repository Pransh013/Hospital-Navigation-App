import { icons } from "lucide-react-native";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyles?: string;
  titleStyles?: string;
};

export type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
};

export type FormInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  keyboardType?: "default" | "phone-pad";
};

export type FormStateType = {
  name: string;
  mobile: string;
  gender: "male" | "female" | "other";
  packageType: "individual" | "corporate"
};

export type TestType = {
  testName: string;
  testStatus: "Completed" | "Pending";
  waitingTime: string | null;
  floorNumber: number;
  roomNumber: number;
  patientsInLine: number;
};