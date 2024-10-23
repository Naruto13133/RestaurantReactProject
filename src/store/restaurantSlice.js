import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as constant from '../config/constant';

// Restaurant User Request: Add to favorites
export const AddToFavorite = createAsyncThunk(
  'restaurant/addToFavorite',
  async ({ jwt, restaurantId }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${constant.ADD_TO_FAVORITE_URL}/${restaurantId}/addtofavorites`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ restaurantId }),
      });

      if (!response.ok) {
        throw new Error('Failed to add restaurant to favorites!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const createRestaurant = createAsyncThunk(
  'restaurant/createRestaurant',
  async ({restaurant,jwt}, { rejectWithValue }) => {
    try {
      const response = await fetch(`${constant.CREATE_RESTAURANT_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(restaurant),
      });

      if (!response.ok) {
        throw new Error('Failed to create restaurant!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const updateRestaurant = createAsyncThunk(
  'restaurant/updateRestaurant',
  async ({restaurant,jwt}, { rejectWithValue }) => {
    try {
      const response = await fetch(`${constant.UPDATE_RESTAURANT_API}/${restaurant.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(restaurant),
      });

      if (!response.ok) {
        throw new Error('Failed to update restaurant!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateRestaurantStatuse= createAsyncThunk(
  'restaurant/updateRestaurantStatus',
  async ({id,jwt,restaurant}, { rejectWithValue }) => {
    try {
      const response = await fetch(`${constant.UPDATE_RESTAURANT_API}/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(restaurant),
      });

      if (!response.ok) {
        throw new Error('Failed to update restaurant statuts!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteRestaurant = createAsyncThunk(
  'restaurant/delete',
  async ({ jwt, restaurantId }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${constant.DELETE_RESTAURANT_API}/${restaurantId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ restaurantId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete restaurant!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// Search Restaurant by Keyword
export const searchRestaurantByKeyword = createAsyncThunk(
  'restaurant/searchByKeyword',
  async ({ keyword, jwt }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({ q: keyword }).toString();
      const response = await fetch(`${constant.SEARCH_RESTAURANT_BY_KEYWORD_URL}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to search for restaurants!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Get All Restaurants
export const getAllRestaurant = createAsyncThunk(
  'restaurant/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(constant.FIND_ALL_RESTAURANT_URL, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch all restaurants!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);




const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    loading: false,
    error: null,
    data: null,
    favorites: [],
    searchResults: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle getAllRestaurant
    builder
      .addCase(getAllRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch restaurants!';
      });

    // Handle AddToFavorite
    builder
      .addCase(AddToFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddToFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites.push(action.payload);
      })
      .addCase(AddToFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add to favorites!';
      });

    // Handle searchRestaurantByKeyword
    builder
      .addCase(searchRestaurantByKeyword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchRestaurantByKeyword.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchRestaurantByKeyword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to search restaurants!';
      });

    // Handle createRestaurant
    builder
      .addCase(createRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create restaurant!';
      });

    // Handle updateRestaurant
    builder
      .addCase(updateRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update restaurant!';
      });

    // Handle updateRestaurantStatuse
    builder
      .addCase(updateRestaurantStatuse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurantStatuse.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateRestaurantStatuse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update restaurant status!';
      });

    // Handle deleteRestaurant
    builder
      .addCase(deleteRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to delete restaurant!';
      });
  },
});

// Export actions if needed
export default restaurantSlice.reducer;