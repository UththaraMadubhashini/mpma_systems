import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import logo from '../../Assets/Images/Logo.png';
// import logo2 from '../../Assets/Images/Logo2.png';

const pages = ['Home', 'Events', 'About', 'SignUp', 'Login', 'SignOut'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState('Home');
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => {
    setSelectedPage(page);
    handleCloseNavMenu();
  };

  const handleSignOut = () => {
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    console.log('Signing out...');
    setSelectedPage('SignOut');
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#135D66' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ marginTop: 1.5, alignItems: 'center', marginLeft: 5 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <img src={logo2} alt="Logo" style={{ height: 80, width: 95, borderRadius: '50%' }} /> */}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <React.Fragment key={page}>
                {page === 'Events' ? (
                  <React.Fragment>
                    <Button
                      aria-controls="menu-events"
                      aria-haspopup="true"
                      onClick={(event) => setAnchorElNav(event.currentTarget)}
                      sx={{
                        mx: 4,
                        color: 'white',
                        textDecoration: 'none',
                        backgroundColor: selectedPage === page ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      }}
                    >
                      {page}
                    </Button>
                    <Menu
                      id="menu-events"
                      anchorEl={anchorElNav}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                    >
                      <MenuItem component={Link} to="/all-events" onClick={() => handlePageClick('All Events')}>All Events</MenuItem>
                      <MenuItem component={Link} to="/musical" onClick={() => handlePageClick('Musical')}>Musical</MenuItem>
                      <MenuItem component={Link} to="/dancing" onClick={() => handlePageClick('Dancing')}>Dancing</MenuItem>
                      <MenuItem component={Link} to="/stage-drama" onClick={() => handlePageClick('Stage Drama')}>Stage Drama</MenuItem>
                      <MenuItem component={Link} to="/food-festival" onClick={() => handlePageClick('Food Festival')}>Food Festival</MenuItem>
                    </Menu>
                  </React.Fragment>
                ) : (
                  page === 'SignOut' ? (
                    <Button
                      key={page}
                      onClick={handleSignOut}
                      sx={{
                        mx: 4,
                        color: 'white',
                        textDecoration: 'none',
                        backgroundColor: selectedPage === page ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {page}
                    </Button>
                  ) : (
                    <Button
                      key={page}
                      component={Link}
                      to={`/${page.toLowerCase().replace(' ', '')}`}
                      onClick={() => handlePageClick(page)}
                      sx={{
                        mx: 4,
                        color: 'white',
                        textDecoration: 'none',
                        backgroundColor: selectedPage === page ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {page}
                    </Button>
                  )
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
