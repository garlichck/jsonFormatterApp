// CommonJsonErrors.jsx
export default function CommonJsonErrors() {
    return (
        <main className="container" style={{ padding: "2rem", lineHeight: 1.6 }}>
            <h1>Common JSON Errors and How to Fix Them</h1>
            <p>
                When you work with JSON regularly, you will eventually see error
                messages like <code>Unexpected token</code> or{" "}
                <code>Unexpected end of JSON input</code>. These messages can look
                confusing, but in most cases the root cause is a small typo such as a
                missing comma or quote.
            </p>

            <h2>1. Missing or Extra Commas</h2>
            <p>
                The most frequent JSON error is forgetting a comma between items, or
                leaving a trailing comma at the end of an object or array.
            </p>
            <p>Invalid JSON (missing comma):</p>
            <pre>{`{
  "name": "Jane",
  "age": 28
  "city": "Kuala Lumpur"
}`}</pre>
            <p>Valid JSON:</p>
            <pre>{`{
  "name": "Jane",
  "age": 28,
  "city": "Kuala Lumpur"
}`}</pre>

            <h2>2. Using Single Quotes Instead of Double Quotes</h2>
            <p>
                JSON requires double quotes around property names and string values.
                This is different from JavaScript, where single quotes are allowed.
            </p>
            <p>Invalid JSON:</p>
            <pre>{`{
  'name': 'Jane'
}`}</pre>
            <p>Valid JSON:</p>
            <pre>{`{
  "name": "Jane"
}`}</pre>

            <h2>3. Trailing Commas</h2>
            <p>
                Trailing commas after the last element in an array or object are not
                allowed in JSON.
            </p>
            <p>Invalid JSON:</p>
            <pre>{`{
  "name": "Jane",
  "age": 28,
}`}</pre>
            <p>Valid JSON:</p>
            <pre>{`{
  "name": "Jane",
  "age": 28
}`}</pre>

            <h2>4. Unescaped Characters in Strings</h2>
            <p>
                Special characters inside strings, such as new lines or quotes, may need
                to be escaped with a backslash.
            </p>
            <p>Invalid JSON:</p>
            <pre>{`{
  "note": "Line 1
Line 2"
}`}</pre>
            <p>Valid JSON:</p>
            <pre>{`{
  "note": "Line 1\nLine 2"
}`}</pre>

            <h2>5. Unexpected End of JSON Input</h2>
            <p>
                This error usually means the parser reached the end of the string before
                it found all the closing brackets or quotes it expected.
            </p>
            <p>Example of invalid JSON:</p>
            <pre>{`{
  "name": "Jane",
  "skills": ["react", "sql"
}`}</pre>
            <p>Here, the array and object are not properly closed.</p>
            <p>Valid JSON:</p>
            <pre>{`{
  "name": "Jane",
  "skills": ["react", "sql"]
}`}</pre>

            <h2>6. How to Debug JSON Errors Efficiently</h2>
            <ul>
                <li>
                    Start from the line and character mentioned in the error message and
                    look a few lines above as well.
                </li>
                <li>
                    Compare your JSON with a known good example that has a similar
                    structure.
                </li>
                <li>
                    Use a formatter or validator (like the tool on this site) to help you
                    quickly spot where the structure breaks.
                </li>
                <li>
                    If the JSON comes from an API, log the raw response before parsing so
                    you can inspect exactly what was returned.
                </li>
            </ul>

            <h2>Use the Formatter to Catch Issues</h2>
            <p>
                The JSON Formatter on this site validates your input while formatting it
                for readability. If there is a problem, it will show a clear error
                message so you know where to start looking. Paste your JSON, click
                <strong> Format JSON</strong>, and fix any issues highlighted by the
                validator.
            </p>

            <p>
                Once your JSON is valid, you can minify it for production or keep it
                pretty-printed for debugging and documentation.
            </p>
        </main>
    );
}
