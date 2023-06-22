import Footer from "@/components/Footer";
import Header from '@/components/Header';
import InfoTable from "@/components/Table";
import styles from '@/styles/Home.module.css';
import { useState } from "react";
import localStyles from './styles.module.css';
import CustoncButton from "@/components/CustomButton";


export default function Clientes() {
  const [valueNav, setValueNav] = useState(1);

  return (
    <div className={styles.body}>
      <Header valueNav={valueNav} />
      <main className={styles.main}>
        <div className={localStyles.containerTable}>
          <div className={localStyles.container_add_button}>
            <CustoncButton />
          </div>
          <InfoTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}
