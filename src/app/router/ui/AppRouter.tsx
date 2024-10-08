import { Routes, Route } from 'react-router-dom';
import { config } from '../config';

export const AppRouter = () => (
    <Routes>
        {Object.values(config).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={element}
            />
        ))}
    </Routes>
);
