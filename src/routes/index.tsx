import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
   <div>
    hello there
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to My Profile Page',
  meta: [
    {
      name: 'my profile page',
      content: 'this is me',
    },
  ],
};
