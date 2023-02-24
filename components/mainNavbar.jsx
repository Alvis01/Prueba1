import React from "react";




export default function MainNavBar(){

    return <>
       <nav className="mainNavbar navbar bg-body-tertiary">
    
    <div className="maincontainer container-fluid">
        <form className="d-flex search-form-container" role="search">
                     <input className="search-form form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                     <button className="btn-search btn btn-outline-success" type="submit">Buscar</button>
                            
                        
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Filtrar
                        </button>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                        
        
        </form>
    </div>
  
</nav>
    
    
    </>


};