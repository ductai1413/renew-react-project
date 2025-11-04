import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { PageContent } from '@/modules';
import type { ColDef, ValueGetterParams } from 'ag-grid-community';
import { GridSetting } from '@/types/GridSetting';
import { PageMetadata } from '@/common-components';
import PageBreadcrumb from '@/common-components/PageBreadcrumb';

const BasicTable = lazy(() => import('@/common-components/forms/table/BasicTable'));

function hashValueGetter(params: ValueGetterParams) {
  return params.node ? Number(params.node.id) : null;
}

const ProductList: React.FC = () => {
  const [rowData, setRowData] = useState([]);
  // Column Definitions: Defines & controls grid columns.
  const colDefs = useMemo<ColDef[]>(
    () => [
      {
        headerName: 'ID',
        maxWidth: 70,
        valueGetter: hashValueGetter,
      },
      { field: 'mission', filter: true },
      { field: 'company' },
      { field: 'location' },
      { field: 'date' },
      {
        field: 'price',
        valueFormatter: params => {
          return '£' + params.value.toLocaleString();
        },
      },
      { field: 'successful' },
      { field: 'rocket' },
    ],
    [],
  );

  const tableSetting: GridSetting = {
    pagination: true,
    paginationPageSize: 20,
    paginationPageSizeSelector: [20, 50, 100, 500],
    columnDefs: colDefs,
    rowData: rowData,
  };

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
      .then(result => result.json()) // Convert to JSON
      .then(rowData => setRowData(rowData)); // Update state of `rowData`
  }, []);

  return (
    <>
      <PageMetadata title="Product management" description="Product management page" />
      <PageBreadcrumb title="Product management" />

      <PageContent>
        <Suspense fallback={<p>Loading table...</p>}>
          <BasicTable {...tableSetting} />
        </Suspense>
      </PageContent>
    </>
  );
};

export default ProductList;
