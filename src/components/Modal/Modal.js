import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Modal.css";
import { Link } from "react-router-dom";

export default function Modal() {
  return (
    <Stack spacing={2} direction="row">
      <div className="CartImg">
        <Link to={"/Cart"}>
          <img src="/carrito.jpg" />
        </Link>
      </div>
    </Stack>
  );
}
