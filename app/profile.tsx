import { View, Text, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-11/12 bg-white rounded-2xl shadow-lg">
        <Image
          className="w-full h-48 rounded-t-2xl"
          source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
          resizeMode="cover"
        />
        <View className="p-6">
          <Text className="text-2xl font-bold text-center">Profile</Text>
        </View>
      </View>
    </View>
  );
}
