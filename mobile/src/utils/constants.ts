// Brand Colors
export const COLORS = {
  // Liberty Bail Bonds - Gold and Navy
  LIBERTY_PRIMARY: '#B8860B',
  LIBERTY_SECONDARY: '#1a1a2e',
  
  // Coinhub - Teal
  COINHUB_PRIMARY: '#17A2B8',
  COINHUB_SECONDARY: '#0C5460',
  
  // VanillaPay - Purple
  VANILLAPAY_PRIMARY: '#9B59B6',
  VANILLAPAY_SECONDARY: '#6C3483',
  
  // UI
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY_LIGHT: '#F5F5F5',
  GRAY_MEDIUM: '#CCCCCC',
  GRAY_DARK: '#333333',
  RED: '#E74C3C',
  GREEN: '#27AE60',
  BLUE: '#3498DB',
};

// Map defaults
export const MAP_CONFIG = {
  DEFAULT_LATITUDE: 37.7749,
  DEFAULT_LONGITUDE: -122.4194,
  DEFAULT_ZOOM: 12,
  INITIAL_REGION: {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  },
};

// API
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
export const API_TIMEOUT = 10000;

// Marker sizes
export const MARKER_SIZES = {
  SMALL: 30,
  MEDIUM: 40,
  LARGE: 50,
};
