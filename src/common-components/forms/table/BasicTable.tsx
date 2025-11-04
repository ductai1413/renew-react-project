import { GridSetting } from '@/types/GridSetting';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const BasicTable: React.FC<GridSetting> = ({ rowData, columnDefs, onRowClicked, ...props }) => {
  return (
    <>
      {/* The AG Grid component, with Row Data & Column Definition props */}
      <div style={props.style ?? { width: '100%', height: '100vh' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onRowClicked={e => onRowClicked?.(e.data)}
          pagination
          animateRows
          {...props}
        />
      </div>
    </>
  );
};

export default BasicTable;
