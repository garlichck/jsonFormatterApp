export default function Privacy() {
    return (
        <div style={{ padding: 24 }}>
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
                This site uses Google AdSense and analytics which may use cookies or
                similar technologies to show and measure ads. We do not collect personal
                data directly. See{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                    Google’s Privacy Policy
                </a>.
            </p>
            <p>
                Contact: <a href="mailto:garlichck@hotmail.com">garlichck@hotmail.com</a>
            </p>
        </div>
    );
}
