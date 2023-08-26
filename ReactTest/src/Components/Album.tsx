import { productData } from "../data/Pic";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function ImgMediaCard() {
  return (
    <div className="container mt-4 ">
      <div className="row">
      {productData.map((item) => (
      
        <div className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
          <div className="card p-1 mt-2 border-0" style={{maxHeight:'450px', maxWidth:'250px'}}>
            <img style={{maxHeight:'300px', maxWidth:'250px'}} src={item.imageURL}/>
            <div className="card-body p-0" style={{textAlign:'center'}}>
              <p className="card-header fw-bold bg-transparent border-bottom-0">{item.name}</p>
              <p className="card-header bg-transparent border-bottom-0">{item.price}</p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="btn-group w-100">
                  <button className="btn btn-primary mt-2"><ShoppingCartCheckoutIcon className="me-2"/>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
export default ImgMediaCard