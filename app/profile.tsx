import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const artists = [
  { name: "The Weeknd", image: "https://picsum.photos/seed/1/200/200" },
  { name: "Taylor Swift", image: "https://picsum.photos/seed/2/200/200" },
  { name: "Drake", image: "https://picsum.photos/seed/3/200/200" },
  { name: "Ariana Grande", image: "https://picsum.photos/seed/4/200/200" },
  { name: "Post Malone", image: "https://picsum.photos/seed/5/200/200" },
];

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50">
      <View className="p-4">
        <View className="bg-white rounded-3xl shadow-xl shadow-slate-300/30">
          <Image
            className="w-full h-96 rounded-t-3xl"
            source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
            resizeMode="cover"
          />
          <View className="p-6">
            <View className="flex-row items-baseline justify-center">
              <Text className="text-4xl font-bold text-slate-800">
                John Doe,
              </Text>
              <Text className="text-2xl ml-2 text-slate-600">28</Text>
            </View>

            <View className="mt-8 pt-6 border-t border-slate-200">
                <View className="flex-row items-center justify-center gap-x-6">
                    <View className="items-center">
                        <Text className="text-slate-500">Profession</Text>
                        <Text className="font-semibold text-slate-800 mt-1">Software Engineer</Text>
                    </View>
                     <View className="items-center">
                        <Text className="text-slate-500">City</Text>
                        <Text className="font-semibold text-slate-800 mt-1">San Francisco</Text>
                    </View>
                     <View className="items-center">
                        <Text className="text-slate-500">Distance</Text>
                        <Text className="font-semibold text-slate-800 mt-1">5 miles</Text>
                    </View>
                </View>
            </View>

            <View className="mt-8 pt-6 border-t border-slate-200">
              <Text className="text-xl font-bold text-slate-800">Interests</Text>
              <View className="flex-row flex-wrap gap-2 mt-4">
                <View className="bg-slate-100 rounded-full px-4 py-2">
                  <Text className="text-sm font-medium text-slate-700">Sports</Text>
                </View>
                <View className="bg-slate-100 rounded-full px-4 py-2">
                  <Text className="text-sm font-medium text-slate-700">Music</Text>
                </View>
                <View className="bg-slate-100 rounded-full px-4 py-2">
                  <Text className="text-sm font-medium text-slate-700">Reading</Text>
                </View>
                <View className="bg-slate-100 rounded-full px-4 py-2">
                  <Text className="text-sm font-medium text-slate-700">Traveling</Text>
                </View>
                <View className="bg-slate-100 rounded-full px-4 py-2">
                  <Text className="text-sm font-medium text-slate-700">Cooking</Text>
                </View>
              </View>
            </View>

            <View className="mt-8 pt-6 border-t border-slate-200">
              <Text className="text-xl font-bold text-slate-800">My top Spotify artists</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mt-4"
              >
                <View className="flex-row gap-4">
                  {artists.map((artist) => (
                    <View key={artist.name} className="items-center w-28">
                      <Image
                        source={{ uri: artist.image }}
                        className="w-24 h-24 rounded-xl shadow-lg shadow-slate-300/40"
                      />
                      <Text className="mt-2 text-sm text-center font-medium text-slate-700">
                        {artist.name}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
           <View className="flex-row justify-around items-center p-6 bg-slate-50 rounded-b-3xl">
            <TouchableOpacity className="w-16 h-16 rounded-full bg-white shadow-lg shadow-slate-300/70 items-center justify-center">
              <Text className="text-red-500 text-3xl font-bold">×</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-20 h-20 rounded-full bg-blue-500 shadow-lg shadow-blue-400/70 items-center justify-center">
              <Text className="text-white text-3xl">★</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-16 h-16 rounded-full bg-white shadow-lg shadow-slate-300/70 items-center justify-center">
              <Text className="text-green-500 text-3xl">♥</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
