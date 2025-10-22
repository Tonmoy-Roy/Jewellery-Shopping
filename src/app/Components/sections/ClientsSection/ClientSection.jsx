import React from "react";
import { clientSeyList } from "@/app/constants/ClientSeyList";
import Header from "./Components/Header";
import Card from "./Components/Card";

export default function ClientSection() {
  return (
    <section className=" py-12  bg-base-200">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {clientSeyList.map((client) => (
          <Card key={client.id} client={client} />
        ))}
      </div>
    </section>
  );
}
