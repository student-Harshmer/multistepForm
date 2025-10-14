import { View } from 'react-native'
import React from 'react'
import Webview from 'react-native-webview'
import { styles } from './style';
import { useRoute } from '@react-navigation/native';

const Webscreen = () => {
  const route = useRoute<any>();
  const { url } = route.params;

  return (
    <View style={styles.container}>
      <Webview
        source={{ uri: url }}
        style={{ flex: 1, }}
      />
    </View>
  )
}

export default Webscreen;