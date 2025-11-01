import { Header } from "@/components/Header";
import { CheckoutForm, type CheckoutFormData } from "@/components/CheckoutForm";
import { Footer } from "@/components/Footer";
import { useLocation } from "wouter";

export default function CheckoutPage() {
  const [, setLocation] = useLocation();

  const handleSubmit = (formData: CheckoutFormData) => {
    console.log("Order submitted:", formData);
    setLocation("/confirmation");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={2} />

      <main className="flex-1">
        <CheckoutForm cartTotal={749.98} onSubmit={handleSubmit} />
      </main>

      <Footer />
    </div>
  );
}
