import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table } from 'reactstrap';

interface ITableheaderProps {
    sortCategory: () => void
    sortPrice: () => void
}

const Tableheader: FC<ITableheaderProps> = ({sortCategory, sortPrice}) => {
    return (
        <>
            <Table  bordered    hover>
                <thead>
                    <tr>
                        <th onClick={sortCategory}>
                            Category
                        </th>
                        <th>
                            Name
                        </th>
                        <th onClick={sortPrice}>
                            Price
                        </th>
                    </tr>
                </thead>
            </Table>
        </>
    );
};

export default Tableheader;