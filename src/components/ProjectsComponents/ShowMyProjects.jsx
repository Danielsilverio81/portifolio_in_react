import HoverElementsImage from "./CreatePreview";
import { data } from "./js/data";



export default function ShowMyProjects() {
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
