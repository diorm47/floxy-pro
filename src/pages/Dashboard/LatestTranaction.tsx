import { isEmpty } from "lodash"
import PropTypes from "prop-types"
import { useEffect, useMemo, useState } from "react"
import "./dashboard.scss"

//redux
import { useDispatch, useSelector } from "react-redux"

import { Button, Card, CardBody } from "reactstrap"

import TableContainer from "../../components/Common/TableContainer"
import withRouter from "../../components/Common/withRouter"
import { getOrders as onGetOrders } from "../../store/actions"

import { latestTransaction } from "../../common/data/dashboard.js"
import EcommerceOrdersModal from "../Ecommerce/EcommerceOrders/EcommerceOrdersModal"

import {
  BillingName,
  Date,
  OrderId,
  PaymentMethod,
  PaymentStatus,
  Total,
} from "./LatestTranactionCol"

const LatestTranaction = () => {
  const dispatch = useDispatch()

  const orders = latestTransaction

  useEffect(() => {
    dispatch(onGetOrders())
  }, [dispatch])

  const [modal1, setModal1] = useState(false)
  const [orderList, setOrderList] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  const toggleViewModal = () => setModal1(!modal1)

  const columns = useMemo(
    () => [
      {
        Header: "Рассылка",
        filterable: true,
        accessor: "orderId",
        disableFilters: true,
        Cell: (cellProps: any) => {
          return <OrderId {...cellProps} />
        },
      },
      {
        Header: "Группа",
        accessor: "billingName",
        filterable: true,
        disableFilters: true,
        Cell: (cellProps: any) => {
          return <BillingName {...cellProps} />
        },
      },
      {
        Header: "Отправлено",
        accessor: "sent",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps: any) => {
          return <Date {...cellProps} />
        },
      },
      {
        Header: "В ожидании",
        accessor: "inPromise",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps: any) => {
          return <Date {...cellProps} />
        },
      },
      {
        Header: "Ботов в работе",
        accessor: "working",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps: any) => {
          return <Total {...cellProps} />
        },
      },
      {
        Header: "Ботов заблокировано",
        accessor: "blocked",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps: any) => {
          return <Total {...cellProps} />
        },
      },
      {
        Header: "Кол-во ответов",
        accessor: "countRess",
        disableFilters: true,
        Cell: (cellProps: any) => {
          return <PaymentMethod {...cellProps} />
        },
      },
      {
        Header: "Статистика",
        disableFilters: true,
        accessor: "view",
        Cell: (cellProps: any) => {
          return (
            <Button
              type="button"
              color="primary"
              className="btn-sm "
              onClick={toggleViewModal}
            >
              Узнать
            </Button>
          )
        },
      },
    ],
    []
  )

  useEffect(() => {
    if (orders && !orders.length) {
      onGetOrders()
    }
  }, [onGetOrders, orders])

  useEffect(() => {
    setOrderList(orders)
  }, [orders])

  useEffect(() => {
    if (!isEmpty(orders) && !!isEdit) {
      setOrderList(orders)
      setIsEdit(false)
    }
  }, [orders])

  return (
    <>
      <EcommerceOrdersModal
        isOpen={modal1}
        toggle={toggleViewModal}
      />
      <div className="dashboard_table">
        <Card>
          <CardBody>
            <div className="mb-4 h4 card-title">
              Контроль рассылок
            </div>
            <TableContainer
              columns={columns}
              data={orders}
              isGlobalFilter={true}
              isAddOptions={false}
              customPageSize={6}
              
            />
          </CardBody>
        </Card>
      </div>
    </>
  )
}

LatestTranaction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
}

export default withRouter(LatestTranaction)
