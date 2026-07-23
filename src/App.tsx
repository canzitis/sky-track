import { useSearchParams } from 'react-router-dom'

import FlightDetails from './components/flight-details/FlightDetails'
import FlightList from './components/flight-list/FlightList'
import { QUERY_PARAM_FLIGHT } from './components/flight-list/flights.constants'
import FiltersButton from './components/providers/filters/FiltersButton'

export function Home() {
	const [searchParams] = useSearchParams()
	const selectFlight = searchParams.get(QUERY_PARAM_FLIGHT)

	return (
		<>
			<div className='absolute top-0 left-8'>
				<FiltersButton />
			</div>

			<FlightList />
			{selectFlight && <FlightDetails />}
		</>
	)
}
