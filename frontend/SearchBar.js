import {useBase, useRecords} from '@airtable/blocks/ui';
import React, { useState } from 'react';


export default function SearchBar({handleSearchTerm}){
    const [searchTerm, setSearchTerm] = useState()
    const [value,setValue] = useState();
    

    return (<div className='flexRow'>
        search:
        <input type = "text" value={value} onChange= {(event) => setValue(event.target.value)}></input>
        <div onClick={() => handleSearchTerm(value)} className= "button">
         </div>
    </div>)
}

