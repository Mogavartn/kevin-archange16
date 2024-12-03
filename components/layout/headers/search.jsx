import React from 'react';

const Search = ({ isOpen, setIsOpen, addClass }) => {
    return (
        <>
            <div className={`header__area-menubar-right-box-search-box ${isOpen ? 'active' : ''}`}>
                <form>
                    <input type="search" placeholder="Rechercher ici....." />
                    <button type="submit"><i className="fal fa-search"></i></button>
                </form> 
                <span className="header__area-menubar-right-box-search-box-icon" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></span>
            </div>

        </>
    );
};

export default Search;