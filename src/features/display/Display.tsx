import classNames from 'classnames/bind';
import { useAppSelector } from '../../hooks/redux-hooks';

import styles from './Display.module.scss';
import { IDisplayProps } from './Display.props';

export const Display: React.FC<IDisplayProps> = () => {
	const cx = classNames.bind(styles);

	const number = useAppSelector((state) => state.display.value);

	return (
		<div className={cx('display')} draggable={true}>
			<span className={cx('diplay__content')}>{number}</span>
		</div>
	);
};
