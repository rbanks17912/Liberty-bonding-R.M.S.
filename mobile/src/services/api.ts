import axios, { AxiosInstance } from 'axios';
import { BondingLocation, ApiResponse } from '@types/index';
import { API_BASE_URL, API_TIMEOUT } from '@utils/constants';

class LocationService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getAllLocations(): Promise<BondingLocation[]> {
    try {
      const response = await this.api.get<ApiResponse<BondingLocation[]>>('/locations');
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  }

  async getLocationsByProvider(provider: string): Promise<BondingLocation[]> {
    try {
      const response = await this.api.get<ApiResponse<BondingLocation[]>>(
        `/locations?provider=${provider}`
      );
      return response.data.data || [];
    } catch (error) {
      console.error(`Error fetching ${provider} locations:`, error);
      throw error;
    }
  }

  async searchLocations(query: string): Promise<BondingLocation[]> {
    try {
      const response = await this.api.get<ApiResponse<BondingLocation[]>>(
        `/locations/search?q=${query}`
      );
      return response.data.data || [];
    } catch (error) {
      console.error('Error searching locations:', error);
      throw error;
    }
  }

  async getNearbyLocations(
    latitude: number,
    longitude: number,
    radiusMiles: number = 10
  ): Promise<BondingLocation[]> {
    try {
      const response = await this.api.get<ApiResponse<BondingLocation[]>>(
        `/locations/nearby?lat=${latitude}&lon=${longitude}&radius=${radiusMiles}`
      );
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching nearby locations:', error);
      throw error;
    }
  }

  async getLocationById(id: string): Promise<BondingLocation> {
    try {
      const response = await this.api.get<ApiResponse<BondingLocation>>(`/locations/${id}`);
      if (!response.data.data) throw new Error('Location not found');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching location:', error);
      throw error;
    }
  }
}

export default new LocationService();
