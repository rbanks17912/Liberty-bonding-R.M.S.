import { create } from 'zustand';
import { UserLocation } from '@types/index';

interface UserStore {
  userLocation: UserLocation | null;
  isLoadingLocation: boolean;
  locationError: string | null;
  setUserLocation: (location: UserLocation) => void;
  setIsLoadingLocation: (loading: boolean) => void;
  setLocationError: (error: string | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userLocation: null,
  isLoadingLocation: false,
  locationError: null,
  
  setUserLocation: (userLocation) => set({ userLocation }),
  setIsLoadingLocation: (isLoadingLocation) => set({ isLoadingLocation }),
  setLocationError: (locationError) => set({ locationError }),
}));
