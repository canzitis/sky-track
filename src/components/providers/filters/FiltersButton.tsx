import { SlidersHorizontal } from '@/components/animate-ui/icons/sliders-horizontal'

export default function FiltersButton() {
	return (
		<div>
			<button>
				<SlidersHorizontal className='h-4 w-4' animateOnHover />
			</button>
		</div>
	)
}
