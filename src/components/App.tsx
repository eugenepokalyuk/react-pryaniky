import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import DataTablePage from '../pages/DataTablePage';
import LoginPage from '../pages/LoginPage';
import { RootState } from '../store/reducers';
import { DATA_PATH, LOGIN_PATH } from '../utils/consts';

const App: React.FC = () => {
    const auth = useSelector((state: RootState) => state.auth);

    return (
        <Routes>
            <Route
                path={LOGIN_PATH}
                element={<LoginPage />}
            />
            <Route
                path={DATA_PATH}
                element={auth.token ? <DataTablePage /> : <Navigate to={LOGIN_PATH} />}
            />
            <Route
                path="/"
                element={<Navigate to={LOGIN_PATH} />}
            />
        </Routes>
    );
};

export default App;