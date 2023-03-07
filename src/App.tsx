import classNames from 'classnames/bind';

import styles from './App.module.scss';
import { Switcher } from './features/switcher/Switcher';
import { Display } from './features/display/Display';
import { Operators } from './features/operators/Operators';
import { Numbers } from './features/numbers/Numbers';

function App() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('calculator')}>
			<Switcher />
			<Display />
			<Operators />
			<Numbers />
		</section>
	);
}

export default App;
