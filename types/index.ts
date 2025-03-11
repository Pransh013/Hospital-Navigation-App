import { icons } from "lucide-react-native";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyles?: string;
  titleStyles?: string;
  disabled?: boolean;
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
  email: string;
  gender: "male" | "female" | "other";
  packageType: "individual" | "corporate";
};

export type AuthContextType = {
  user: FormStateType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: FormStateType) => Promise<void>;
  logout: () => Promise<void>;
};

export type TestType = {
  testName: string;
  testStatus: "Completed" | "Pending";
  waitingTime: string | null;
  floorNumber: number;
  roomNumber: number;
  patientsInLine: number;
};

export type PackageTypeRadioProps = {
  value: "individual" | "corporate";
  onChange: (val: "individual" | "corporate") => void;
};