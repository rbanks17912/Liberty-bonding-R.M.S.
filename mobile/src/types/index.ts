export interface BondingLocation {
  id: string;
  name: string;
  provider: 'liberty' | 'coinhub' | 'vanillapay';
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: BusinessHours;
  services: string[];
  monitoring: boolean;
  imageUrl?: string;
}

export interface BusinessHours {
  monday: TimeRange;
  tuesday: TimeRange;
  wednesday: TimeRange;
  thursday: TimeRange;
  friday: TimeRange;
  saturday: TimeRange;
  sunday: TimeRange;
}

export interface TimeRange {
  open: string;
  close: string;
  closed: boolean;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface FilterOptions {
  provider?: string[];
  monitoring?: boolean;
  searchQuery?: string;
}
