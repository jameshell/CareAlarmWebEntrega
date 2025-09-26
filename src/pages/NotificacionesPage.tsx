import React, { useState } from 'react';
import {
  Box,
  Typography,
  Toolbar,
  useTheme,
  useMediaQuery,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';

const NotificacionesPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sample data for the table
  const notificacionesData = [
    {
      id: 1,
      fecha: '2024-01-15 09:30',
      asunto: 'Alerta de paciente crítico',
      destino: 'juan.perez@email.com',
      estado: 'Enviado',
    },
    {
      id: 2,
      fecha: '2024-01-15 10:15',
      asunto: 'Recordatorio de medicación',
      destino: 'maria.garcia@email.com',
      estado: 'Pendiente',
    },
    {
      id: 3,
      fecha: '2024-01-15 11:00',
      asunto: 'Actualización de estado',
      destino: 'carlos.lopez@email.com',
      estado: 'Fallido',
    },
    {
      id: 4,
      fecha: '2024-01-15 12:30',
      asunto: 'Cita médica confirmada',
      destino: 'ana.rodriguez@email.com',
      estado: 'Enviado',
    },
    {
      id: 5,
      fecha: '2024-01-15 14:20',
      asunto: 'Alerta de emergencia',
      destino: 'pedro.martinez@email.com',
      estado: 'Pendiente',
    },
  ];

  const filteredData = notificacionesData.filter((notificacion) =>
    notificacion.asunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notificacion.destino.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notificacion.estado.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          Notificaciones
        </Typography>

        {/* Search Field */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3, backgroundColor: 'white' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Table */}
        <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f0f0f0' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Fecha</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Asunto</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Destino</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Estado</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((notificacion) => (
                  <TableRow key={notificacion.id} hover>
                    <TableCell>{notificacion.fecha}</TableCell>
                    <TableCell>{notificacion.asunto}</TableCell>
                    <TableCell>{notificacion.destino}</TableCell>
                    <TableCell>{notificacion.estado}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary" title="Reenviar">
                        <SendIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Rows per page
            </Typography>
            <TablePagination
              component="div"
              count={filteredData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[10, 25, 50]}
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
              sx={{ border: 'none' }}
            />
          </Box>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default NotificacionesPage;