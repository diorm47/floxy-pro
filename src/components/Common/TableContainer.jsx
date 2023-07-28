import PropTypes from "prop-types"
import React from "react"
import {
  useAsyncDebounce,
  useExpanded,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table"
import { Button, Col, Input, Row, Table } from "reactstrap"
import pageLeft from "../../assets/images/pag-left.svg"
import pageRight from "../../assets/images/pag-right.svg"
import { DefaultColumnFilter, Filter } from "./filters"

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <Col sm={4}>
      <div className="search-box me-2 mb-2 d-inline-block">
        <div className="position-relative">
          <label htmlFor="search-bar-0" className="search-label">
            <span id="search-bar-0-label" className="sr-only">
              Search this table
            </span>
            <input
              onChange={e => {
                setValue(e.target.value)
                onChange(e.target.value)
              }}
              id="search-bar-0"
              type="text"
              className="form-control"
              placeholder={`${count} records...`}
              value={value || ""}
            />
          </label>
          <i className="bx bx-search-alt search-icon"></i>
        </div>
      </div>
    </Col>
  )
}

const TableContainer = ({
  columns,
  data,
  isGlobalFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  className,
  customPageSizeOptions,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  )
  const generateSortingIndicator = column => {
    return column.isSorted
      ? column.isSortedDesc
        ? " 🔽"
        : " 🔼"
      : ""
  }

  const onChangeInSelect = event => {
    setPageSize(Number(event.target.value))
  }

  const onChangeInInput = event => {
    const page = event.target.value
      ? Number(event.target.value) - 1
      : 0
    gotoPage(page)
  }
  return (
    <>
      <Row className="mb-2">

        {isAddOptions && (
          <Col sm="11">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="11">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="11">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <div className="table-responsive react-table">
        <Table hover {...getTableProps()} className={className}>
          <thead className="table-light table-nowrap">
            {headerGroups.map(headerGroup => (
              <tr
                key={headerGroup.id}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map(column => (
                  <th key={column.id}>
                    <div
                      className="mb-2"
                      {...column.getSortByToggleProps()}
                    >
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </div>
                    <Filter column={column} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <React.Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map(cell => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </Table>
      </div>

      <Row className="justify-content-md-end justify-content-center align-items-center pagination_block">
        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            {/*<Button*/}
            {/*  color="primary"*/}
            {/*  onClick={() => gotoPage(0)}*/}
            {/*  disabled={!canPreviousPage}*/}
            {/*>*/}
            {/*  {"<<"}*/}
            {/*</Button>*/}
            <Button
              className="pagination_btn"
              color="primary"
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
            <img src={pageRight} alt="left chev" />
            </Button>
          </div>
        </Col>

        <Col className="col-md-auto d-none d-md-block">
          {pageOptions.map((item, key) => (
            <button
              className="pagination_btn"
              key={key}
              onChange={onChangeInInput}
            >
              {item + 1}
            </button>
          ))}
        </Col>

        {/* <Col className="col-md-auto">
          <Input
            type="number"
            min={1}
            style={{ width: 70 }}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={onChangeInInput}
          />
        </Col> */}

        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            <Button
              className="pagination_btn"
              color="primary"
              onClick={nextPage}
              disabled={!canNextPage}
            >
               <img src={pageLeft} alt="rigth chev" />
            </Button>
            {/*<Button*/}
            {/*  color="primary"*/}
            {/*  onClick={() => gotoPage(pageCount - 1)}*/}
            {/*  disabled={!canNextPage}*/}
            {/*>*/}
            {/*  {">>"}*/}
            {/*</Button>*/}
          </div>
        </Col>
      </Row>
    </>
  )
}

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default TableContainer
