import { FLIGHTS } from "./flight-list.data";
import FlightCart from "./FlightCart";

export default function FlightList() {
  return (
    <div className="w-sm m-7 space-y-4">
      {FLIGHTS.map((flight) => {
        return <FlightCart key={flight.aircraftReg} flight={flight} />;
      })}
    </div>
  );
}
