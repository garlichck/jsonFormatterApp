import { useEffect } from "react";

export default function AdBanner({
    slot,
    style = { display: "block", textAlign: "center", minHeight: 90 },
    format = "auto",
    fullWidth = true,
}) {
    useEffect(() => {
        // Render the ad when the component mounts
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            // Fail silently in dev / adblock / build preview
            console.debug("AdSense render skipped:", e?.message || e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={style}
            data-ad-client="ca-pub-1661788430529506"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={fullWidth ? "true" : "false"}
        />
    );
}
