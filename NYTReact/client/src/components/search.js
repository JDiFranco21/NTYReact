import React from 'react'

const Search = ({word}) => {
    return(
        <div>
            <h1>Search</h1>
            <h3>Topic</h3>
                <input></input>
            <h3>Start Year</h3>
                <input></input>
            <h3>End Year</h3>
                <input></input>
             <br></br>   
            <button>Search</button>
            <h1>{word}</h1>
        </div>
    )
}

export default Search