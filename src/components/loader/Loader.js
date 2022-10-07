import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./loader.module.scss";
export default function Loader() {
  return (
    <div className={styles.loader}>
      <Spinner animation="border" variant="info" />
    </div>
  );
}
