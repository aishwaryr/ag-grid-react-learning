export default function carData() {
  return {
    colDefs: [
      {
        headerName: "#",
        field: "hash",
        pinned: true,
        width: 55,
        cellRenderer: "Expand",
        cellRendererParams: ["apple", "orange"]
      },
      {
        headerName: "Make",
        field: "make",
        editable: true,
        pinned: "left",
        rowDrag: true
      },
      {
        headerName: "Model",
        field: "model",
        editable: true,
        pinned: "left"
      },
      {
        headerName: "Price",
        field: "price",
        editable: true
      },
      {
        headerName: "Category",
        field: "category",
        editable: true,
        cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          values: ["sports", "general", "luxury sports", "luxury"]
        }
      },
      {
        headerName: "Origin",
        field: "origin",
        editable: true
      },
      {
        headerName: "Services",
        field: "services",
        editable: true,
        cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          values: ["bad", "ok", "good", "excellent"]
        }
      }
    ],
    rowData: [
      {
        hash: "###",
        make: "Toyota",
        model: "Celica",
        price: 35000,
        category: "sports",
        origin: "Japan",
        services: "good"
      },
      {
        hash: "###",
        make: "Ford",
        model: "Mondeo",
        price: 32000,
        category: "general",
        origin: "USA",
        services: "good"
      },
      {
        hash: "###",
        make: "Porsche",
        model: "Boxter",
        price: 72000,
        category: "luxury sports",
        origin: "Germany",
        services: "good"
      },
      {
        hash: "###",
        make: "Mercedes",
        model: "C Class",
        price: 172000,
        category: "luxury",
        origin: "Germany",
        services: "good"
      }
    ]
  };
}
