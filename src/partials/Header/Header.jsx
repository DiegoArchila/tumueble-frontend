import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "bootstrap/js/src/collapse.js";

function Header() {

    const [ toggle, setToggle] = useState(false);

    useEffect(()=>{
        const myCollapse=document.getElementById("navbar-target");
        const bsCollapse= new Collapse(myCollapse,{toggle:false});
        toggle ? bsCollapse.show() : bsCollapse.hide();
    });

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow" aria-label="Eighth navbar example">
                <div className="container">

                    <Link className="navbar-brand" to="#">
                    <i className="fab fa-shop"></i>
                        TUMUEBLE
                    </Link>
                
                    <button className="navbar-toggler" type="button" aria-controls="navbar-target" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={()=> setToggle(toggle =>!toggle)}>
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-target" in={toggle}>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Categorias</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#"></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>    
    );
}

export default Header;