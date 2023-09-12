import ShowMyProjects from "../components/ProjectsComponents/ShowMyProjects";
import ScrollBtn from "../components/ScrollToTop";

export default function projects() {
  return (
    <section className="flex flex-row items-center justify-center gap-24 dark:bg-darkBgColor">
      <div
        className="
      w-full p-1 bg-cyan-900 dark:bg-darkBgColor
      "
      >
        <ShowMyProjects />
      </div>
      <ScrollBtn />
    </section>
  );
}
