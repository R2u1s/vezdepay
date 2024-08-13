import ky from 'ky';

const api = ky.create({
  prefixUrl: 'https://nicepay.io/public/api/payment',
  timeout: 60000,
});

export interface PaymentResponse {
  status: string,
  data: {
      payment_id?: string,
      amount?: number,
      currency?: string,
      link?: string,
      expired?: string,
      message?: string
  }
}

interface PaymentPayload {
  merchant_id: string;
  secret: string;
  order_id: string;
  account: string;
  amount: number;
  currency: string;
  description: string;
  customer: string;
}

export const postPayment = async (): Promise<PaymentResponse> => {
  const payload: PaymentPayload = {
    merchant_id: "657b475da365fbeb3e5cfaf6",
    secret: "igDNT-tMppx-heMLB-Xjuw5-HIrdF",
    order_id: "100423",
    account: "user@gmail.com",
    amount: 3540,
    currency: "USD",
    description: "Top up balance on website",
    customer: "customer"
  };

  return await api.post('',{ json: payload }).json<PaymentResponse>();
};