import classNames from 'classnames/bind';
import { Operator } from '../../entities/operator/Operator';

import styles from './Operators.module.scss';

export const Operators = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('operators')} draggable={true}>
			<Operator operator='/' />
			<Operator operator='X' />
			<Operator operator='-' />
			<Operator operator='+' />
		</div>
	);
};
