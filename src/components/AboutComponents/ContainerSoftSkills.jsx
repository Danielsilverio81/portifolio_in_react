const skillsStyle = `rounded-full text-xs md:text-[18px] w-32 h-32 md:w-40 md:h-40 bg-teal-300 grid p-1
place-content-center border border-blue-700`

export default function ContainerSoftSkills() {
  return (
    <>
    <h2 className="
    md:text-2xl text-let ml-3 md:ml-48 font-bold text-fontColor  dark:text-secondaryColor 
    [text-shadow:_1px_1px_2px_black]
    ">Soft Skills</h2>
    <div className="
    bg-darkBgColor w-full h-fit p-4 flex items-center justify-center gap-4 flex-wrap
    ">
        <div className={skillsStyle}><span>Perseverante</span></div>
        <div className={skillsStyle}><span>Meticuloso</span></div>
        <div className={skillsStyle}><span>Proativo</span></div>
        <div className={skillsStyle}><span>Sincero</span></div>
    </div>
    </>
  )
}
