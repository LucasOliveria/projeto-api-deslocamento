
import Props from '@/types/Props';
import BadgeIcon from '@mui/icons-material/Badge';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useState } from "react";

export default function NavBar({ valueNav }: Props) {
  const [value, setValue] = useState(valueNav);
  const router = useRouter();

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
          onClick={() => router.push("/")}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Clientes"
          onClick={() => router.push("/clientes")}
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          label="Condutores"
          onClick={() => router.push("/condutores")}
          icon={<BadgeIcon />}
        />
        <BottomNavigationAction
          label="Deslocamento"
          onClick={() => router.push("/deslocamento")}
          icon={<MapOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Veículo"
          onClick={() => router.push("/veiculos")}
          icon={<DirectionsCarIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}