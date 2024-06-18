import { Aggregator } from '@slickgrid-universal/common';
import { GroceryItem } from './example23';

/** Create a Custom Aggregator in order to calculate all Totals by accessing other fields of the item dataContext */
export class CustomSumAggregator implements Aggregator {
  private _sum = 0;
  private _type = 'sum' as const;

  constructor(public readonly field: number | string, public taxRate: number) { }

  get type(): string {
    return this._type;
  }

  init() {
    this._sum = 0;
  }

  accumulate(item: GroceryItem) {
    if (this.field === 'taxes' && item['taxable']) {
      this._sum += item['price'] * item['qty'] * (this.taxRate / 100);
    }
    if (this.field === 'subTotal') {
      this._sum += item['price'] * item['qty'];
    }
    if (this.field === 'total') {
      let taxes = 0;
      if (item['taxable']) {
        taxes = item['price'] * item['qty'] * (this.taxRate / 100);
      }
      this._sum += item['price'] * item['qty'] + taxes;
    }
  }

  storeResult(groupTotals: any) {
    if (!groupTotals || groupTotals[this._type] === undefined) {
      groupTotals[this._type] = {};
    }
    groupTotals[this._type][this.field] = this._sum;
  }
}