import { View, Text, Image, ScrollView } from "react-native";

const artists = [
  { name: 'Artist 1', image: 'https://picsum.photos/seed/1/200/200' },
  { name: 'Artist 2', image: 'https://picsum.photos/seed/2/200/200' },
  { name: 'Artist 3', image: 'https://picsum.photos/seed/3/200/200' },
  { name: 'Artist 4', image: 'https://picsum.photos/seed/4/200/200' },
  { name: 'Artist 5', image: 'https://picsum.photos/seed/5/200/200' },
];

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
          <View className="flex-row items-baseline justify-center">
            <Text className="text-3xl font-bold">John Doe,</Text>
            <Text className="text-xl ml-2">28</Text>
          </View>
          <View className="mt-6 space-y-2">
            <View className="flex-row gap-2">
              <Text className="font-bold">Profession:</Text>
              <Text>Software Engineer</Text>
            </View>
            <View className="flex-row gap-2">
              <Text className="font-bold">City:</Text>
              <Text>San Francisco</Text>
            </View>
            <View className="flex-row gap-2">
              <Text className="font-bold">Distance:</Text>
              <Text>5 miles away</Text>
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-lg font-bold">Interests</Text>
            <View className="flex-row flex-wrap gap-2 mt-2">
              <View className="bg-gray-200 rounded-full px-3 py-1">
                <Text className="text-sm">Sports</Text>
              </View>
              <View className="bg-gray-200 rounded-full px-3 py-1">
                <Text className="text-sm">Music</Text>
              </View>
              <View className="bg-gray-200 rounded-full px-3 py-1">
                <Text className="text-sm">Reading</Text>
              </View>
              <View className="bg-gray-200 rounded-full px-3 py-1">
                <Text className="text-sm">Traveling</Text>
              </View>
              <View className="bg-gray-200 rounded-full px-3 py-1">
                <Text className="text-sm">Cooking</Text>
              </View>
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-lg font-bold">My top Spotify artists</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
              <View className="flex-row gap-4">
                {artists.map((artist) => (
                  <View key={artist.name} className="items-center">
                    <Image source={{ uri: artist.image }} className="w-24 h-24 rounded-lg" />
                    <Text className="mt-2 text-sm">{artist.name}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
