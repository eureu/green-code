import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type ProtectedRouteProps = {
  element: React.ReactNode;
  path: string;
};

export default function ProtectedRoute({ element, path }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to="/" />}
    />
  );
}