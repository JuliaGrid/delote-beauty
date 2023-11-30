import { Routes, Route } from "react-router-dom"
import ErrorBoundary from "pages/ErrorBoundary";
import {config} from "../config";

export const AppRouter = () => {
    return (
        <ErrorBoundary>
                <Routes>
                    {Object.values(config).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element} />
                    ))}
                </Routes>
        </ErrorBoundary>
    )
}