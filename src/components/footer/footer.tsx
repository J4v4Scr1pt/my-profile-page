import { component$ } from '@builder.io/qwik';
import {container} from './footer.css';

export const Footer = component$(() => {
  return <footer class={container}>Hello There!</footer>
});