type Invoice={
    id:string,
    customer_id:string,
    amount:number,
    date:string,
    status:"pending"|"paid",
}
type Children={children:React.ReactNode}

type Revenue={
    month:string,
    revenue:number,
}

type User={
    id:string,
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    profile:string
}

type Customer={
    id:string,
    name:string,
    email:string,
    profile:string
}

type LatestInvoice = {
    id: string;
    name: string;
    profile: string;
    email: string;
    amount: string;
  };

  type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
    amount: number;
  };

  type InvoicesTable = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    profile: string;
    date: string;
    amount: number;
    status: 'pending' | 'paid';
  };

  type CustomersTable = {
    id: string;
    name: string;
    email: string;
    profile: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
  };
  
  export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    profile: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
  };
  
 type CustomerField = {
    id: string;
    name: string;
  };
  
 type InvoiceForm = {
    id: string;
    customer_id: string;
    amount: number;
    status: 'pending' | 'paid';
  };
  
  type Params={
    query: string,
    currentPage: number,
  }