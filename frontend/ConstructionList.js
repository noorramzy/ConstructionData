import {useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

export default function ConstructionList(props) {
    const searchTerm = props.searchTerm

    const base = useBase()
    const table = base.getTable(props.location)
    const records = useRecords(table, { fields: ["Material", "Price"] })

    const filteredRecords = records.filter(record =>
      record.getCellValueAsString("Material").toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {filteredRecords.map(record => (
                <div key={record.id}>
                    {record.getCellValueAsString("Material")}: ${record.getCellValueAsString("Price")}
                </div>
            ))}
        </div>
    );
}
