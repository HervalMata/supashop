import { View, Text } from 'react-native'
import React from 'react'

export default function HomeBody({ products }: { products: any }): JSX.Element {
  return (
    <View className="rounded-t-3x1 px-4 pt-10 -mt-5 bg-gray-50">
      <Text>HomeBody</Text>
    </View>
  );
}