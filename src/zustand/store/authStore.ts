import { create } from "zustand";
import { PreferencesInfoparams } from "../../types/navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface userStore {
  user: PreferencesInfoparams | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  setUser: (userToSet: PreferencesInfoparams) => Promise<void>;
}

export const useAuthStore = create<userStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    set({ loading: true, error: null });

    try {
      const foundUser = await AsyncStorage.getItem('user');
      if (foundUser) {
        const parsedUser: PreferencesInfoparams = JSON.parse(foundUser);
        set({ user: parsedUser, loading: false });
      } else {
        set({ loading: false });
      }
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  setUser: async (userToSet: PreferencesInfoparams) => {
    set({ loading: true, error: null });

    try {
      await AsyncStorage.setItem('user', JSON.stringify(userToSet));
      set({ user: userToSet, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));