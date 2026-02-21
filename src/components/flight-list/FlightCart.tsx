import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "./flights.constants";
import { cn } from "../../utils/cn";
import type { IFlight } from "@/types/flight.types";

interface Props {
  flight: IFlight;
}
export default function FlightCart({ flight }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectFlight = searchParams.get(QUERY_PARAM_FLIGHT);

  const isActive = selectFlight === flight.id;

  return (
    <div
      className={cn(
        "rounded-md p-0.5 transition duration-600 ease-in-out",
        isActive
          ? "bg-gradient-to-r from-rose-500 to-orange-400"
          : "bg-transparent",
      )}
    >
      <button
        className={cn(
          "bg-card-foreground rounded-md p-4 block w-full h-full transition-colors duration-300 hover:bg-accent",
        )}
        onClick={() => {
          setSearchParams({ [QUERY_PARAM_FLIGHT]: flight.id });
        }}
      >
        <div className="flex text-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img
              src={flight.logo}
              alt={flight.airline.name}
              width={30}
              height={30}
              className="rounded-full bg-white"
            />
            <span className="">{flight.id}</span>
          </div>

          <div>
            <span className="bg-popover-foreground py-1 px-2 rounded-xl">
              {flight.aircraftReg}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <span>{flight.from.city}</span>
            <span className="text-3xl font-bold">{flight.from.code}</span>
          </div>
          <div>{/* <span>ПОЛОСА</span> */}</div>

          <div className="flex flex-col">
            <span>{flight.to.city}</span>
            <span className="text-3xl font-bold">{flight.to.code}</span>
          </div>
        </div>
      </button>
    </div>
  );
}
