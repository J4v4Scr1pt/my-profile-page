import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/footer/footer';
import { Header } from '~/components/header/header';
import { container, mainContent } from './layout.css';

export default component$(() => {
	return (
		<div class={container}>
			<Header />
			<div class={mainContent}>
				<Slot />
			</div>
			<Footer />
		</div>
	);
});
