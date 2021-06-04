import React from 'react';
import { useState } from "react";
import JSONDATA from "./Mockdata.json";



const SearchBooks = () => {
    
    const [books, setBooks] = useState("");
    const [group, setFilterByGroup] = useState("false");
    const [level, setFilterByLevel] = useState("false");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(
    //     () => {
    //         requestBooks();
    //     }, []);
    // async function requestBooks() {
    // const res = await fetch(
    // `https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter`
    //  );
    // const json = await res.json();
    // setBooks(json.book);
    // }
    return( 
        <section>
        <div class="wrapper">
            <form class="input-field">
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
                    <button onClick = {(e) => setFilterByGroup(!group)}>Group</button> 
                    <button onClick = {(e) => setFilterByLevel(!level)}>Level</button> 
                </div>
            </div>
        </div>
         <ul>
             {
             JSONDATA.filter(val => {
                 if(books===""){
                     return val;
                 }else if(val.GameTitle.toLowerCase().includes(books.toLowerCase())){
                    return val;
                 }
                 else if(level=== true && group === false){
                     return val.GameLevel.includes(books.toLowerCase())? val:null;
                 }else if(level=== false && group === true){
                    return val.GameGroup.toLowerCase().includes(books.toLowerCase)? val:null;
                 }else{
                    return null;
                 }
             }).map(val =>
            <li>
                <div className="books">
                    <h2>{val.GameTitle}</h2>
                    <h3>{val.GameDescription}</h3>
                </div>
            </li>
             )
             }
        </ul>
        </section>
         );
};
export default SearchBooks;
