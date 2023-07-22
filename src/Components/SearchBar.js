import React,{useState} from "react";
import axios from "axios";


const SearchBar =()=>{
let [search ,setSearch] = useState("");


async function searchedBook(event){
      
try{
 let response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter",{
    params:{
       q:"harry+potter"
    }
 })
 console.log(response.data.items.volumeInfo.title)
}
catch(error){
   console.log(error)
}
}

    return(

        <div>
           <input type="text" placeholder="Search the book you want and read it now" 
           onChange={(event)=>setSearch(event.target.value)} value={search} />
           <button onClick={searchedBook}>Search</button>
        </div>
    )
}

export default SearchBar