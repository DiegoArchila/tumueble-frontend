import { Link } from "react-router-dom";

function Footer() {
    return (       
          <footer className="mt-auto bg-dark shadow navbar-dark">
            <div className="container d-flex justify-content-center">

                <button type="button" className="btn btn-outline-light m-2 rounded-circle text-white bg-dark" style={{backgroundColor: "#54456b", width:"42px", height:"42px"}}>
                    <i className="fab fa-facebook-f rounded-circle"></i>
                </button>

                <button type="button" className="btn btn-outline-light m-2 rounded-circle text-white bg-dark" style={{backgroundColor: "#54456b", width:"42px", height:"42px"}}>
                    <i className="fab fa-youtube"></i>
                </button>

                <button type="button" className="btn btn-outline-light m-2 rounded-circle text-white bg-dark" style={{backgroundColor: "#54456b", width:"42px", height:"42px"}}>
                    <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-outline-light m-2 rounded-circle text-white bg-dark" style={{backgroundColor: "#54456b", width:"42px", height:"42px"}}>
                    <i className="fab fa-github"></i>
                </button>
                </div>

                <hr className="sidebar-divider my-0 text-white-50"/>

                <div className="text-center text-white-50 p-1">
                © 2022 Copyright
                <Link className="text-white-50 text-decoration-none" to="#"> tumueble.com</Link>
                </div>
          </footer>

    );
}

export default Footer;