import { Modal } from "react-bootstrap";
import Basket from "./Basket";

type ModalComponentProps = {
  show: any;
  handleClose: any;
  product: any;
  Item: any;
  onAdd: any;
  onRemove: any;
  cartItem: any;
  setCartItem:any;
};
const ModalComponent = ({
  show,
  handleClose,
  product,
  cartItem,
  Item,
  onAdd,
  onRemove,
  setCartItem
}: ModalComponentProps) => {
  return (
    <Modal show={show} onHide={handleClose} className="bg-dark">
      <Basket onAdd={onAdd} cartItem={cartItem} setCartItem={setCartItem} onRemove={onRemove}/>
    </Modal>
  );
};

export default ModalComponent;
