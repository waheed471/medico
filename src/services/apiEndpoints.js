import apiClient from "./apiService";

// Define all API endpoints here
// Login API
export const loginUser = async (email, password) => {
    const formData = new FormData(); // Create a FormData object for multipart/form-data
    formData.append("Email", email);
    formData.append("Password", password);
  
    try {
      const response = await apiClient.post("/User/Login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // Return the response data
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  // Get Lookup Types API Call
export const getLookupTypes = async (params) => {
  try {
    const response = await apiClient.get("/Lookup/GetLookupTypes", {
      params: {
        Name: params?.name || "",        // Optional Name filter
        Status: params?.status || "",   // Optional Status filter
        Sort: params?.sort || "",       // Optional Sort parameter
        PageNo: params?.pageNo || 0,    // Optional PageNo (default 0)
        PageSize: params?.pageSize || 10, // Optional PageSize (default 10)
      },
    });
    return response.data; // Return the data part of the response
  } catch (error) {
    console.error("Error fetching lookup types:", error);
    throw error; // Throw the error to be handled by the caller
  }
};


// Add or Edit Lookup Type API Call
export const saveLookupType = async (lookupTypeName, comment, status, lookupTypeId = null) => {
  const formData = new FormData(); // Create FormData for multipart/form-data
  formData.append("LookupTypeName", lookupTypeName); // Append LookupTypeName
  formData.append("Comment", comment); // Append Comment
  formData.append("Status", status ==true ? 1001 : 1002); // Append Status (integer)

  // Append LookupTypeId if provided (for Edit operation)
  if (lookupTypeId) {
    formData.append("LookupTypeId", lookupTypeId);
  }

  try {
    const url = lookupTypeId
      ? `/Lookup/EditLookupType` // Edit endpoint
      : `/Lookup/AddLookupType`; // Add endpoint

    const response = await apiClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure the correct content type
      },
    });

    return response.data; // Return the response data
  } catch (error) {
    console.error("Error saving lookup type:", error);
    throw error; // Throw error to be handled by the caller
  }
};


// Example: Get a list of users
export const getUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Example: Get a single user by ID
export const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};

// Example: Create a new user
export const createUser = async (userData) => {
  try {
    const response = await apiClient.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Example: Update a user by ID
export const updateUser = async (id, userData) => {
  try {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
};

// Example: Delete a user by ID
export const deleteUser = async (id) => {
  try {
    const response = await apiClient.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
};
