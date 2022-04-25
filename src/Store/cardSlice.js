import {createSlice} from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: 'carCard',
  initialState:{
      carCard: null
  },
  reducers:{
      addCar: (state, action) => {
          state.carCard = action.payload.id;
      }
  }
})

export default cardSlice
