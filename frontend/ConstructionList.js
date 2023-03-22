import {useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

export default function ConstructionList(props) {
    const searchTerm = props.searchTerm

    const base = useBase()
    const table = base.getTable("Materials")
    const records = useRecords(table)

    // const priceTable = base.getTable("price")
    // const priceRecords = useRecords(priceTable)

    return <div>
        <div>{records[0].getCellValue("Materials")}: {records[0].getCellValue("price")}</div>
        <div>{records.length}</div>
        <div>Term: {searchTerm}</div>
    </div>
}