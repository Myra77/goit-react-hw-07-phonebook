import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://6498733d9543ce0f49e20c47.mockapi.io/api/';
axios.defaults.baseURL = 'https://646b93077d3c1cae4ce4040d.mockapi.io/api/';



export const fetchContact = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const response = await axios.get('contacts');
        return response.data;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('contacts', contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`contacts/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);