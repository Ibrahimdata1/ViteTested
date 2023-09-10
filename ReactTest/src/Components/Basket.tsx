import { Button } from "react-bootstrap";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type BasketProps = {
  cartItem: any;
  onAdd: any;
  onRemove: any;
  setCartItem: any;
};
const Basket = ({ cartItem, onAdd, onRemove, setCartItem }: BasketProps) => {
  const itemsPrice = cartItem.reduce(
    (a: any, b: any) => a + b.qty * b.price,
    0
  );
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  const deleted = (item: any) => {
    const newcartItems = cartItem.filter((e: any) => e.id !== item.id)
    setCartItem(newcartItems);
    localStorage.setItem('cartItem',JSON.stringify(newcartItems));
  };
  return (
    <aside className="d-flex flex-column w-100 p-4 h-100 justify-content-center">
      <h2 className="mb-3 d-flex justify-content-center">Cart Items</h2>
      <div>
        {cartItem.length === 0 && <div>Cart is empty</div>}
        {cartItem.map((item: any) => (
          <div
            className="row d-flex align-items-center pb-3 mb-2"
          >
            <div className="col-12 col-lg-auto d-flex justify-content-center">{item.name}</div>
            <div className="col-3 col-lg-3 d-flex justify-content-center">
              <img
                src={item.imageURL}
                key={item.id}
                style={{ maxHeight: "150px", maxWidth: "100px" }}
              />
            </div>
            <div className="col-4 col-lg-3">
              <IconButton onClick={() => onRemove(item)}>
                <RemoveIcon style={{ color: "red" }} />
              </IconButton>
              <IconButton onClick={() => onAdd(item)}>
                <AddIcon style={{ color: "green" }} />
              </IconButton>
            </div>

            <div className="col-4 col-lg-3 d-flex justify-content-center">
              {item.qty} * ${item.price}
            </div>
            <div className="col-1 col-lg-1 d-flex justify-content-center">
              <IconButton onClick={() => deleted(item)}>
                <DeleteForeverIcon />
              </IconButton>
            </div>
          </div>
        ))}

        {cartItem.length !== 0 && (
          <div className="lh-lg">
            <hr className="d-lg-block d-none"></hr>
            <div className="row">
              <div className="col-6 col-lg-5">Items Price</div>
              <div className="col-6 col-lg-6 d-flex justify-content-end ms-lg-4">
                ${itemsPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-lg-5">Shipping Price</div>
              <div className="col-6 col-lg-6 d-flex justify-content-end ms-lg-4">
                ${shippingPrice}
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-lg-5">
                <strong>Total Price</strong>
              </div>
              <div className="col-6 col-lg-6 d-flex justify-content-end ms-lg-4">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row d-flex justify-content-center">
              <Button
                style={{ width: "90%" }}
                onClick={() => alert("Implement Checkout!")}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Basket;
