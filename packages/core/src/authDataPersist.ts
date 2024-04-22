import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthData} from './types';

const STORAGE_KEY = 'OMH_AUTH_DATA';

export function removePersistedAuthData(): Promise<void> {
  return AsyncStorage.removeItem(STORAGE_KEY);
}

export function persistAuthData(data: AuthData): Promise<void> {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function getPersistedAuthData(): Promise<AuthData | null> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);

  return data && JSON.parse(data);
}
