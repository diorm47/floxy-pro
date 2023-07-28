import React from 'react';
import { Badge } from 'reactstrap';

const Pdate = (cell) => {
    return cell.value ? cell.value : '';
};

const Type = (cell) => {
    return cell.value ? cell.value : '';
};

const Value = (cell) => {
    return cell.value ? cell.value : '';
};

const ValueinUSD = (cell) => {
    return cell.value ? cell.value : '';
};

const Status = (cell) => {
    switch (cell.value) {
        case "Completed":
            return <Badge className="bg-success font-size-10">Completed</Badge>
        case "Pending":
            return <Badge className="bg-warning font-size-10">Pending</Badge>
        case "Failed":
            return <Badge className="bg-danger font-size-10">Failed</Badge>
    }
};

const Coin = (cell) => {
    return cell.value ? cell.value : '';
};


export {
    Pdate,
    Type,
    Value,
    ValueinUSD,
    Status,
    Coin
};