import classNames from 'classnames/bind';

import styles from './Number.module.scss';
import { INumberProps } from './Number.props';

export const Number: React.FC<INumberProps> = ({ number }) => {
	const cx = classNames.bind(styles);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e.currentTarget.value);
	};
	return (
		<button
			className={cx('number')}
			value={number === ',' ? '.' : number}
			onClick={(e) => handleClick(e)}
		>
			{number}
		</button>
	);
};
