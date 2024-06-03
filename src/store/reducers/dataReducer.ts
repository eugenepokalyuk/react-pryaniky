import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
    data: any[];
    loading: boolean;
    error: string;
}

const initialState: DataState = {
    data: [],
    loading: false,
    error: ''
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchDataRequest(state) {
            state.loading = true;
            state.error = '';
        },
        fetchDataSuccess(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        createDataRequest(state) {
            state.loading = true;
            state.error = '';
        },
        createDataSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data.push(action.payload);
        },
        createDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        updateDataRequest(state) {
            state.loading = true;
            state.error = '';
        },
        updateDataSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
        updateDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        deleteDataRequest(state) {
            state.loading = true;
            state.error = '';
        },
        deleteDataSuccess(state, action: PayloadAction<string>) {
            state.loading = false;
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        deleteDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchDataRequest, fetchDataSuccess, fetchDataFailure,
    createDataRequest, createDataSuccess, createDataFailure,
    updateDataRequest, updateDataSuccess, updateDataFailure,
    deleteDataRequest, deleteDataSuccess, deleteDataFailure
} = dataSlice.actions;

export default dataSlice.reducer;