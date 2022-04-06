import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Modal.css";

export default function Modal() {
  return (
    <Stack spacing={2} direction="row">
      <Button className="CartImg">
        <img src="carrito.jpg" />
      </Button>
    </Stack>
  );
}
