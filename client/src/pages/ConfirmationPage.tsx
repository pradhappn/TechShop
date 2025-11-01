import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-20 w-20 text-primary" data-testid="icon-success" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-success-title">
                Order Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-success-message">
                Thank you for your purchase. Your order has been received and is being processed.
              </p>
              <div className="bg-accent/30 rounded-lg p-6 mb-8">
                <p className="text-sm text-muted-foreground mb-2">Order Number</p>
                <p className="text-2xl font-bold" data-testid="text-order-number">#ORD-2024-001</p>
              </div>
              <div className="space-y-4 text-left mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span data-testid="text-conf-subtotal">$749.98</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary" data-testid="text-conf-shipping">FREE</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-semibold">
                  <span>Total</span>
                  <span data-testid="text-conf-total">$749.98</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6" data-testid="text-confirmation-email">
                A confirmation email has been sent to your email address with order details and tracking information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline" data-testid="button-continue-shopping">
                    Continue Shopping
                  </Button>
                </Link>
                <Button data-testid="button-view-order">View Order Details</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
