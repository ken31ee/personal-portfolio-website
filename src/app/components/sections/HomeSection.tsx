export default function HomeSection() {
  return (
    <section className="bg-hero-pattern box-border h-screen w-full bg-cover bg-center p-24">
      <div className="flex h-full flex-col flex-wrap content-center items-center justify-center text-white">
        <div className="w-full font-mono text-8xl font-semibold tracking-wide [text-shadow:_1px_3px_11px_rgba(0,0,0,0.3)]">
          KEN TUNG
        </div>
        <div className="w-full font-mono text-xl font-semibold leading-10 tracking-wide [text-shadow:_1px_3px_11px_rgba(0,0,0,0.3)]">
          SOFTWARE ENGINEEER, FRONTEND & BACKEND
        </div>
        <div className="absolute bottom-12">
          <svg
            className="text-white"
            width="40px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            }}
          >
            <path
              className="animate-scroll"
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "20px",
              }}
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "20px",
              }}
            />
          </svg>{" "}
        </div>
      </div>
    </section>
  );
}
