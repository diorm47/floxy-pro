import React from 'react';
import { Link } from 'react-router-dom';
import * as moment from "moment";
import { Badge } from 'reactstrap';

const formateDate = (date, format) => {
    const dateFormat = format ? format : "DD MMM Y";
    const date1 = moment(new Date(date)).format(dateFormat);
    return date1;
};
const toLowerCase1 = str => {
    return (
      str === "" || str === undefined ? "" : str.toLowerCase()
    );
  };


const Pdate = (cell) => {
    return cell.value ? cell.value : '';
};

const Ddate = (cell) => {
    return cell.value ? cell.value : '';
};

const Name = (cell) => {
    return cell.value ? cell.value : '';
};

const Idno = (cell) => {
    return cell.value ? cell.value : '';
};

const Budget = (cell) => {
    return cell.value ? cell.value : '';
};


export {
    Pdate,
    Ddate,
    Name,
    Idno,
    Budget
};