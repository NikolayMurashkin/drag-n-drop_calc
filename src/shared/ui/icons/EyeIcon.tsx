import { SVGProps } from 'react';

export const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M11.768 11.768A2.5 2.5 0 1 0 8.23 8.232a2.5 2.5 0 0 0 3.537 3.536Z'
			stroke='#4D5562'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.048 10a8.337 8.337 0 0 1 15.904 0 8.336 8.336 0 0 1-15.904 0Z'
			stroke='#4D5562'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
