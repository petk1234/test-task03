import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.css";
export default function Loader() {
  return (
    <div>
      <Spinner animation="border" variant="info" />
    </div>
  );
}
