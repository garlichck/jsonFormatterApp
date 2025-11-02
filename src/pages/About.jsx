export default function About() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "JSON Formatter",
        "url": "https://jsonformatterapp.vercel.app",
        "description": "Free JSON formatter, validator and minifier that runs entirely in your browser.",
        "creator": {
            "@type": "Person",
            "name": "CK",
            "jobTitle": "Software Engineer"
        }
    };

    return (
        <main className="container" style={{ padding: '2rem', lineHeight: 1.6 }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <h1>About JSON Formatter</h1>
            <p><strong>Last updated:</strong> November 2025</p>

            <p>
                <strong>JSON Formatter</strong> is a free, fast tool for pretty-printing, validating, and
                minifying JSON directly in your browser. No sign-up, no server uploads—your data stays on your device.
            </p>

            <h2>What makes it different?</h2>
            <ul>
                <li><strong>Privacy-first:</strong> all formatting happens client-side.</li>
                <li><strong>Developer-friendly:</strong> keyboard shortcuts, persistent input, and copy helpers.</li>
                <li><strong>Learning hub:</strong> guides and tips to help you work confidently with JSON.</li>
            </ul>

            <h2>Who built this?</h2>
            <p>
                Hi, I’m <strong>CK</strong>, a Software Engineer who constantly works with JSON in real-world systems.
                I built this to be the tool I wished I had—simple, fast, and respectful of privacy.
            </p>

            <h2>Contact</h2>
            <p>
                Feedback or feature requests? Reach me via the <a href="/contact">Contact</a> page.
            </p>

            <h2>Legal</h2>
            <p>
                Please review our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a>.
            </p>
        </main>
    );
}
