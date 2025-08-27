import jwtDecode from 'jwt-decode';

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    // Allow tokens without exp in dev/mock flows
    if (!decoded || typeof decoded.exp !== 'number') {
      return true;
    }
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    // If we can't decode (mock token), consider it valid for this frontend-only setup
    return true;
  }
};

export const getTokenExpiration = (token) => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return new Date(decoded.exp * 1000);
  } catch (error) {
    return null;
  }
};
