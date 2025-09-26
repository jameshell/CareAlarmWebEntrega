import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Toolbar,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from 'recharts';
import Navbar from '../components/Navbar';

const ReportesPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mock data for charts
  const alarmData = [
    { name: 'Emergencia', alarmas: 45, notificaciones: 120 },
    { name: 'Crítico', alarmas: 32, notificaciones: 95 },
    { name: 'Alto', alarmas: 28, notificaciones: 75 },
    { name: 'Medio', alarmas: 18, notificaciones: 45 },
    { name: 'Bajo', alarmas: 12, notificaciones: 25 },
  ];

  const trendData = [
    { mes: 'Ene', alarmas: 65, pacientes: 120 },
    { mes: 'Feb', alarmas: 78, pacientes: 135 },
    { mes: 'Mar', alarmas: 82, pacientes: 142 },
    { mes: 'Abr', alarmas: 95, pacientes: 158 },
    { mes: 'May', alarmas: 88, pacientes: 145 },
    { mes: 'Jun', alarmas: 102, pacientes: 165 },
  ];

  const notificationTypes = [
    { name: 'Email', value: 45, color: '#8884d8' },
    { name: 'SMS', value: 30, color: '#82ca9d' },
    { name: 'Push', value: 15, color: '#ffc658' },
    { name: 'Llamada', value: 10, color: '#ff7c7c' },
  ];

  const responseTimeData = [
    { hora: '00:00', tiempo: 2.5 },
    { hora: '04:00', tiempo: 1.8 },
    { hora: '08:00', tiempo: 3.2 },
    { hora: '12:00', tiempo: 4.1 },
    { hora: '16:00', tiempo: 2.9 },
    { hora: '20:00', tiempo: 2.1 },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} desktopOpen={desktopOpen} setDesktopOpen={setDesktopOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: isDesktop && desktopOpen ? `calc(100% - 240px)` : '100%',
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        <Toolbar />

        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Reportes
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // 1 column on extra small screens
              md: 'repeat(2, 1fr)' // 2 columns on medium screens and up
            },
            gap: 3,
            '& > *': {
              minHeight: '400px'
            }
          }}
        >
          {/* Bar Chart */}
          <Card sx={{ boxShadow: 1 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Alarmas por Categoría
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={alarmData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="alarmas" fill="#8884d8" name="Alarmas" />
                  <Bar dataKey="notificaciones" fill="#82ca9d" name="Notificaciones" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Line Chart */}
          <Card sx={{ boxShadow: 1 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Tendencia Mensual
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="alarmas"
                    stroke="#8884d8"
                    strokeWidth={2}
                    name="Alarmas"
                  />
                  <Line
                    type="monotone"
                    dataKey="pacientes"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    name="Pacientes"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card sx={{ boxShadow: 1 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Tipos de Notificación
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={notificationTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {notificationTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Line Chart - Response Time */}
          <Card sx={{ boxShadow: 1 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Tiempo de Respuesta (horas)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hora" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="tiempo"
                    stroke="#ff7300"
                    strokeWidth={3}
                    dot={{ fill: '#ff7300', strokeWidth: 2, r: 6 }}
                    name="Tiempo Promedio"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportesPage;