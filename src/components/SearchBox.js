import React from 'react';


const SearchBox = ({searchField, searchChange})=> {
    return (
        <div style={{textAlign: 'center'}}>
            <input 
                type='search' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;