import {useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

export default function ConstructionList(props) {
    const searchTerm = props.searchTerm

    const base = useBase()
    const table = base.getTable("Materials")
    const records = useRecords(table, { fields: ["Materials", "price"] })

    const filteredRecords = records.filter(record =>
      record.getCellValueAsString("Materials").toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {filteredRecords.map(record => (
                <div key={record.id}>
                    {record.getCellValueAsString("Materials")}: ${record.getCellValueAsString("price")}
                </div>
            ))}
        </div>
    );
}
