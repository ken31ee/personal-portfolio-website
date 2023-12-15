export default function ExpertiseSection() {
  return (
    <section
      id="Expertise"
      className="box-border w-full p-8 text-white md:p-24"
    >
      <div className="w-full font-mono text-6xl font-semibold [text-shadow:_1px_3px_11px_rgba(0,0,0,0.3)]">
        My Expertise
      </div>
      <div className="flex flex-wrap p-8">
        <div className="w-full border-2 md:w-1/2 lg:w-1/3">A</div>
        <div className="w-full border-2 md:w-1/2 lg:w-1/3">B</div>
        <div className="w-full border-2 md:w-1/2 lg:w-1/3">C</div>
      </div>
    </section>
  );
}
