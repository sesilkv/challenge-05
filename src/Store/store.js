import cardSlice from './cardSlice'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore ({
    reducer: {cardSlice: cardSlice.reducer}
})

export default store