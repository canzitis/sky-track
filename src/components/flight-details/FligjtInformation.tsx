import type { IFlight } from "@/types/flight.types";

export function FlightInformation({ flight }: { flight: IFlight }) {
  return (
    <div className="my-3.5">
      <div className="font-medium mb-1 bg-ring px-mini-element py-mini-element rounded-tl-xl rounded-tr-xl p-2 ">
        {/* <div className="font-medium mb-1 bg-neutral-700 px-mini-element py-mini-element rounded-tl-xl roun ded-tr-xl p-2"> */}
        Flight information
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card px-mini-element py-mini-element flex items-center justify-between px-3 py-2">
          <p>{flight.airplane.name}</p>
        </div>
        <div className="bg-card px-mini-element py-mini-element flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 py-2">
            <img
              src={`/flags/${flight?.airline.country.toLowerCase()}.svg`}
              alt={flight?.airline.country}
              width={24}
              height={18}
              className="inline-block mr-1"
            />
            <span>{flight.airline.country}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card px-mini-element py-mini-element flex items-center justify-between rounded-bl-xl px-3 py-2">
          <p className="text-muted-foreground">Speed</p>
          <p>870 km/h</p>
        </div>
        <div className="bg-card px-mini-element py-mini-element flex items-center justify-between rounded-br-xl px-3 py-2 gap-5">
          <p className="text-muted-foreground">Altitude</p>
          <p>11 300m</p>
        </div>
      </div>
    </div>
  );
}
