import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import { FLIGHTS } from "../flight-list/flight-list.data";
import { useMemo } from "react";
import FlightHeader from "./FlightHeader";
import FlightImage from "./FlightImage";

import { FlightRoute } from "./FlightRoute";
import { FlightStatus } from "./FlightStatus";
import { FlightSchedule } from "./FlightSchedule";
import { FlightInformation } from "./FligjtInformation";
import { FlightActions } from "./FlightActions";

export default function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const flight = useMemo(
    () => FLIGHTS.find((f) => f.id === selectFlight),
    [selectFlight],
  );

  if (!flight) return null;

  return (
    <aside className="absolute right-0 top-7 mr-7 bg-card-foreground w-120 rounded-xl">
      <div
        className="h-70 rounded-t-xl p-5"
        style={{
          backgroundImage: `linear-gradient(to top, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
        }}
      >
        <FlightHeader flight={flight} />
        <FlightImage flight={flight} />
      </div>

      <div className="p-5">
        <FlightRoute flight={flight} />
        <FlightStatus flight={flight} />
        <FlightSchedule flight={flight} />
        <FlightInformation flight={flight} />
        <FlightActions
          onRoute={() => {}}
          onFollow={() => {}}
          onShare={() => {}}
          onMore={() => {}}
        />
      </div>
    </aside>
  );
}
