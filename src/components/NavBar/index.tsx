
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { useState } from "react";
import BadgeIcon from '@mui/icons-material/Badge';

export default function NavBar() {
  const [value, setValue] = useState(0);

  function handleNavigate() {
    console.log("teste");
  }

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        sx={{ backgroundColor: "#1b1b1b" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          onClick={handleNavigate}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Clientes"
          onClick={handleNavigate}
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          label="Condutores"
          onClick={handleNavigate}
          icon={<BadgeIcon />}
        />
        <BottomNavigationAction
          label="Deslocamento"
          onClick={handleNavigate}
          icon={<MapOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Veículo"
          onClick={handleNavigate}
          icon={<DirectionsCarIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}