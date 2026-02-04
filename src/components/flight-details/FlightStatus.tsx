import type { IFlight } from "@/types/flight.types";

export function FlightStatus({ flight }: { flight: IFlight }) {
  return (
    <div className="bg-card px-element py-element mb-1 p-3">
      <div>---------------------------------</div>

      <div className="flex justify-between text-sm opacity-50">
        <div>
          <span>2 715 km</span>
          <span className="mx-2">•</span>
          <span>3h 1m</span>
        </div>
        <div>
          <span>882 km</span>
          <span className="mx-2">•</span>
          <span>59 min</span>
        </div>
      </div>
    </div>
  );
}
