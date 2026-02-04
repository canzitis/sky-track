import type { IFlight } from "@/types/flight.types";

export function FlightSchedule({ flight }: { flight: IFlight }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card p-mini-element flex items-center justify-between px-3 py-2">
          <p className="text-muted-foreground">Scheduled</p>
          <p>08:15</p>
        </div>
        <div className="bg-card p-mini-element flex items-center justify-between px-3 py-2">
          <p className="text-muted-foreground">Actual</p>
          <p>08:24</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card p-mini-element flex items-center justify-between rounded-bl-xl px-3 py-2">
          <p className="text-muted-foreground">Scheduled</p>
          <p>08:24</p>
        </div>
        <div className="bg-card p-mini-element flex items-center justify-between rounded-br-xl px-3 py-2">
          <p className="text-muted-foreground">Estimated</p>
          <p>13:23</p>
        </div>
      </div>
    </div>
  );
}
