import frontCode from "./../assets/images/frontCode.png"
export default function Home() {
  return (
    <section className="
    flex justify-between 2xl:justify-around"
    >
      <div className="
        ml-32 mt-28 w-96  text-fontColor [text-shadow:_2px_1px_1px_#4D3F8F]"
      >
        <p className="
            text-4xl font-bold "
        ><span className="
            text-6xl"
        >O</span>lá sou
        </p>
        <h1><strong className="text-7xl">Daniel Silverio</strong></h1>

        <h2 className="
            text-4xl mb-3 font-bold text-titleColor [text-shadow:_2px_1px_1px_#415A77]"
        >Frontend Developer.</h2>
        <p className="
        text-2xl font-bold
        "
        >O dev que você estava procurando</p>
      </div>
      <div className="mt-6 md:max-w-xl 2xl:max-w-2xl"><img className="w-full" src={frontCode} loading="lazy" alt="" /></div>
    </section>
  )
}
