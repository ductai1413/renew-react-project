import type { ColDef } from 'ag-grid-community';
import { CSSProperties } from 'react';

export type GridSetting = {
  pagination?: true;
  paginationPageSize?: number;
  paginationPageSizeSelector?: number[];
  style?: CSSProperties;

  columnDefs: ColDef[];
  rowData: unknown[];
  onRowClicked?: (data: unknown) => void;
};
