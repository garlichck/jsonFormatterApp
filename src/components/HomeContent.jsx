// HomeContent.jsx
export default function HomeContent() {
    return (
        <section
            style={{
                marginTop: 32,
                maxWidth: 900,
                marginInline: "auto",
                lineHeight: 1.6,
            }}
        >
            <h2>Understand JSON in a Few Minutes</h2>
            <p>
                JSON (JavaScript Object Notation) is a lightweight format for storing
                and exchanging data. You will see it everywhere – in REST APIs,
                configuration files, logs, front-end apps, and even mobile apps.
                Because JSON is designed to be both machine-readable and human-readable,
                having it properly formatted makes a huge difference when you are
                debugging or reviewing data.
            </p>

            <p>
                <strong>JSON Formatter</strong> helps you quickly turn messy JSON into
                something you can read and trust. All processing happens directly in
                your browser, so your data never leaves your device. Paste JSON in the
                left panel, click <strong>Format JSON</strong>, and copy clean output
                from the right panel in seconds.
            </p>

            <h3>Why Formatting JSON Matters</h3>
            <ul>
                <li>
                    <strong>Debugging:</strong> Pretty-printed JSON makes it easy to spot
                    missing commas, extra brackets, and wrong field values.
                </li>
                <li>
                    <strong>Code reviews:</strong> Clean JSON is easier to reason about
                    when you are reviewing API responses or request bodies with your team.
                </li>
                <li>
                    <strong>Production vs. development:</strong> You can format JSON while
                    developing, then minify it for production to reduce payload size.
                </li>
                <li>
                    <strong>Logging:</strong> Nicely formatted JSON logs are much easier
                    to search and filter.
                </li>
            </ul>

            <h3>How to Use This JSON Formatter</h3>
            <ol>
                <li>Paste or type your JSON into the left text area.</li>
                <li>
                    Click <strong>Format JSON</strong> to pretty-print and validate it.
                </li>
                <li>
                    If there is an error, you will see a helpful message telling you what
                    went wrong.
                </li>
                <li>
                    Switch to <strong>Minify</strong> to compress the JSON into a single
                    line for production use.
                </li>
                <li>
                    Use the buttons to <strong>Copy</strong>, <strong>Download</strong>,
                    or <strong>Clear</strong> the result.
                </li>
            </ol>

            <h3>Example of Well-Formatted JSON</h3>
            <pre>{`{
  "name": "Jane Doe",
  "age": 28,
  "skills": ["react", "sql", "devops"],
  "active": true,
  "profile": {
    "github": "janedoe",
    "stars": 1234
  }
}`}</pre>

            <h3>Common JSON Mistakes</h3>
            <p>
                If the validator shows an error, it is usually caused by one of these
                common issues:
            </p>
            <ul>
                <li>Missing or extra commas between items in an object or array.</li>
                <li>
                    Using single quotes instead of double quotes around property names or
                    string values.
                </li>
                <li>Trailing commas after the last item in an array or object.</li>
                <li>Unescaped special characters inside strings.</li>
            </ul>
            <p>
                When you see an error message like{" "}
                <code>Unexpected token</code> or <code>Unexpected end of JSON input</code>,
                it usually means there is a small typo such as a missing bracket or
                comma. Scroll to the approximate position shown in the message and
                compare the structure with a valid example.
            </p>

            <h3>Learn More About JSON</h3>
            <p>
                If you are new to JSON or want to deepen your understanding, check out
                the JSON guides on this site:
            </p>
            <ul>
                <li>
                    <a href="/guides/what-is-json">
                        What is JSON? A beginner-friendly guide
                    </a>
                </li>
                <li>
                    <a href="/guides/common-json-errors">
                        Common JSON errors and how to fix them
                    </a>
                </li>
            </ul>

            <p>
                These guides explain JSON structure step by step, show real-world
                examples, and walk through typical error messages you might see in your
                browser or back-end logs.
            </p>

            <h3>Privacy-Friendly by Design</h3>
            <p>
                JSON Formatter runs entirely in your browser. There is no server-side
                processing, and your data is not stored or logged. This makes it safe
                to use even with sensitive JSON, as long as you are comfortable pasting
                it into your own browser. If you are working with production data,
                always follow your company’s security policies.
            </p>
        </section>
    );
}
