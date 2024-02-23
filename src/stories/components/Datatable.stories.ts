import { Datatable } from "@/components/Datatable"

export default {
  title: "Design System/components/Datatable",
  component: Datatable,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "array" },
    rows: { control: "array" },
    pageable: { control: "boolean" },
    pageNumber: { control: "number" },
    totalPages: { control: "number" },
    onChangePage: { control: "function" },
    headerPosition: { control: "select", options: ["start", "center"], default: "start" }
  }
}
export const Initial = {
  args: {
    columns: [
      { key: "year", label: "Year" },
      { key: "winCount", label: "Win Count" }
    ],
    rows: [
      { year: "1986", winCount: 2 },
      { year: "1990", winCount: 2 },
      { year: "2015", winCount: 2 }
    ]
  }
}

export const Pageable = {
  args: {
    columns: [
      { key: "year", label: "Year" },
      { key: "winCount", label: "Win Count" }
    ],
    rows: [
      { year: "1986", winCount: 2 },
      { year: "1990", winCount: 2 },
      { year: "2015", winCount: 2 }
    ],
    pageable: true,
    pageNumber: 0,
    totalPages: 1,
    headerPosition: "center"
  }
}

let year = ""

export const Filterable = {
  args: {
    columns: [
      {
        key: "year",
        label: "Year",
        filter: {
          type: "input",
          placeholder: "Filter by Year",
          onSetNewValue: (value: string) => (year = value),
          value: year
        }
      },
      { key: "winCount", label: "Win Count" }
    ],
    rows: [
      { year: "1986", winCount: 2 },
      { year: "1990", winCount: 2 },
      { year: "2015", winCount: 2 }
    ]
  }
}
