import { useState } from 'react';
import type { MouseEvent } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { CommureLogo } from '../CommureLogo';
import { NavBarItem, navBarItems } from './navBarItems';

export function Header() {
  return (
    <header>
      <nav>
        <div className="menu-desktop">
          <DesktopNavBar navBarItems={navBarItems} />
        </div>

        <div className="menu-mobile">
          <MobileNavBar navBarItems={navBarItems} />
        </div>
      </nav>
    </header>
  );
}

function DesktopNavBar({ navBarItems }: { navBarItems: NavBarItem[]}) {
  return (
    <ul className="nav">
      <li className="nav-logo">
        <CommureLogo width={120} height={27} />
      </li>
      {navBarItems.map(item => (
        <li key={item.title} className="nav-item">
          {item.icon}{' '}
          <span className="nav-item__title">{item.title}</span>
        </li>
      ))}
    </ul>
  );
}

function MobileNavBar({ navBarItems }: { navBarItems: NavBarItem[]}) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <div className="menu">
      <Box sx={{ display: 'flex' }}>
        <IconButton onClick={handleOpenNavMenu} sx={{ color: '#fff' }}>
          <MenuIcon />
        </IconButton>

        <div className="menu-options">
          <IconButton sx={{ color: '#fff' }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <ShareIcon />
          </IconButton>
        </div>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {navBarItems.map((item) => (
            <MenuItem key={item.title} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{item.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
}
