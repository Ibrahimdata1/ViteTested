import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CardButton = () => {
  return (
    <button className="btn btn-sm bg-danger text-white" style={{width:'90%'}}><ShoppingCartCheckoutIcon className='me-1'/>Add To Cart</button>
  );
};

export default CardButton;
