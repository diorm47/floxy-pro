import React from "react"

import DataTable from "react-data-table-component"

const FilterComponent = () => {
  return (
    <>
      <input
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        className="sc-hiSbEG hkzDkf"
        defaultValue=""
      />
    </>
  )
}
const columns = [
  {
    name: "Title",
    selector: row => row.title,
  },
  {
    name: "Year",
    selector: row => row.year,
  },
]

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 3,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 4,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 5,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 6,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 7,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 8,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 9,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 10,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 11,
    title: "Ghostbusters",
    year: "1984",
  },
]

function Demo() {
  const [filterText, setFilterText] = React.useState("")
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false)
  // const filteredItems = fakeUsers.filter(
  //     item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  // );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText("")
      }
    }

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])
  return (
    <div className="page-content">
      <DataTable
        columns={columns}
        data={data}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
      />
    </div>
  )
}
export default Demo
