import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

import TableContainer from "../../../components/Common/TableContainer";

import { Idno, Pdate, Type, Value, ValueInUsd } from "./CryptoWalCol";

const WalletActivities = ({ activeTab, toggleTab }) => {

  // Table Data
  const productData = [
    {
      id: 1,
      idno: "#SK3215",
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      amount: "1.00952 BTC",
      valueInUsd: "$ 9067.62",
    },
    {
      id: 2,
      idno: "#SK3216",
      pdate: "04 Mar, 2020",
      type: "Sell",
      coin: "Ethereum",
      amount: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
    },
    {
      id: 3,
      idno: "#SK3217",
      pdate: "04 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      amount: "0.00321 BTC",
      valueInUsd: "$ 1802.621",
    },
    {
      id: 4,
      idno: "#SK3218",
      pdate: "05 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      amount: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
    },
    {
      id: 5,
      idno: "#SK3219",
      pdate: "06 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      amount: "1.04321 ETH",
      valueInUsd: "$ 9423.73",
    },
    {
      id: 6,
      idno: "#SK3220",
      pdate: "07 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      amount: "0.00413 LTC",
      valueInUsd: "$ 2123.01",
    },
    {
      id: 7,
      idno: "#SK3221",
      pdate: "07 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      amount: "1.00952 BTC",
      valueInUsd: "$ 9067.62",
    },
    {
      id: 8,
      idno: "#SK3222",
      pdate: "08 Mar, 2020",
      type: "Sell",
      coin: "Ethereum",
      amount: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
    },
    {
      id: 9,
      idno: "#SK3223",
      pdate: "09 Mar, 2020",
      type: "Sell",
      coin: "Litecoin",
      amount: "1.00952 LTC",
      valueInUsd: "$ 9067.62",
    },
    {
      id: 10,
      idno: "#SK3224",
      pdate: "10 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      amount: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
    },
    {
      id: 11,
      idno: "#SK3225",
      pdate: "11 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      amount: "1.00952 BTC",
      valueInUsd: "$ 9067.62",
    },
    {
      id: 12,
      idno: "#SK3226",
      pdate: "12 Mar, 2020",
      type: "Sell",
      coin: "Ethereum",
      amount: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Id No",
        accessor: "idno",
        filterable: true,
        Cell: cellProps => {
          return <Idno {...cellProps} />;
        },
      },
      {
        Header: "Date",
        accessor: "pdate",
        filterable: true,
        Cell: cellProps => {
          return <Pdate {...cellProps} />;
        },
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: true,
        Cell: cellProps => {
          return <Type {...cellProps} />;
        },
      },
      {
        Header: "Currency",
        accessor: "coin",
        filterable: true,
        Cell: cellProps => {
          return <Value {...cellProps} />;
        },
      },
      {
        Header: "Value in USD",
        accessor: "valueInUsd",
        filterable: true,
        Cell: cellProps => {
          return <ValueInUsd {...cellProps} />;
        },
      },
    ],
    []
  );

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">Activities</h4>
        <ul className="nav nav-tabs nav-tabs-custom">
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "all",
              })}
              onClick={() => {
                toggleTab("all");
              }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "Buy",
              })}
              onClick={() => {
                toggleTab("Buy");
              }}
            >
              Buy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "Sell",
              })}
              onClick={() => {
                toggleTab("Sell");
              }}
            >
              Sell
            </NavLink>
          </NavItem>
        </ul>

        <div className="mt-4">
          <TableContainer
            columns={columns}
            data={productData}
            isGlobalFilter={true}
            customPageSize={10}
          />
        </div>
      </CardBody>
    </Card>
  );
};

WalletActivities.propTypes = {
  walletHistory: PropTypes.array,
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func,
};

export default WalletActivities;
