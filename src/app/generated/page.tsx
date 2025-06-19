import React from "react";

export const metadata = {
  title: "Stay Hydrated, Save the Planet",
  description: "Discover our eco-friendly water bottles that help reduce plastic waste",
};

export default function GeneratedPage() {
  return (
    <main className="mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Stay Hydrated, Save the Planet
      </h1>
      <p className="text-lg mb-8">Discover our eco-friendly water bottles that help reduce plastic waste</p>
      <button className="bg-primary text-white px-6 py-3 rounded">
        Shop Now
      </button>

      <section className="mt-16 grid grid-cols-1 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Sustainable Design</h3>
          <p>Made from recycled materials to minimize environmental impact</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Durable and Leak-Proof</h3>
          <p>Perfect for on-the-go hydration without spills</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Stylish and Functional</h3>
          <p>Sleek designs that keep your drinks cold or hot for hours</p>
        </div>
      </section>
    </main>
  );
}
