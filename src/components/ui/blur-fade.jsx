const signByDirection = {
  up: 1,
  down: -1,
  left: 1,
  right: -1,
};

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  blur = "6px",
  inView = true,
  inViewMargin: _inViewMargin,
  variant: _variant,
  style,
  ...rest
}) {
  const sign = signByDirection[direction] ?? -1;
  const isHorizontal = direction === "left" || direction === "right";
  const shouldReveal = Boolean(inView);

  return (
    <div
      className={`${shouldReveal ? "blur-fade-reveal" : ""} ${className ?? ""}`.trim()}
      style={{
        "--blur-fade-duration": `${duration}s`,
        "--blur-fade-delay": `${0.04 + delay}s`,
        "--blur-fade-offset-x": isHorizontal ? `${sign * offset}px` : "0px",
        "--blur-fade-offset-y": isHorizontal ? "0px" : `${sign * offset}px`,
        "--blur-fade-filter": `blur(${blur})`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
