import { create } from 'zustand';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostStore {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      set({ posts: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));