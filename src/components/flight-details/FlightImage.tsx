import type { IFlight } from "@/types/flight.types";

export default function FlightImage({ flight }: { flight: IFlight }) {
  return (
    <img
      src={flight?.airplane.image}
      alt={flight?.airplane.name}
      className="py-5 bg-linear-to-r p-5"
    />
  );
}
