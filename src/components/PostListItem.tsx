import { View, Image, Text, useWindowDimensions } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from 'cloudinary-react-native';
// Import required actions and qualifiers.
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';
import { cld } from '~/src/lib/cloudinary';

export default function PostListItem({ post }) {
  const { width } = useWindowDimensions();

  const image = cld.image(post.image);
  image.resize(thumbnail().width(width).height(width));

  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(
    thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))
  );

  return (
    <View className="bg-white">
      {/* Header */}
      <View className="p-3 flex-row items-center gap-2">
        <AdvancedImage
          cldImg={avatar}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>

      {/* Content */}
      <AdvancedImage cldImg={image} className="w-full aspect-[4/3]" />

      {/* Icons */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
}
