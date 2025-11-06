// HomeContent.jsx
export default function HomeContent() {
    return (
        <section style={{ marginTop: 32 }}>
            <h2>What is JSON Formatter?</h2>
            <p>
                JSON Formatter is a fast, privacy-friendly tool that prettifies, minifies, and validates JSON directly in your browser.
                No data leaves your device. Paste your JSON on the left, click “Format”, and copy the result instantly.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li>One-click pretty print & minify</li>
                <li>Strict validation with helpful error messages</li>
                <li>Keyboard shortcuts, drag-and-drop, and download to file</li>
                <li>Works offline after first load (PWA-friendly)</li>
            </ul>

            <h3>How to Use</h3>
            <ol>
                <li>Paste or drop your JSON into the editor.</li>
                <li>Click <em>Format</em> to beautify and validate.</li>
                <li>Copy, edit, or download your result.</li>
            </ol>

            <h3>Example</h3>
            <pre>{`{
  "name": "Jane Doe",
  "skills": ["react", "sql", "devops"],
  "profile": { "github": "janedoe", "stars": 1234 }
}`}</pre>

            <h3>FAQ</h3>
            <p><strong>Is my JSON uploaded?</strong> No—processing happens locally in your browser.</p>
            <p><strong>Can I minify?</strong> Yes, switch to Minify to compress output for production.</p>
            <p><strong>Errors?</strong> The validator points to the exact character/line for quick fixes.</p>
        </section>
    );
}
