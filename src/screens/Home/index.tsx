import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePostStore } from '../../zustand/store/postStore';
import { useAuthStore } from '../../zustand/store/authStore';

const Home = () => {
  const { logoutUser } = useAuthStore();
  const { loading, posts, fetchPosts, error } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
  if (error) return <Text>Could not fetch the data</Text>

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoutButton} onPress={logoutUser}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home;