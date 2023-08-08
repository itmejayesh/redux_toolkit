import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter_slice/counterSlice'
import todoReducer from './todo_slice/todoSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: true,
})

export const persistor = persistStore(store)