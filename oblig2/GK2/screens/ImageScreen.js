import React, { useEffect, useState } from 'react';
import { Image, Dimensions, View, Text } from 'react-native';

export default function ImageScreen({ route }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(route.params?.image || '');  // Legger til fallback i tilfelle image ikke er definert

    return () => {
      setImage('');
    };
  }, [route.params?.image]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      ) : (
        <Text>Ingen bilde tilgjengelig</Text>
      )}
    </View>
  );
}
