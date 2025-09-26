import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import AlarmasPage from './pages/AlarmasPage.tsx'
import UsuariosPage from './pages/UsuariosPage.tsx'
import NotificacionesPage from './pages/NotificacionesPage.tsx'
import ReportesPage from './pages/ReportesPage.tsx'
import ConfiguracionPage from './pages/ConfiguracionPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/alarmas',
        element: <AlarmasPage />,
      },
      {
        path: '/usuarios',
        element: <UsuariosPage />,
      },
      {
        path: '/notificaciones',
        element: <NotificacionesPage />,
      },
      {
        path: '/reportes',
        element: <ReportesPage />,
      },
      {
        path: '/configuracion',
        element: <ConfiguracionPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
