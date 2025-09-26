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
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';

const UsuariosPage: React.FC = () => {
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
  const usuariosData = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@email.com',
      rol: 'Administrador',
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria.garcia@email.com',
      rol: 'Enfermera',
      estado: 'Activo',
    },
    {
      id: 3,
      nombre: 'Carlos López',
      email: 'carlos.lopez@email.com',
      rol: 'Médico',
      estado: 'Inactivo',
    },
    {
      id: 4,
      nombre: 'Ana Rodríguez',
      email: 'ana.rodriguez@email.com',
      rol: 'Administrador',
      estado: 'Activo',
    },
    {
      id: 5,
      nombre: 'Pedro Martínez',
      email: 'pedro.martinez@email.com',
      rol: 'Enfermera',
      estado: 'Activo',
    },
  ];

  const filteredData = usuariosData.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.rol.toLowerCase().includes(searchTerm.toLowerCase())
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
          Usuarios
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
                <TableCell sx={{ fontWeight: 600 }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>E-mail</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Rol</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Estado</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((usuario) => (
                  <TableRow key={usuario.id} hover>
                    <TableCell>{usuario.nombre}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>{usuario.rol}</TableCell>
                    <TableCell>{usuario.estado}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
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

export default UsuariosPage;