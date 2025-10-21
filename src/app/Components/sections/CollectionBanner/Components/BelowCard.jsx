import React from "react";

export default function BelowCard() {
  return (
    <section className="border-t border-gray-200 py-8 grid grid-cols-1 md:grid-cols-4 text-center px-4 gap-6 text-sm">
      <div>
        <h4 className="font-semibold mb-1">🚚 Complimentary Shipping</h4>
        <p>Free complimentary shipping on all orders.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-1">💎 Stylist At Your Service</h4>
        <p>Our client care experts are here to assist you.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-1">📅 Book An Appointment</h4>
        <p>Enjoy in-store or virtual appointments at your convenience.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-1">🎁 The Iconic Blue Box</h4>
        <p>Your purchase comes wrapped in our signature packaging.</p>
      </div>
    </section>
  );
}
