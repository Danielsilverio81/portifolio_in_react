import { useLoaderData } from "react-router-dom";
import HoverElementsImage from "./CreatePreview";



export default function ShowMyProjects() {
  const data = useLoaderData()
  return (
    <div
      className="
    p-1 flex flex-wrap gap-2
    text-white my-2
    "
    >
      {data.map((item) => (
        <HoverElementsImage
          key={item.id}
          img={item.gif}
          defaultImage={item.imageDefault}
          text={item.name}
          link={item.link}
          repository={item.gitHub}
        />
      ))}
    </div>
  );
}
