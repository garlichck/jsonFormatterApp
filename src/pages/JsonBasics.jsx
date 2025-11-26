// JsonBasics.jsx
export default function JsonBasics() {
    return (
        <main className="container" style={{ padding: "2rem", lineHeight: 1.6 }}>
            <h1>What is JSON? A Beginner-Friendly Guide</h1>
            <p>
                JSON stands for <strong>JavaScript Object Notation</strong>. It is a
                text format for representing structured data. JSON is widely used to
                send data between a server and a web or mobile application, and it has
                become the de-facto standard for many REST APIs.
            </p>

            <h2>Basic Building Blocks</h2>
            <p>A JSON document is built from a few simple pieces:</p>
            <ul>
                <li>
                    <strong>Objects</strong> – collections of key-value pairs, wrapped in
                    <code>{" { } "}</code>
                </li>
                <li>
                    <strong>Arrays</strong> – ordered lists of values, wrapped in{" "}
                    <code>[ ]</code>
                </li>
                <li>
                    <strong>Values</strong> – strings, numbers, booleans, null, objects,
                    or arrays
                </li>
            </ul>

            <p>Here is a simple JSON object:</p>
            <pre>{`{
  "name": "Jane Doe",
  "age": 28,
  "isDeveloper": true,
  "skills": ["react", "sql", "devops"],
  "profile": {
    "github": "janedoe",
    "location": "Remote"
  }
}`}</pre>

            <h2>Rules You Must Follow</h2>
            <ul>
                <li>
                    Property names must be in <strong>double quotes</strong>, for example{" "}
                    <code>"name"</code>, not <code>name</code>.
                </li>
                <li>
                    String values must also use double quotes: <code>"Jane Doe"</code>.
                </li>
                <li>
                    Valid primitive values are <code>string</code>, <code>number</code>,{" "}
                    <code>true</code>, <code>false</code>, and <code>null</code>.
                </li>
                <li>
                    Arrays contain comma-separated values:{" "}
                    <code>["a", "b", "c"]</code>.
                </li>
                <li>
                    There is <strong>no trailing comma</strong> after the last item in an
                    object or array.
                </li>
            </ul>

            <h2>Where JSON Is Used</h2>
            <p>Some very common places you will see JSON:</p>
            <ul>
                <li>
                    <strong>HTTP APIs:</strong> responses from REST endpoints such as
                    <code>/api/users</code> or <code>/api/orders</code>.
                </li>
                <li>
                    <strong>Configuration files:</strong> settings for tools, CLIs, and
                    front-end frameworks.
                </li>
                <li>
                    <strong>Logs:</strong> structured logging in back-end services.
                </li>
                <li>
                    <strong>Front-end apps:</strong> state persisted to localStorage or
                    sent between components.
                </li>
            </ul>

            <h2>JSON vs JavaScript Objects</h2>
            <p>
                JSON is inspired by JavaScript object syntax, but they are not exactly
                the same:
            </p>
            <ul>
                <li>JSON always uses double quotes, JavaScript objects do not have to.</li>
                <li>JSON does not allow comments; JavaScript objects can have them.</li>
                <li>
                    JSON is always valid text; JavaScript objects live directly in code.
                </li>
            </ul>

            <h2>Working With JSON in Practice</h2>
            <p>
                In a browser or Node.js environment, you typically work with JSON using{" "}
                <code>JSON.parse</code> and <code>JSON.stringify</code>:
            </p>
            <pre>{`// Convert JSON string into a JavaScript object
const data = JSON.parse(jsonString);

// Convert a JavaScript object into a JSON string
const jsonString = JSON.stringify(data, null, 2);`}</pre>

            <p>
                When you paste JSON into this site, it does essentially the same thing:
                it parses the JSON, validates it, and then pretty-prints it for easier
                reading.
            </p>

            <h2>Next Steps</h2>
            <p>
                If you are just starting with JSON, a good habit is to validate and
                format every payload you work with. That makes debugging easier and
                helps you quickly spot incorrect field names or unexpected values.
            </p>
            <p>
                You can continue learning by reading the guide on{" "}
                <a href="/guides/common-json-errors">
                    common JSON errors and how to fix them
                </a>
                .
            </p>
        </main>
    );
}
