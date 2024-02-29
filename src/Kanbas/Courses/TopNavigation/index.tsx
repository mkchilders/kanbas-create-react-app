import { HiMiniBars3, HiEye } from "react-icons/hi2";
import './index.css';
import { useLocation, useParams } from "react-router";

const TopNavigation = ({course} : any) => {
    const { pathname } = useLocation();
    const location = pathname.split('/').pop();
    return (
        <nav className="navbar navbar-light my-2 container-fluid">
          <div className="d-flex flex-row align-items-center">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <HiMiniBars3 />
            </button>
            <ol className="breadcrumb wd-breadcrumb">
              <li className="breadcrumb-item">{course?.name}</li>
              <li className="breadcrumb-item active">{location}</li>
            </ol>
          </div>
          <button type="button" className="btn btn-outline-secondary me-2">
            <HiEye /> Student View
          </button>
        </nav>
    );
}

export default TopNavigation;