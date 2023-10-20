import {createSlice} from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        price: 50000,
        // quantity: 0,
        allCount: []
    },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },

        decrement: (state) => {
            state.count = state.count > 0 ? state.count - 1 : 0
        },
        price: (state) =>{
            state.count 
        },
    //   
    }

})
export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer