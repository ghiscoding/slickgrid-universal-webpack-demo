import { BindingEventService } from '@slickgrid-universal/binding';
import { type Column, type Formatter, type GridOption, type ItemMetadata } from '@slickgrid-universal/common';
import { ExcelExportService } from '@slickgrid-universal/excel-export';
import { Slicker, type SlickVanillaGridBundle } from '@slickgrid-universal/vanilla-bundle';

import { ExampleGridOptions } from './example-grid-options';
import './example33.scss';

const NB_ITEMS = 500;

const rowCellValueFormatter: Formatter = (row, cell, value) => {
  return `<div class="cellValue">${value.toFixed(2)}</div><div class="valueComment">${row}.${cell}</div>`;
};
const rowCellValueExportFormatter: Formatter = (_row, _cell, value) => {
  return value.toFixed(2);
};

export default class Example33 {
  private _bindingEventService: BindingEventService;
  columnDefinitions: Column[];
  dataLn: number | string = 0;
  gridOptions: GridOption;
  sgb: SlickVanillaGridBundle;
  gridContainerElm: HTMLDivElement;
  filteringEnabledClass = 'mdi mdi-toggle-switch';
  scrollToRow = 100;
  metadata: ItemMetadata | Record<number, ItemMetadata> = {
    0: {
      columns: {
        1: { rowspan: 3 },
      },
    },
    2: {
      columns: {
        0: { rowspan: 3 },
        3: { colspan: 3 },
      },
    },
    3: {
      columns: {
        1: { rowspan: 5, colspan: 1, cssClass: 'cell-var-span' },
        // 1: { rowspan: 3, colspan: 2, cssClass: "cell-var-span" },
        3: { rowspan: 3, colspan: 5 },
      },
    },
    8: {
      columns: {
        1: { rowspan: 80 },
        3: { rowspan: 1999, colspan: 2, cssClass: 'cell-very-high' },
      },
    },
    12: {
      columns: {
        11: { rowspan: 3 },
      },
    },
    15: {
      columns: {
        18: { colspan: 4, rowspan: 3 },
      },
    },
    85: {
      columns: {
        5: { rowspan: 20 },
      },
    },
  };

  constructor() {
    this._bindingEventService = new BindingEventService();
  }

  attached() {
    this.initializeGrid();
    this.loadData(NB_ITEMS);
    this.gridContainerElm = document.querySelector('.grid33') as HTMLDivElement;

    this.sgb = new Slicker.GridBundle(this.gridContainerElm, this.columnDefinitions, { ...ExampleGridOptions, ...this.gridOptions });

    document.body.classList.add('material-theme');
  }

  dispose() {
    this.sgb?.dispose();
    this._bindingEventService.unbindAll();
    document.body.classList.remove('material-theme');
  }

  initializeGrid() {
    this.columnDefinitions = [
      { id: 'title', name: 'Title', field: 'title', minWidth: 80 },
      {
        id: 'revenueGrowth',
        name: 'Revenue Growth',
        field: 'revenueGrowth',
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
        minWidth: 120,
      },
      {
        id: 'pricingPolicy',
        name: 'Pricing Policy',
        field: 'pricingPolicy',
        minWidth: 110,
        sortable: true,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'policyIndex',
        name: 'Policy Index',
        field: 'policyIndex',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'expenseControl',
        name: 'Expense Control',
        field: 'expenseControl',
        minWidth: 110,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'excessCash',
        name: 'Excess Cash',
        field: 'excessCash',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'netTradeCycle',
        name: 'Net Trade Cycle',
        field: 'netTradeCycle',
        minWidth: 110,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'costCapital',
        name: 'Cost of Capital',
        field: 'costCapital',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'revenueGrowth2',
        name: 'Revenue Growth',
        field: 'revenueGrowth2',
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
        minWidth: 120,
      },
      {
        id: 'pricingPolicy2',
        name: 'Pricing Policy',
        field: 'pricingPolicy2',
        minWidth: 110,
        sortable: true,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'policyIndex2',
        name: 'Policy Index',
        field: 'policyIndex2',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'expenseControl2',
        name: 'Expense Control',
        field: 'expenseControl2',
        minWidth: 110,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'excessCash2',
        name: 'Excess Cash',
        field: 'excessCash2',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'netTradeCycle2',
        name: 'Net Trade Cycle',
        field: 'netTradeCycle2',
        minWidth: 110,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'costCapital2',
        name: 'Cost of Capital',
        field: 'costCapital2',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'revenueGrowth3',
        name: 'Revenue Growth',
        field: 'revenueGrowth3',
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
        minWidth: 120,
      },
      {
        id: 'pricingPolicy3',
        name: 'Pricing Policy',
        field: 'pricingPolicy3',
        minWidth: 110,
        sortable: true,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'policyIndex3',
        name: 'Policy Index',
        field: 'policyIndex3',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'expenseControl3',
        name: 'Expense Control',
        field: 'expenseControl3',
        minWidth: 110,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'excessCash3',
        name: 'Excess Cash',
        field: 'excessCash3',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'netTradeCycle3',
        name: 'Net Trade Cycle',
        field: 'netTradeCycle3',
        minWidth: 110,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
      {
        id: 'costCapital3',
        name: 'Cost of Capital',
        field: 'costCapital3',
        minWidth: 100,
        exportCustomFormatter: rowCellValueExportFormatter,
        formatter: rowCellValueFormatter,
        type: 'number',
      },
    ];

    this.gridOptions = {
      enableCellNavigation: true,
      enableColumnReorder: true,
      enableHeaderMenu: false,
      enableCellRowSpan: true,
      gridHeight: 600,
      gridWidth: 900,
      rowHeight: 30,
      dataView: {
        globalItemMetadataProvider: {
          getRowMetadata: this.renderDifferentColspan.bind(this),
        },
      },
      enableExcelExport: true,
      externalResources: [new ExcelExportService()],
      rowTopOffsetRenderType: 'top', // rowspan doesn't render well with 'transform', default is 'top'
    };
  }

  clearScrollTo() {
    this.scrollToRow = 0;
    document.querySelector<HTMLInputElement>('#nRow')?.focus();
  }

  loadData(count: number) {
    this.dataLn = 'loading...';

    // add a delay just to show the "loading" text before it loads all data
    setTimeout(() => {
      // mock data
      const tmpArray: any[] = [];
      for (let i = 0; i < count; i++) {
        tmpArray[i] = {
          id: i,
          title: 'Task ' + i,
          revenueGrowth: Math.random() * Math.pow(10, Math.random() * 3),
          pricingPolicy: Math.random() * Math.pow(10, Math.random() * 3),
          policyIndex: Math.random() * Math.pow(10, Math.random() * 3),
          expenseControl: Math.random() * Math.pow(10, Math.random() * 3),
          excessCash: Math.random() * Math.pow(10, Math.random() * 3),
          netTradeCycle: Math.random() * Math.pow(10, Math.random() * 3),
          costCapital: Math.random() * Math.pow(10, Math.random() * 3),
          revenueGrowth2: Math.random() * Math.pow(10, Math.random() * 3),
          pricingPolicy2: Math.random() * Math.pow(10, Math.random() * 3),
          policyIndex2: Math.random() * Math.pow(10, Math.random() * 3),
          expenseControl2: Math.random() * Math.pow(10, Math.random() * 3),
          excessCash2: Math.random() * Math.pow(10, Math.random() * 3),
          netTradeCycle2: Math.random() * Math.pow(10, Math.random() * 3),
          costCapital2: Math.random() * Math.pow(10, Math.random() * 3),
          revenueGrowth3: Math.random() * Math.pow(10, Math.random() * 3),
          pricingPolicy3: Math.random() * Math.pow(10, Math.random() * 3),
          policyIndex3: Math.random() * Math.pow(10, Math.random() * 3),
          expenseControl3: Math.random() * Math.pow(10, Math.random() * 3),
          excessCash3: Math.random() * Math.pow(10, Math.random() * 3),
          netTradeCycle3: Math.random() * Math.pow(10, Math.random() * 3),
          costCapital3: Math.random() * Math.pow(10, Math.random() * 3),
        };
      }

      // let's keep column 3-4 as the row spanning from row 8 until the end of the grid
      this.metadata[8].columns[3].rowspan = tmpArray.length - 8;

      this.sgb?.dataView?.beginUpdate();
      this.sgb?.dataView?.setItems(tmpArray);
      this.sgb?.dataView?.endUpdate();
      this.dataLn = count;
    }, 20);
  }

  /**
   * A callback to render different row column span
   * Your callback will always have the "item" argument which you can use to decide on the colspan
   * Your return object must always be in the form of:: { columns: { [columnName]: { colspan: number|'*' } }}
   */
  renderDifferentColspan(_item: any, row: any): any {
    return this.metadata[row]?.attributes
      ? this.metadata[row]
      : (this.metadata[row] = { attributes: { 'data-row': row }, ...this.metadata[row] });
  }

  handleToggleSpans() {
    const cell = this.metadata[3].columns[1];
    if (cell.colspan === 1) {
      cell.rowspan = 3;
      cell.colspan = 2;
    } else {
      cell.rowspan = 5;
      cell.colspan = 1;
    }

    // row index 3 can have a rowspan of up to 5 rows, so we need to invalidate from row 3 + 5 (-1 because of zero index)
    // so: 3 + 5 - 1 => row indexes 3 to 7
    this.sgb.slickGrid?.invalidateRows([3, 4, 5, 6, 7]);
    this.sgb.slickGrid?.render();
  }

  handleScrollTo() {
    // const args = event.detail && event.detail.args;
    this.sgb.slickGrid?.scrollRowToTop(this.scrollToRow);
    return false;
  }
}
