import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-11/12 bg-white rounded-2xl p-6 shadow-lg">
        <Text className="text-2xl font-bold text-center">Profile</Text>
      </View>
    </View>
  );
}
