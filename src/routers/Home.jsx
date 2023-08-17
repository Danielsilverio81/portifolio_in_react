import frontCode from "./../assets/images/Desk - Animation.gif"
export default function Home() {
  return (
    <section className="
    w-full flex flex-col flex-wrap md:flex-row md:justify-between 
    md:items-center 2xl:justify-around"
    >
      <div className="
       ml-10 mt-10 md:ml-10 md:mt-20 2xl:ml-32 2xl:mt-28 md:w-96 
     text-fontColor [text-shadow:_2px_1px_1px_#4D3F8F]"
      >
        <p className="
            md:text-4xl font-bold "
        ><span className="
           text-3xl md:text-6xl"
        >O</span>lá sou
        </p>
        <h1><strong className="
        text-3xl md:text-7xl"
        >Daniel Silverio</strong></h1>

        <h2 className="
            text-2xl md:text-4xl mb-3 font-bold text-titleColor 
            [text-shadow:_2px_1px_1px_#415A77]"
        >Frontend Developer.</h2>
        <p className="
        md:text-2xl font-bold
        "
        >O dev que você estava precisando</p>
      </div>
      <div className="
      flex justify-center items-center mt-20 mx-auto p-8 w-3/5 md:w-2/5 md:mr-10 
      2xl:max-w-2xl 2xl:mr-28 bg-bgCardImage"
      ><img className="
       w-full max-w-md"
       src={frontCode} loading="lazy" alt="" />
       </div>
    </section>
  )
}
