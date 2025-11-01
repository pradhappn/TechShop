import { CheckoutForm } from '../CheckoutForm';

export default function CheckoutFormExample() {
  return (
    <CheckoutForm
      cartTotal={749.98}
      onSubmit={(data) => console.log('Order placed:', data)}
    />
  );
}
