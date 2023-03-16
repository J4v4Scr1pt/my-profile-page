import { component$,  } from '@builder.io/qwik';

export default component$(() => {
  // useStylesScoped$(styles);

  return (
    <header>
      <div class="logo bg-red-700">
        <a href="https://qwik.builder.io/" target="_blank" title="qwik" rel="noopener">
        </a>
      </div>
      <ul>
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
