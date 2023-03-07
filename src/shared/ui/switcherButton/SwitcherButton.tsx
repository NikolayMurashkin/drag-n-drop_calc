import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';

import styles from './SwitcherButton.module.scss';
import { ISwitcherButtonProps } from './SwitcherButton.props';
import { toggleSwitcher } from '../../../store/switcherSlice';

export const SwitcherButton: React.FC<ISwitcherButtonProps> = ({
	text,
	icon
}) => {
	const cx = classNames.bind(styles);

	const dispatch = useAppDispatch();
	const switcher = useAppSelector((state) => state.switcher.value);

	const hanldeSwitch = () => {
		dispatch(toggleSwitcher(text));
	};

	return (
		<button
			className={cx('button', {
				active: switcher === text,
			})}
			onClick={hanldeSwitch}
		>
			<span className={cx('button__icon')}>{icon}</span>
			<span className={cx('button__text')}>{text}</span>
		</button>
	);
};
