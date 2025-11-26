// JsonGuides.jsx
export default function JsonGuides() {
    return (
        <main className="container" style={{ padding: "2rem", lineHeight: 1.6 }}>
            <h1>JSON Guides</h1>
            <p>
                This section collects practical, developer-friendly articles about JSON.
                Each guide is written to be easy to read whether you are a beginner or
                an experienced engineer who just needs a quick refresher.
            </p>

            <h2>Available Guides</h2>
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
                More guides will be added over time, focusing on real use cases such as
                working with API responses, debugging production issues, and integrating
                JSON into different programming languages.
            </p>
        </main>
    );
}
