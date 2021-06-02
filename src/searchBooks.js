import React from 'react';
import { useEffect, useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [books, setBooks] = useState("");
let games;

const searchBooks = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(
        () => {
            requestBooks();
        }, []);
    async function requestBooks() {
    const res = await fetch(
    `https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter`
     );
    const json = await res.json();
    games = json;

    setBooks(json.book);
    }

    function updateList (e)  {
        if (e.target.value === String){ 
        return (games.filter((game) =>  game.GameTitle === e));
    }
    }
    function filterByGroup (e)  {
        if(e === String){
        return  games.filter((game) => game.Group === e);
        }
    }
    function filterByLevel (e)  {
        if(e !== Number ){
            return games.filter((game) => 
                 game.Level === +e);
        }
    }
    return( 
        <section>
        <div class="wrapper">
            <form class="input-field" onSubmit = {e => updateList(e.target.value)}>
                <input 
                type="text" 
                value= {books}
                onChange = {(e) => setBooks(e.target.value)}
                onBlur = {(e) => setBooks(e.target.value)}
                />
                <button type="submit" 
                >search</button>
            </form>
            <div class="field-filter-wrapper">
                <div class="filter-field">
                    <h1>Filter by:</h1>
                    <button onClick = {filterByGroup()}>Group</button> 
                    <button onClick = {filterByLevel()}>Level</button> 
                </div>
            </div>
        </div>
         <ul>
             {
             games.map(game =>
            <li>
                <div class="books">
                    <h3>{games.GameImage}</h3>
                    <h2>{games.GameTitle}</h2>
                    <h3>{games.GameDescription}</h3>
                </div>
            </li>

             )
             }
        </ul>
        </section>
         );
};
export default searchBooks;