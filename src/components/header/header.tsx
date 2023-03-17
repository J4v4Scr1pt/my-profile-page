import { component$,  } from '@builder.io/qwik';

export default component$(() => {
  // useStylesScoped$(styles);

  return (
    <header class="flex flex-row justify-between items-center bg-red-700">
      <div class="grow-[2]">
        <a href="https://qwik.builder.io/" target="_blank" title="qwik" rel="noopener">
          Go
        </a>
      </div>
      <ul class="flex flex-row grow justify-around">
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
            rel="noopener"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
            rel="noopener"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
            rel="noopener"
          >
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
