export default function ProjectItem(
  props: React.PropsWithChildren<{
    size: "large" | "normal";
    imageSrc: string;
    projectName: string;
    description: string;
  }>,
) {
  const span = props.size == "large" ? "col-span-2 row-span-2" : "";
  return (
    <div
      className={`${span} group relative overflow-hidden rounded-md bg-gray-800`}
    >
      <div className="flex h-[calc(100%-6rem)] content-center items-center overflow-hidden">
        <img
          decoding="async"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
          src={props.imageSrc}
          alt="Walker IP Pty Ltd"
        />
      </div>
      <div className="box-border h-[6rem] p-8 text-left text-xl">
        {props.projectName}
      </div>
      <div className="absolute box-border h-[6rem] bg-gray-800 p-8 text-left transition duration-300 group-hover:-translate-y-24">
        {props.description}
      </div>
    </div>
  );
}
