import BadgeIcon from '@mui/icons-material/Badge';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./styles.module.css";

export default function NavBar({ valueNav }: { valueNav: number }) {
  const [value, setValue] = useState(valueNav);
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflowY = "hidden"
      return
    }

    document.body.style.overflowY = "auto"

  }, [openMenu])

  return (
    <Box
      className={`${styles.nav_bar} ${openMenu && styles.modal_fullscreen}`}
    >
      {openMenu ?
        <CloseIcon
          onClick={() => setOpenMenu(false)}
          className={styles.close_icon_menu}
        />
        :
        <MenuIcon
          onClick={() => setOpenMenu(true)}
          className={styles.open_icon_menu}
        />
      }

      <BottomNavigation
        showLabels
        className={styles.bottons_nav}
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
        <BottomNavigationAction
          label=""
          onClick={() => router.push("/")}
          icon={<ExitToAppOutlinedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}