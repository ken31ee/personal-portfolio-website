export default function ContactSection() {
  return (
    <section
      id="Contact"
      className="z-10 box-border w-full bg-gray-800 p-8 text-white md:p-20"
    >
      <div className="w-full text-left font-mono text-2xl font-semibold">
        <ul>
          <li className="pb-2 text-2xl">
            <a
              href="mailto:tungpakyin04@outlook.com"
              className="relative z-10 after:absolute after:bottom-[10%] after:left-[-1%] after:z-[-1] after:h-[6px] after:w-[104%] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:h-[20px]"
            >
              tungpakyin04@outlook.com
            </a>
          </li>
          <li className="text-xl hover:text-cyan-400">
            <a
              href="https://github.com/ken31ee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="text-xl hover:text-cyan-400">
            <a
              href="https://www.linkedin.com/in/ken-tung-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
