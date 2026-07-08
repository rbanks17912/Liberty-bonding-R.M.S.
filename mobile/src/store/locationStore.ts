import { create } from 'zustand';
import { BondingLocation, FilterOptions } from '@types/index';

interface LocationStore {
  locations: BondingLocation[];
  filteredLocations: BondingLocation[];
  selectedLocation: BondingLocation | null;
  favorites: string[];
  filters: FilterOptions;
  loading: boolean;
  error: string | null;
  
  setLocations: (locations: BondingLocation[]) => void;
  setFilteredLocations: (locations: BondingLocation[]) => void;
  setSelectedLocation: (location: BondingLocation | null) => void;
  addFavorite: (locationId: string) => void;
  removeFavorite: (locationId: string) => void;
  setFilters: (filters: FilterOptions) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  isFavorite: (locationId: string) => boolean;
}

export const useLocationStore = create<LocationStore>((set, get) => ({
  locations: [],
  filteredLocations: [],
  selectedLocation: null,
  favorites: [],
  filters: {},
  loading: false,
  error: null,

  setLocations: (locations) => set({ locations }),
  setFilteredLocations: (filteredLocations) => set({ filteredLocations }),
  setSelectedLocation: (selectedLocation) => set({ selectedLocation }),
  
  addFavorite: (locationId) => {
    const { favorites } = get();
    if (!favorites.includes(locationId)) {
      set({ favorites: [...favorites, locationId] });
    }
  },
  
  removeFavorite: (locationId) => {
    const { favorites } = get();
    set({ favorites: favorites.filter((id) => id !== locationId) });
  },
  
  setFilters: (filters) => set({ filters }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  
  isFavorite: (locationId) => get().favorites.includes(locationId),
}));
