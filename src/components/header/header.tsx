import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { container } from './header.css';

export const Header = component$(() => {
	return (
		<header class={container}>
			<div>
				<Link href="/">Go</Link>
			</div>
			<ul class="flex flex-row grow justify-around">
				<li>
					<Link href="/about-me">About Me</Link>
				</li>
			</ul>
		</header>
	);
});
