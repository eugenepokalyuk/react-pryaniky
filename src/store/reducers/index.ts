import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    data: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;