import react, {useEffect, useState} from 'react';
import axios from 'axios';


const SearchBar = ({setsearchResults}) => {

    const [searchTerm,setsearchTerm] = useState("")
    
    useEffect(()=>{
        handleSubmit()
    },[])

    function handleSubmit(e){
        if(e){
            e.preventDefault()
        }
        axios.get("https://api.unsplash.com/search/photos",{
            headers:{
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            },
            params:{
                query:searchTerm || "random"
            }
        })
        .then(response=>{
            setsearchResults(response.data.results)
            setsearchTerm("")
        })
        .catch(error=>{
            alert(error)
        })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" onChange={(e)=>setsearchTerm(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;