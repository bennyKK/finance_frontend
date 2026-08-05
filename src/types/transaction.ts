export interface Transaction {
    id: number;
    booking_date: string;
    description: string | null;
    amount: number;
    currency_id: string;
    project_id: string | null;
    is_paid: boolean;
    account_credit_id: string;
    account_debit_id: string;
}

export interface TransactionFilters {
    account_id?: number;
    from_date?: string;
    to_date?: string;
    project_id?: number;
    description?: string;
    currency_id?: number;
    is_paid?: boolean;
    security_id?: number;
}

export interface TransactionCreate {
    booking_date: string;
    description?: string | null;
    amount: number;
    currency_id: number;
    project_id: number | null;
    is_paid: boolean;
    account_credit_id: number;
    account_debit_id: number;
    planned_payment_id?: number | null;
    transaction_template_id?: number | null;
    from_monthly_closing_id?: number | null;
    security_id?: number | null;
}

export type SortOption =
    | 'booking_date_desc'
    | 'booking_date_asc'
    | 'amount_desc'
    | 'amount_asc'
    | 'project_desc'
    | 'project_asc';