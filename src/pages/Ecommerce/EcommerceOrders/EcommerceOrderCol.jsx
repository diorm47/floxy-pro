import React from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";
import { Badge } from "reactstrap";

const formateDate = (date, format) => {
  const dateFormat = format ? format : "DD MMM Y";
  const date1 = moment(new Date(date)).format(dateFormat);
  return date1;
};
const toLowerCase1 = (str) => {
  return str === "" || str === undefined ? "" : str.toLowerCase();
};

const OrderId = (cell) => {
  return (
    <Link to="#" className="text-body fw-bold">
      {cell.value ? cell.value : ""}
    </Link>
  );
};

const BillingName = (cell) => {
  return cell.value ? cell.value : "";
};

const Date = (cell) => {
  return cell.value ? cell.value : "";
};

const Total = (cell) => {
  return cell.value ? cell.value : "";
};

const PaymentStatus = (cell) => {
  return (
    <div
      className={
        "badge font-size-12 badge-soft-" +
        (cell.value === "Paid"
          ? "success"
          : "danger" && cell.value === "Refund"
          ? "warning"
          : "danger")
      }
      pill="true"
    >
      {cell.value}
    </div>
  );
};
const PaymentMethod = (cell) => {
  return (
    <span>
      <i
        className={
          cell.value === "Paypal"
            ? "fab fa-cc-paypal me-1"
            : "" || cell.value === "COD"
            ? "fab fas fa-money-bill-alt me-1"
            : "" || cell.value === "Mastercard"
            ? "fab fa-cc-mastercard me-1"
            : "" || cell.value === "Visa"
            ? "fab fa-cc-visa me-1"
            : ""
        }
      />{" "}
      {cell.value}
    </span>
  );
};
export { OrderId, BillingName, Date, Total, PaymentStatus, PaymentMethod };
