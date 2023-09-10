import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import BadgeCart from "./BadgeCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react"
import ModalComponent from "./ModalComponent";
import { productData } from "../data/ProductData";


type NavProps = {
  cartItemLength:any,
  setCartItem:any,
  onAdd:any,
  onRemove:any,
  cartItem:any,
}
const Nav = ({cartItem,setCartItem,onAdd,onRemove,cartItemLength}:NavProps) => {
  const [show,setShow] = useState(false);
  const handleShow = () =>{setShow(true);}
  const handleClose =() =>{ setShow(false);}

  return (
    <div className="position-fixed" style={{height:'30px', width:'100%', zIndex:'5'}}>
      <nav className="navbar navbar-dark bg-dark d-lg-none d-flex align-content-center w-100">
        <a
          className="navbar-brand d-flex justify-content-start ms-5"
          style={{ color: "whitesmoke"}}
          href="/"
        >
          <ImportContactsSharpIcon style={{ fontSize: "50px" }} />
        </a>
        <div className="d-flex justify-content-end me-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="collapse" id="navbarToggleExternalContent" style={{zIndex:'3'}}>
        <ul className="navbar-nav me-auto mb-lg-0 bg-black p-2">
          <li className="nav-item h6 d-flex justify-content-end me-5">
            <a
              className="nav-link active"
              style={{ color: "white" }}
              aria-current="page"
              href="/course"
            >
              Course
            </a>
          </li>
          <li className="nav-item h6 d-flex justify-content-end me-5">
            <a
              className="nav-link active"
              style={{ color: "white"}}
              aria-current="page"
              href="/product"
            >
              Product
            </a>
          </li>
          <li className="nav-item h6 d-flex justify-content-end me-5">
            <a
              className="nav-link"
              style={{ color: "white" }}
              href="/categoties"
            >
              Categories
            </a>
          </li>
          <li className="nav-item h6 d-flex justify-content-end me-5">
            <a
              className="nav-link"
              style={{ color: "white" }}
              href="/login"
            >
              LogIn
            </a>
          </li>
        </ul>
      </div>

      <nav className="navbar navbar-expand-lg navBar p-2 d-none d-lg-block">
        <div className="container-md" style={{ color: "whitesmoke" }}>
          <a className="navbar-brand " style={{ color: "whitesmoke" }} href="/">
            <ImportContactsSharpIcon
              style={{ fontSize: "50px", marginBottom: "5px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light">
              <DensityMediumSharpIcon />
            </span>
          </button>
          <div
            className="collapse navbar-collapse d-flex align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
              <li className="nav-item h6">
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/course"
                >
                  Course
                </a>
              </li>
              <li className="nav-item h6">
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/product"
                >
                  Products
                </a>
              </li>
              <li className="nav-item h6">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  href="/videopage"
                >
                  Student Of Knowledge
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="dropdown" style={{ background: "transparent" }}>
                <button
                  className="btn btn-secondary bg-black border-0 botton--dropdown"
                  style={{
                    fontSize: "15px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account{" "}
                  <ArrowDropDownIcon
                    fontSize="large"
                    style={{ marginBottom: "5px" }}
                  />
                </button>
                <ul className="dropdown-menu ms-2">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/login"
                      style={{ color: "black" }}
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/register">
                      Register
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav me-auto  mb-lg-0 mt-2">
                <li className="nav-item h6" style={{ listStyleType: "none" }}>
                  <a
                    className="nav-link active "
                    style={{ color: "white" }}
                    aria-current="page"
                    href="/cart"
                  >
                    Choosing Books
                  </a>
                </li>
              </ul>
                <a onClick={handleShow}><BadgeCart cartItemLength={cartItemLength}/></a>
            </form>
          </div>
        </div>
      </nav>
      {productData.map((product) => (
      <ModalComponent show={show} onAdd={onAdd} setCartItem={setCartItem} onRemove={onRemove} product={product} handleClose={handleClose} Item={cartItem.find((e: any) => e.id === product.id)} cartItem={cartItem}/>
      ))}
    </div>
    
    
  );
};

export default Nav;
