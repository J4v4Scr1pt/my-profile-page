import { component$ } from '@builder.io/qwik';
import {container} from './about-me.css';

export default component$(() => {
  return <div class={container}>
    <div >This is me! 😎</div>
  </div>
});