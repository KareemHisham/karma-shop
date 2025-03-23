import { createSlice } from '@reduxjs/toolkit'
import { ICategory } from '@/constant/Interfaces'

const initialState = {
    categories: [] as ICategory[],
    isLoading: false,
    error: null,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
})

export default categoriesSlice.reducer
