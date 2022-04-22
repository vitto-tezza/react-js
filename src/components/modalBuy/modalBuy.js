import Dialog from "@mui/material/Dialog";

const ModalBuy = ({ handleClose, open, children }) => {
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        {children}
      </Dialog>
    </>
  );
};
export default ModalBuy;
