import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@users';

// Load users from AsyncStorage
export const loadUsers = async () => {
  try {
    const data = await AsyncStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load users:', error);
    return [];
  }
};

// Save users to AsyncStorage
export const saveUsers = async (users) => {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Failed to save users:', error);
  }
};

// Add a new user
export const addUser = async (email, password) => {
  const users = await loadUsers();
  users.push({ email, password });
  await saveUsers(users);
};
