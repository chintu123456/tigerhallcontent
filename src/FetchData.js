import React, { useEffect, useState } from "react";
import Content from "./content";

function FetchData(){
    const [records, setRecords] = useState(Content);
    
    // useEffect(() => {
    //     fetch('https://api.tigerhall.net/v2/', {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/Json" },
    //         body: JSON.stringify({
    //           query:`query Categories {
    //             categories {
    //               edges {
    //                 id
    //                 name
    //               }
    //             }
    //           }`
  
    //         })
    //       })
    //       .then(response => response.categories.edges.json())
    //       .then(data => setRecords(data))
    //       .catch(err => console.log(err))
    // },[])

    return(
        <div>
            <ul>
                {records.map((list, index) =>(
                    <li key={index}>{list.id} | {list.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchData;