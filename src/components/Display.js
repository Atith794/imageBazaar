import react from 'react'

const Display = ({searchResults}) => {


    return(
        <div>
        {
            searchResults && (
                searchResults.map((value,index)=>(
                <div>
                    <img src={value.urls.thumb} alt={value.alt_description}/>
                    <p>{value.description}</p>
                </div>
            ))
        )
    }
    </div>
    )
}

export default Display