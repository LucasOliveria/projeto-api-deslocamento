import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h4>CONTATOS</h4>
        <div>
          <EmailIcon className={styles.iconContact} />
          <span>Email: suport@desloca.app.com</span>
        </div>
        <div>
          <WhatsAppIcon className={styles.iconContact} />
          <span>+55 (99) 9 9999-9999 </span>
        </div>
      </div>

    </footer>
  )
}