import { useParams } from "react-router";
import { motorcycles } from "@/data/motorcycle.ts";

export default function MotorcycleDetails() {
  const { id } = useParams();

  const bike = motorcycles.find((m) => m.id === Number(id));

  if (!bike) {
    return <h1>Motorcycle not found.</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto p-10">

      <img
        src={bike.image}
        alt={bike.model}
        className="w-full rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {bike.brand} {bike.model}
      </h1>

      <p className="text-2xl text-green-600 font-bold">
        {bike.price}
      </p>

      <div className="mt-8 space-y-3">

        <p>
          <strong>Engine:</strong> {bike.engine}
        </p>

        <p>
          <strong>Transmission:</strong> {bike.transmission}
        </p>

        <p>
          <strong>Fuel Capacity:</strong> {bike.fuelCapacity}
        </p>

        <p>
          <strong>Color:</strong> {bike.color}
        </p>

        <p>
          <strong>Description:</strong> {bike.description}
        </p>

      </div>

    </div>
  );
}