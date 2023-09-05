import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

type ImgMediaCardProps = {
  onAdd: any;
  onRemove: any;
  Item: any;
  product: any;
};
function ImgMediaCard({ onAdd, onRemove, Item, product}: ImgMediaCardProps) {
  return (
    <>
      <img
        style={{ maxHeight: "300px", maxWidth: "250px" }}
        src={product.imageURL}
        key={product.id}
      />
      <div className="card-body p-0" style={{ textAlign: "center" }}>
        <p className="card-header fw-bold bg-transparent border-bottom-0">
          {product.name}
        </p>
        <p className="card-header bg-transparent border-bottom-0">
          {product.price}
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <div className="btn-group w-100 d-flex justify-content-center">
            {Item ? (
              <div>
                <IconButton onClick={() => onRemove(Item)}>
                  <RemoveIcon style={{color:'red'}}/>
                </IconButton>
                <span className="p-1">{Item.qty}</span>
                <IconButton onClick={() => onAdd(Item)}>
                  <AddIcon style={{color:'green'}}/>
                </IconButton>
              </div>
            ) : (
              <button
                className="btn btn-primary mt-2"
                onClick={() => onAdd(product)}
              >
                <ShoppingCartCheckoutIcon className="me-2" />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
}
export default ImgMediaCard;
