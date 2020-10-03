import React from 'react';

function Header() {
    return (
        <React.Fragment>
        <div className="navbar">
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>  
            <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a> 
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a> 
            <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>    
        </div>
        </React.Fragment>
    );
}

export default Header;