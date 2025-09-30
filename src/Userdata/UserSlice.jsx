import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

// Initial State
const initialState = {
  id: null,
  name: "",
  email: "",
  profilePicture: "",
  address: "",
  mobileNumber: "",
  role: "",
  isLoading: false,
  error: null,
};

// Async Thunk: Fetch user details from Firebase Firestore
export const fetchUserFromFirebase = createAsyncThunk(
  "user/fetchUserFromFirebase",
  async (userId, { rejectWithValue }) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        return rejectWithValue("User not found in database");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async Thunk: Update user details in Firebase Firestore
export const updateUserInFirebase = createAsyncThunk(
  "user/updateUserInFirebase",
  async ({ userId, updates }, { rejectWithValue }) => {
    try {
      const userDocRef = doc(db, "users", userId);
      
      // Check if document exists
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        // Update existing document
        await updateDoc(userDocRef, {
          ...updates,
          updatedAt: new Date().toISOString(),
        });
      } else {
        // Create new document if it doesn't exist
        await setDoc(userDocRef, {
          id: userId,
          ...updates,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }

      return updates;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set all user details at once
    setUserDetails: (state, action) => {
      const {
        id,
        name,
        email,
        profilePicture,
        address,
        mobileNumber,
        role,
      } = action.payload;

      state.id = id || null;
      state.name = name || "";
      state.email = email || "";
      state.profilePicture = profilePicture || "";
      state.address = address || "";
      state.mobileNumber = mobileNumber || "";
      state.role = role || "";
      state.error = null;
    },

    // Update a single user detail
    updateUserDetail: (state, action) => {
      const { field, value } = action.payload;
      if (state.hasOwnProperty(field)) {
        state[field] = value;
      }
    },

    // Clear user state (logout)
    clearUser: (state) => {
      return initialState;
    },

    // Manual error setter
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    // Manual loading setter
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch User from Firebase
    builder
      .addCase(fetchUserFromFirebase.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserFromFirebase.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Update state with fetched data
        state.id = action.payload.id || null;
        state.name = action.payload.name || "";
        state.email = action.payload.email || "";
        state.profilePicture = action.payload.profilePicture || "";
        state.address = action.payload.address || "";
        state.mobileNumber = action.payload.mobileNumber || "";
        state.role = action.payload.role || "";
      })
      .addCase(fetchUserFromFirebase.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Update User in Firebase
    builder
      .addCase(updateUserInFirebase.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserInFirebase.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Update state with new values
        Object.keys(action.payload).forEach((key) => {
          if (state.hasOwnProperty(key)) {
            state[key] = action.payload[key];
          }
        });
      })
      .addCase(updateUserInFirebase.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions
export const {
  setUserDetails,
  updateUserDetail,
  clearUser,
  setError,
  setLoading,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;