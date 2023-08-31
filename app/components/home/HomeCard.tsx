import { View, Text } from 'react-native';
import React from 'react';

export default function HomeCard({
    product,
}: {
    product: any[] | null;
}) {
  return (
    <View>
      <Text>HomeCard</Text>
      <Text>{JSON.stringify(product)}</Text>
    </View>
  )
}