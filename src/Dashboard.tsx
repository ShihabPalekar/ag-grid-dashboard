import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

import { employees } from "./employeesData.json";

export const Dashboard: React.FC = () => {
  const [rowData] = useState(employees);

  const columnDefs = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        sortable: true,
        filter: true,
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "firstName",
        headerName: "First Name",
        sortable: true,
        filter: true,
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "lastName",
        headerName: "Last Name",
        sortable: true,
        filter: true,
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "age",
        headerName: "Age",
        sortable: true,
        filter: "agNumberColumnFilter",
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "department",
        headerName: "Department",
        sortable: true,
        filter: true,
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "position",
        headerName: "Position",
        sortable: true,
        filter: true,
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "salary",
        headerName: "Salary ($)",
        sortable: true,
        filter: "agNumberColumnFilter",
        valueFormatter: (p) => (p.value ? p.value.toLocaleString() : "-"),
      },
      {
        field: "hireDate",
        headerName: "Hire Date",
        sortable: true,
        filter: "agDateColumnFilter",
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "location",
        headerName: "Location",
        sortable: true,
        filter: true,
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "performanceRating",
        headerName: "Performance",
        sortable: true,
        filter: "agNumberColumnFilter",
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "projectsCompleted",
        headerName: "Projects",
        sortable: true,
        filter: "agNumberColumnFilter",
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "isActive",
        headerName: "Active",
        sortable: true,
        filter: true,
        cellRenderer: (params: any) => {
          const isActive = params.value;
          return (
            <span style={{ color: isActive ? "green" : "red" }}>
              {isActive ? "Active" : "Inactive"}
            </span>
          );
        },
      },
      {
        field: "manager",
        headerName: "Manager",
        sortable: true,
        filter: true,
        valueFormatter: (p) => p.value ?? "-",
      },
      {
        field: "skills",
        headerName: "Skills",
        sortable: true,
        filter: true,
        cellRenderer: (p: any) => (p.value?.length ? p.value.join(", ") : "-"),
      },
    ],
    []
  );

  return (
    <div style={{ padding: "16px" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Employee Dashboard
      </h1>

      <div
        className="ag-theme-alpine"
        style={{ height: "85vh", width: "100%" }}
      >
        <AgGridReact
          theme="legacy"
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[5, 10, 15, 20]}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};
