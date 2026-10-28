import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Attach JWT token for authenticated requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('deluxe_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiService = {
  // Public enquiry submission
  async submitEnquiry(enquiryData) {
    try {
      const response = await apiClient.post('/enquiries', enquiryData);
      return { success: true, data: response.data };
    } catch (error) {
      console.warn('API submission failed:', error.message);
      // Return structured error
      const message = error.response?.data?.message || 'Could not connect to the server. Please call or WhatsApp us directly.';
      return {
        success: false,
        message,
        isNetworkError: !error.response,
      };
    }
  },

  // Admin Login
  async loginAdmin(credentials) {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      if (response.data?.token) {
        localStorage.setItem('deluxe_admin_token', response.data.token);
        localStorage.setItem('deluxe_admin_user', JSON.stringify(response.data.user));
      }
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed. Please check your credentials.',
      };
    }
  },

  // Admin Get Enquiries
  async getEnquiries(params = {}) {
    try {
      const response = await apiClient.get('/enquiries', { params });
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch enquiries.',
      };
    }
  },

  // Admin Update Status
  async updateEnquiryStatus(id, status) {
    try {
      const response = await apiClient.patch(`/enquiries/${id}/status`, { status });
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update status.',
      };
    }
  },

  // Admin Add Note or Follow-up date
  async addEnquiryNote(id, noteData) {
    try {
      const response = await apiClient.post(`/enquiries/${id}/notes`, noteData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to add note.',
      };
    }
  },

  // Admin Delete Enquiry
  async deleteEnquiry(id) {
    try {
      const response = await apiClient.delete(`/enquiries/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to delete enquiry.',
      };
    }
  },

  // Admin logout helper
  logoutAdmin() {
    localStorage.removeItem('deluxe_admin_token');
    localStorage.removeItem('deluxe_admin_user');
  },

  getStoredAdmin() {
    try {
      const user = localStorage.getItem('deluxe_admin_user');
      const token = localStorage.getItem('deluxe_admin_token');
      if (token && user) {
        return JSON.parse(user);
      }
      return null;
    } catch {
      return null;
    }
  }
};
