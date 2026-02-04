import { X } from "../animate-ui/icons/x";
import { useSearchParams } from "react-router-dom";
import type { IFlight } from "@/types/flight.types";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";

export default function FlightHeader({ flight }: { flight: IFlight }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="flex justify-between items-center w-full py-2 px-4 rounded-xl bg-neutral-900">
      <div className="flex flex-col">
        <span className="text-amber-300">{flight?.id}</span>
        <span>{flight?.airline.name}</span>
      </div>
      <button
        className="w-6 h-6 bg-neutral-800 rounded-xl hover:bg-neutral-700"
        onClick={() => {
          searchParams.delete(QUERY_PARAM_FLIGHT);
          setSearchParams(searchParams);
        }}
      >
        <X animateOnHover animateOnTap size={24} />
      </button>
    </div>
  );
}
