export default function Contact() {
    return (
        <main className="container" style={{ padding: '2rem', lineHeight: 1.6 }}>
            <h1>Contact</h1>
            <p><strong>Last updated:</strong> November 2025</p>

            <p>
                Have a bug report, feature idea, or business inquiry? I’d love to hear from you.
            </p>

            <h2>Email</h2>
            <p>
                <a href="mailto:garlichck@hotmail.com">garlichck@hotmail.com</a>
            </p>

            <h2>Response Time</h2>
            <p>
                I usually reply within 2–3 business days. If you don’t hear back, feel free to follow up.
            </p>

            <h2>What to include</h2>
            <ul>
                <li>Your browser and OS (e.g., Chrome 141 on Windows 10).</li>
                <li>Steps to reproduce a bug (if any), with a small JSON sample.</li>
                <li>Screenshots or errors from the dev console if relevant.</li>
            </ul>

            <h2>Privacy note</h2>
            <p>
                Please avoid sending sensitive or personal data. The formatter runs in your browser and
                we do not store your JSON. See the <a href="/privacy">Privacy Policy</a> for details.
            </p>
        </main>
    );
}
