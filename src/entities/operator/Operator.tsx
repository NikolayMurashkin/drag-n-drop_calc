import classNames from 'classnames/bind';

import styles from './Operator.module.scss';
import { IOperatorProps } from './Operator.props';

export const Operator: React.FC<IOperatorProps> = ({ operator }) => {
	const cx = classNames.bind(styles);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e.currentTarget.value);
	};
	return (
		<button
			className={cx('operator')}
			value={operator === 'X' ? '*' : operator}
			onClick={(e) => handleClick(e)}
		>
			{operator}
		</button>
	);
};
