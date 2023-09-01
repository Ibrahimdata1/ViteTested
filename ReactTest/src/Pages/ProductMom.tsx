import Product from "../Components/Product";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import CatagoriesCard from "../Components/CatagoriesCard";




const ProductMom = () => {
  return (
    <div>
      <CatagoriesCard/>
          <Product/>
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default ProductMom;
