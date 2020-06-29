import React, { useState } from 'react';
import PropTypes from 'prop-types'
import '../styles/Search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        setSearchResults(await getImages(value));
        setLoading(false);
    };
    return (
        <div className="search">
            <form
                className="search-form"
                onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className="submit-button"
                    type="submit">Search!
                </button>
            </form>
          
            {loading && ( 
               <div className="loader">
                   <div></div>
                   </div>
            )}
          
        </div>
    );
};

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
};


export default Search;