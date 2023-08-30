import CallForAbout from "../components/About/CallForAbout";
import ContainerCardsAbout from "../components/About/ContainerCardsAbout";
import ContainerCardsTechnology from "../components/About/ContainerCardsTechnology";

const borderTable = `border-2 p-4 border-bgCardImage dark:border-linkColor`
const tableStyle = `w-[90%] mx-auto text-center p-5 m-2 border-2 bg-sky-800 text-emerald-300
border-bgCardImage dark:border-linkColor`

const getAge = () => new Date().getFullYear() - 1995

export default function About() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <CallForAbout />
      <ContainerCardsTechnology />
      <ContainerCardsAbout />
      <section>
        <table className={`${tableStyle}`}>
          <thead>
            <tr className={`${borderTable}`}>
              <th className={`${borderTable}`}>Idade:</th>
              <th className={`${borderTable}`}>Trabalho Freelancer:</th>
              <th className={`${borderTable}`}>Cidade:</th>
              <th className={`${borderTable}`}>Estado:</th>
              <th className={`${borderTable}`}>Outros Idiomas:</th>
            </tr>
          </thead>
            <tbody>
            <tr className={`${borderTable}`}>
              <td className={`${borderTable}`}>{`${getAge()} Anos`}</td>
              <td className={`${borderTable}`}>Disponível</td>
              <td className={`${borderTable}`}>Matozinhos</td>
              <td className={`${borderTable}`}>Minas Gerais</td>
              <td className={`${borderTable}`}>Ingles Leitura e escrita em aprendizado</td>
            </tr>
            </tbody>
        </table>
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
