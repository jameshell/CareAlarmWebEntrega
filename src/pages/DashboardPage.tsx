import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Fab,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Share as ShareIcon, Add as AddIcon } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const DashboardPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const recentActivity = [
    {
      patient: 'Paciente 1',
      description: 'Se han enviado 3 Alarmas',
      time: 'Today • 23 min',
    },
    {
      patient: 'Paciente 2',
      description: 'Se han enviado 4 Alarmas',
      time: 'Today • 34 min',
    },
    {
      patient: 'Paciente 1',
      description: 'Se han enviado 2 Alarmas',
      time: 'Today • 45 min',
    },
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
        
        {/* Dashboard Cards */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                flex: 1,
                backgroundColor: '#e8e4f3',
                boxShadow: 1,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#b8b0c7',
                      borderRadius: '50% 50% 0 0',
                    }}
                  />
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#b8b0c7',
                        borderRadius: '50%',
                      }}
                    />
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#b8b0c7',
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Recent Activity Section */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
              Actividad Reciente
            </Typography>
            <IconButton size="small" sx={{ ml: 1 }}>
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recentActivity.map((activity, index) => (
              <Card key={index} sx={{ boxShadow: 1 }}>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#e8e4f3',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          backgroundColor: '#b8b0c7',
                          borderRadius: '50% 50% 0 0',
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {activity.patient}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {activity.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AddIcon fontSize="small" />
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Floating Action Button */}
        <Fab
          color="primary"
          aria-label="share"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          <ShareIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default DashboardPage;