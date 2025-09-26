import React, { useState } from 'react';
import {
  Box,
  Typography,
  Toolbar,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const ConfiguracionPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState('Requerido');
  const [passwordPolicy, setPasswordPolicy] = useState('Fuerte');
  const [rolePermissions, setRolePermissions] = useState('Sin Asignar');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Configuración guardada:', {
      twoFactorAuth,
      passwordPolicy,
      rolePermissions,
    });
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
          Configuración
        </Typography>

        <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)'
              },
              gap: 3,
              mb: 4
            }}
          >
            {/* Two Factor Authentication */}
            <FormControl fullWidth>
              <InputLabel id="two-factor-label">Two Factor Authentication</InputLabel>
              <Select
                labelId="two-factor-label"
                value={twoFactorAuth}
                label="Two Factor Authentication"
                onChange={(e) => setTwoFactorAuth(e.target.value)}
              >
                <MenuItem value="Requerido">Requerido</MenuItem>
                <MenuItem value="Opcional">Opcional</MenuItem>
                <MenuItem value="Deshabilitado">Deshabilitado</MenuItem>
              </Select>
            </FormControl>

            {/* Password Policy */}
            <FormControl fullWidth>
              <InputLabel id="password-policy-label">Política de Contraseñas</InputLabel>
              <Select
                labelId="password-policy-label"
                value={passwordPolicy}
                label="Política de Contraseñas"
                onChange={(e) => setPasswordPolicy(e.target.value)}
              >
                <MenuItem value="Fuerte">Fuerte</MenuItem>
                <MenuItem value="Media">Media</MenuItem>
                <MenuItem value="Básica">Básica</MenuItem>
              </Select>
            </FormControl>

            {/* Role Permissions */}
            <FormControl fullWidth>
              <InputLabel id="role-permissions-label">Permisos por Rol</InputLabel>
              <Select
                labelId="role-permissions-label"
                value={rolePermissions}
                label="Permisos por Rol"
                onChange={(e) => setRolePermissions(e.target.value)}
              >
                <MenuItem value="Sin Asignar">Sin Asignar</MenuItem>
                <MenuItem value="Administrador">Administrador</MenuItem>
                <MenuItem value="Médico">Médico</MenuItem>
                <MenuItem value="Enfermera">Enfermera</MenuItem>
                <MenuItem value="Usuario">Usuario</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Save Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Guardar
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ConfiguracionPage;