import { twMerge } from "tailwind-merge";

export default function ExpertiseBox(
  props: React.PropsWithChildren<{
    firstLineTitle: string;
    secondLineTitle: string;
    description: string;
    color: "amber" | "blue" | "red";
  }>,
) {
  const combinedClasses = twMerge(
    "relative z-10 after:absolute after:bottom-[10%] after:left-[-1%] after:z-[-1] after:h-[6px] after:w-[104%]",
    props.color === "amber"
      ? "after:bg-amber-400"
      : props.color === "blue"
        ? "after:bg-blue-400"
        : "after:bg-red-400",
  );

  return (
    <div className="z-10 w-full border-b-2 p-10 first:border-l-2 md:w-1/2 md:p-8 md:last:!border-r-2 lg:w-1/3 lg:last:!border-r-0">
      <div className="relative h-[70px]">
        <div className="pt-[4px]">{props.children}</div>
        <div className="leading-2 absolute left-[60px] top-0 w-4/5 text-left font-mono text-xl font-semibold tracking-tighter">
          <span className={combinedClasses}>{props.firstLineTitle}</span>
          <br />
          {props.secondLineTitle}
        </div>
      </div>
      <div className="pl-8 text-left before:mb-1 before:ml-[-24px] before:block before:text-slate-400 before:content-['<body>'] after:ml-[-24px] after:mt-1 after:block after:text-slate-400 after:content-['</body>']">
        {props.description}
      </div>
    </div>
  );
}
