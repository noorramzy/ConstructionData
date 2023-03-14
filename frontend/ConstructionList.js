import {useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

export default function ConstructionList(props) {
    const searchTerm = props.searchTerm

    const base = useBase()
    const table = base.getTable("Materials")
    const records = useRecords(table)

    return <div>
        <div>{records[0].getCellValue("Name")}</div>
        <div>{records.length}</div>
        <div>Term: {searchTerm}</div>
    </div>
}