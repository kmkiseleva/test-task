import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

// загрузка
export const fetchCards = () => async (dispatch, getState) => {
  let reqURL = "https://randomuser.me/api/?results=25";
  try {
    const response = await fetch(reqURL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(put(data.results));
    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

const cards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // загрузка
    put(state, action) {
      state.items = action.payload;
    },
    fetchStart(state, action) {
      return { ...state, loading: true, error: null };
    },
    fetchError(state, action) {
      const { error } = action.payload;
      return { ...state, loading: false, error };
    },
    fetchSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: null,
      };
    },
  },
});

export const { put, fetchStart, fetchError, fetchSuccess } = cards.actions;
export default cards.reducer;
