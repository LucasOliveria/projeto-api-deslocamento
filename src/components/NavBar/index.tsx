import BadgeIcon from '@mui/icons-material/Badge';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import styles from "../../styles/NavBar.module.css";
import { StyledEngineProvider } from "@mui/material/styles";

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

  }, [openMenu]);

  return (
    <StyledEngineProvider injectFirst>
      <div
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
      </div>
    </StyledEngineProvider>
  );
}