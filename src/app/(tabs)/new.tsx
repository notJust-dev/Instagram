import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function CreatePost() {
  const [caption, setCaption] = useState('');

  return (
    <View className="p-3 items-center flex-1">
      {/* Image picker */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
      />

      <Text onPress={() => {}} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      {/* TextInput for caption */}
      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="What is on your mind"
        className="w-full p-3"
      />

      {/* Button */}
      <View className="mt-auto w-full">
        <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}
