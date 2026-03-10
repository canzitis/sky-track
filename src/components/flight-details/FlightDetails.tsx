import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { FLIGHTS } from '../flight-list/flight-list.data'
import { QUERY_PARAM_FLIGHT } from '../flight-list/flights.constants'

import { FlightActions } from './FlightActions'
import FlightHeader from './FlightHeader'
import FlightImage from './FlightImage'
import { FlightRoute } from './FlightRoute'
import { FlightSchedule } from './FlightSchedule'
import { FlightStatus } from './FlightStatus'
import { FlightInformation } from './FligjtInformation'

export default function FlightDetails() {
	const [searchParams] = useSearchParams()
	const selectFlight = searchParams.get(QUERY_PARAM_FLIGHT)
	const flight = useMemo(
		() => FLIGHTS.find(f => f.id === selectFlight),
		[selectFlight]
	)

	if (!flight) return null

	return (
		<aside className='bg-card-foreground absolute top-7 right-0 mr-7 w-sm rounded-xl xl:top-19'>
			<div
				className='h-70 rounded-t-xl p-5'
				style={{
					backgroundImage: `linear-gradient(to top, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`
				}}
			>
				<FlightHeader flight={flight} />
				<FlightImage flight={flight} />
			</div>

			<div className='p-2'>
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
	)
}
