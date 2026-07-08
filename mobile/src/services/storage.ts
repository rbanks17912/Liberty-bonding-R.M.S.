import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  private readonly FAVORITES_KEY = '@liberty_bonding_favorites';
  private readonly USER_PREFS_KEY = '@liberty_bonding_prefs';

  async saveFavorites(favorites: string[]): Promise<void> {
    try {
      await AsyncStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }

  async getFavorites(): Promise<string[]> {
    try {
      const data = await AsyncStorage.getItem(this.FAVORITES_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  }

  async saveUserPreferences(prefs: any): Promise<void> {
    try {
      await AsyncStorage.setItem(this.USER_PREFS_KEY, JSON.stringify(prefs));
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  }

  async getUserPreferences(): Promise<any> {
    try {
      const data = await AsyncStorage.getItem(this.USER_PREFS_KEY);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Error getting preferences:', error);
      return {};
    }
  }

  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([this.FAVORITES_KEY, this.USER_PREFS_KEY]);
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}

export default new StorageService();
