import ShowMyProjects from '../components/ProjectsComponents/ShowMyProjects'

export default function projects() {
  return (
    <div className="flex flex-row items-center justify-center gap-24 dark:bg-darkBgColor">
      <div
      className="
      min-w-full bg-darkBgColor border-2 border-orange-400
      ">
      <ShowMyProjects />
       
      </div>
    </div>
  )
}
