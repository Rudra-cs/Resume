import { useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../atoms/AuthAtoms";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState);
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    try {
      // Replace this with actual authentication logic (e.g., API call)
      const response = await mockLoginApi(username, password);

      if (response.success) {
        setIsAuthenticated(true);
        // Save token in localStorage for future authentication
        localStorage.setItem("token", response.token);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Clear the token from localStorage
    localStorage.removeItem("token");
  };

  // Simulated API call for login (replace with actual API call)
  const mockLoginApi = async (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === "admin" && password === "password") {
          const mockToken = "rudraToken";
          resolve({ success: true, token: mockToken });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return {
    isAuthenticated,
    loading,
    login,
    logout,
  };
};

export default useAuth;
