import {useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

export default function ConstructionList(props) {
    const searchTerm = props.searchTerm

    const base = useBase()
    const table = base.getTable("Materials")
    const records = useRecords(table)
    
    

    return <div>
        <div></div>
        <div>{searchTable(records, 'wood')}</div>
        <div>{records[0].getCellValue("Materials")}: ${records[0].getCellValue("price")}</div>
        <div>{records.length} </div>
        <div>Term: {searchTerm}</div>
    </div>
}

function searchTable(table, term){
    for (let i = 0; i < table.length; i++){
        if (table[i].getCellValue('Materials')==term.toString()){
            return i
        }
    }
    return 'NA'
}