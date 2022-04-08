import tsMessage from 'shared/ts-message';
import jsMessage from '@architect/shared/js-message';

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <h1>Welcome to Remix!</h1>
        <h2>Running on Architect</h2>
        <p><code>{tsMessage()}</code></p>
        <p><code>{jsMessage()}</code></p>
      </main>
    </div>
  );
}
