import { BondingLocation } from '@types/index';

export const getProviderColor = (provider: string): string => {
  switch (provider) {
    case 'liberty':
      return '#B8860B';
    case 'coinhub':
      return '#17A2B8';
    case 'vanillapay':
      return '#9B59B6';
    default:
      return '#3498DB';
  }
};

export const getProviderLabel = (provider: string): string => {
  switch (provider) {
    case 'liberty':
      return 'Liberty Bail Bonds';
    case 'coinhub':
      return 'Coinhub';
    case 'vanillapay':
      return 'VanillaPay';
    default:
      return 'Bonding Location';
  }
};

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 3959; // Earth radius in miles
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const sortLocationsByDistance = (
  locations: BondingLocation[],
  userLat: number,
  userLon: number
): BondingLocation[] => {
  return [...locations].sort((a, b) => {
    const distA = calculateDistance(userLat, userLon, a.latitude, a.longitude);
    const distB = calculateDistance(userLat, userLon, b.latitude, b.longitude);
    return distA - distB;
  });
};

export const isLocationOpen = (hours: any, date: Date = new Date()): boolean => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayName = days[date.getDay()];
  const dayHours = hours[dayName];

  if (dayHours.closed) return false;

  const now = date.getHours() * 60 + date.getMinutes();
  const [openHour, openMin] = dayHours.open.split(':').map(Number);
  const [closeHour, closeMin] = dayHours.close.split(':').map(Number);
  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  return now >= openTime && now <= closeTime;
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};
