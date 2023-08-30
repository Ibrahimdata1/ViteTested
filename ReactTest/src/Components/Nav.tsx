import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import BadgeCart from "./BadgeCart";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navBar p-2 ">
      <div className="container-md " style={{ color: "whitesmoke" }}>
        <a className="navbar-brand " style={{ color: "whitesmoke" }} href="/">
          <ImportContactsSharpIcon
            style={{ fontSize: "50px", marginBottom: "10px" }}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item h5">
              <a
                className="nav-link active"
                style={{ color: "white", fontWeight:'bold'}}
                aria-current="page"
                href="/course"
              >
                Course
              </a>
            </li>
            <li className="nav-item h5">
              <a
                className="nav-link active"
                style={{ color: "white", fontWeight:'bold'}}
                aria-current="page"
                href="/product"
              >
                Products
              </a>
            </li>
            <li className="nav-item h5">
              <a
                className="nav-link"
                style={{ color: "white", fontWeight:'bold' }}
                href="/categoties"
              >
                Categories
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <div className="dropdown" style={{ background: "transparent" }}>
              <button
                className="btn btn-secondary bg-black border-0 botton--dropdown"
                style={{ fontWeight: "bold", fontSize: "20px",fontFamily:"'Montserrat', sans-serif"}}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account <ArrowDropDownIcon fontSize="large" style={{marginBottom:'5px'}}/>
              </button>
              <ul className="dropdown-menu ms-2">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    style={{ color: "black" }}
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item h5 " style={{ listStyleType: "none",fontWeight:'bold'}}>
                  <a
                    className="nav-link active "
                    style={{ color: "white" }}
                    aria-current="page"
                    href="/course"
                  >
                    Course
                  </a>
                </li>
              </ul>
            <BadgeCart />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
