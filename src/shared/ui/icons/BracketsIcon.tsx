import { SVGProps } from 'react';

export const BracketsIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M7.5 13.333 4.167 10 7.5 6.667m5 0L15.833 10 12.5 13.333'
			stroke='#4D5562'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);