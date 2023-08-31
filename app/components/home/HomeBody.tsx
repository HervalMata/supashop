import { View, Text } from 'react-native';
import React, { useState } from 'react';

export default function HomeBody({ products }: { products: any | null }): JSX.Element {
  const [products, setProducts] = useState<any[] | null>([]);

  useEffect(() => {
    setProducts(products);
  }, []);
  
  return (
    <View className="rounded-t-3x1 px-4 pt-10 -mt-5 bg-gray-50">
      <Text>{products[0].title}</Text>
    </View>
  );
}