const BrushBG = ({
    children,
    color = "#ffb700",
    opacity = 0.9,
    padding = "0.4em 0.8em",
    radius = "6px",
}) => {
    const strokeSVG = `
    <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
      <path d="
        M5 70
        Q60 10 130 40
        T250 60
        Q330 90 390 40
        L395 130
        Q300 120 200 130
        T5 120 Z
      "
      fill="${color}" fill-opacity="${opacity}" />
    </svg>
  `;

    return (
        <span
            style={{
                display: "inline-block",
                padding,
                position: "relative",
                zIndex: 1,
            }}
        >
            {/* BG stroke */}
            <span
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                        strokeSVG
                    )}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    zIndex: -1,
                    borderRadius: radius,
                }}
            ></span>

            {/* Text */}
            <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
        </span>
    );
};

export default BrushBG;
