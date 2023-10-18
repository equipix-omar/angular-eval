export class BillingAddress {
    zip!: string;
    city!: string;
    state!: string;
    address_line1!: string;
    full_address!: string;
    address_line2!: string | null;
  }

export  class Order {
    id!: number;
    delivery_price!: number;
    tax_value!: number;
    tax_rate!: number;
    total_price!: number;
    final_total_price!: number;
    billing_address!: BillingAddress;
    payment_order_id!: string;
    deliver!: boolean;
    card_name!: string;
    card_number!: string;
    is_paid!: boolean;
  }

export class Review {
    id!: number;
    public_message!: string;
    private_message!: string;
    rent_again!: boolean;
    rate!: number;
    order!: Order;
    vendor!: any | null; // You can replace 'any' with the actual type for vendor data
  }

export  class Pagination {
    current_page!: number;
    first_page_url!: string;
    from!: number;
    last_page!: number;
    last_page_url!: string;
    next_page_url!: string | null;
    path!: string;
    per_page!: number;
    prev_page_url!: string | null;
    to!: number;
    total!: number;
  }

  export class ReviewModel{
    message!: any[]; // You can replace 'any[]' with the actual type for message
    body!: Review[];
    pagination!: Pagination;
  }

