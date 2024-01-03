import { ProjectItem } from ".";

export default function ProjectSection() {
  return (
    <section
      id="Projects"
      className="z-10 box-border w-full p-8 text-white md:p-24"
    >
      <div className="mb-8 w-full font-mono text-6xl font-semibold [text-shadow:_1px_3px_11px_rgba(0,0,0,0.3)] md:mb-8">
        Projects
      </div>
      <div className="grid min-h-screen grid-flow-dense auto-rows-min grid-cols-2 grid-rows-4 gap-4 md:grid-cols-3">
        <ProjectItem
          size="large"
          imageSrc="/callinter.webp"
          projectName="Callinter"
          description="Customer Service Call Analytics Platform"
        />
        <ProjectItem
          size="large"
          imageSrc="/minga.png"
          projectName="Minga"
          description="Campus Management Plaform"
        />
        <ProjectItem
          size="normal"
          imageSrc="https://tamalsen.dev/wp-content/uploads/2021/10/walkerip-com-poster.jpg"
          projectName="Fano Speech API"
          description="Powerful Speech AI Engine"
        />
        <ProjectItem
          size="normal"
          imageSrc="/referahal.png"
          projectName="Referahal"
          description="Referal Platform for overseas HKers"
        />
      </div>
    </section>
  );
}
