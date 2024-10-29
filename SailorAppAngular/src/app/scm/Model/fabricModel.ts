export interface PoEntity {
    po_no: string;
    pr_no: string;
    po_date: Date;
    supplier_name: string;
  
  }

  export const dynamicHeader=[
    { key: 'po_no', label: 'PO No' },
    { key: 'pr_no', label: 'PR No' },
    { key: 'po_date', label: 'PO Date' },
    { key: 'supplier_name', label: 'Supplier Name' }

  ]