"use client";

import React, { useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "userId", headerName: "User ID", width: 150, editable: true },
  { field: "title", headerName: "Title", width: 150, editable: true },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    editable: true,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 150,
    editable: true,
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 150,
    editable: true,
  },
];

const EditableDataGrid = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/chart");
      setRows(response.data);
    } catch (error) {
      console.error("Failed to get data", error);
    }
  };

  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          experimentalFeatures={{}}
        />
      </div>
      <button onClick={fetchData} className="btn">
        GET ALL USEREVENTS
      </button>
    </div>
  );
};

export default EditableDataGrid;
