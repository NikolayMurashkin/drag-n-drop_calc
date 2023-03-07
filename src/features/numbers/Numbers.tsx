import classNames from 'classnames/bind';

import styles from './Numbers.module.scss';
import { Number } from './../../entities/number/Number';

export const Numbers = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('numbers')} draggable={true}>
			<Number number={7}/>
			<Number number={8}/>
			<Number number={9}/>
			<Number number={4}/>
			<Number number={5}/>
			<Number number={6}/>
			<Number number={1}/>
			<Number number={2}/>
			<Number number={3}/>
			<Number number={0}/>
			<Number number={','}/>
		</div>
	);
};