import classNames from 'classnames/bind';

import styles from './Switcher.module.scss';
import { SwitcherButton } from './../../shared/ui/switcherButton/SwitcherButton';
import { EyeIcon } from '../../shared/ui/icons/EyeIcon';
import { BracketsIcon } from '../../shared/ui/icons/BracketsIcon';

export const Switcher = () => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('switcher')}>
			<SwitcherButton icon={<EyeIcon />} text={'Runtime'} />
			<SwitcherButton icon={<BracketsIcon />} text={'Constructor'} />
		</div>
	);
};
