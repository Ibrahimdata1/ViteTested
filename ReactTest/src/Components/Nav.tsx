import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import DensityMediumSharpIcon from '@mui/icons-material/DensityMediumSharp';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navBar">
      <div className="container-md" style={{ color: "whitesmoke" }}>
        <a className="navbar-brand " style={{ color: "whitesmoke" }} href="/">
            <ImportContactsSharpIcon fontSize="large"/>
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
          <span className="navbar-toggler-icon text-light"><DensityMediumSharpIcon/></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/course">
                Course
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categoties">
                Categories
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-black" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-black" href="#">
                    Change Password
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-black" href="#">
                    Sign Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
