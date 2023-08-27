import CallForAbout from "../components/About/CallForAbout";
import CardsAbout from "../components/About/CardsAbout";

export default function About() {
  return (
    <section className="w-full flex sm:flex-col items-center justify-center">
      <CallForAbout />
      <CardsAbout />
      <section>
        <h2
          className="
        text-2xl mb-4 text-fontColor  dark:text-lightBg [text-shadow:_1px_1px_2px_black]
        "
        >
          Minhas Habilidades
        </h2>
        <div
          className="
        container grid auto-rows-auto grid-cols-4 mb-5 gap-5
        "
        >
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
          <div
            className="
          w-40 h-52 bg-bgCardImage dark:bg-teal-300
          "
          ></div>
        </div>
      </section>
      <div
        className="
      w-2/4 h-auto my-5 bg-heroAboutDark p-3 rounded-md
      "
      >
        <p>
          Sempre pensando no entretenimento e usabilidade do usuário, buscando
          criar soluções simples, sofisticadas e com foco no objetivo do
          projeto.
        </p>
      </div>
    </section>
  );
}
