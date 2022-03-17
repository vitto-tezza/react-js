import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Modal.css";
import cart from "../../media/carrito.jpg";
import { ClassNames } from "@emotion/react";

export default function Modal() {
  return (
    <Stack spacing={2} direction="row">
      <Button className="CartImg">
        <img src={cart} />
      </Button>
    </Stack>
  );
}
