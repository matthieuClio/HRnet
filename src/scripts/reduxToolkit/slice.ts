import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        firstName: "",
        lastName: "",
        startDate: "",
        department: "",
        birthDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: 0,
        firstAdd: true
    }
];

export const tableSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        update: (state, action) => {
            state[0].firstName = action.payload.firstName;
            state[0].lastName = action.payload.lastName;
            state[0].startDate = action.payload.startDate;
            state[0].department = action.payload.department;
            state[0].birthDate = action.payload.birthDate;
            state[0].street = action.payload.street;
            state[0].city = action.payload.city;
            state[0].state = action.payload.state;
            state[0].zipCode = action.payload.zipCode;
            state[0].firstAdd = false;
        },

        create: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { update, create } = tableSlice.actions;

export default tableSlice.reducer; 