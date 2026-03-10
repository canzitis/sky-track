import FlightCart from './FlightCart'
import { FLIGHTS } from './flight-list.data'

export default function FlightList() {
	return (
		<div className='absolute top-7 ml-7 w-sm space-y-4 md:ml-0 xl:top-20'>
			{FLIGHTS.map(flight => {
				return <FlightCart key={flight.aircraftReg} flight={flight} />
			})}
		</div>
	)
}
