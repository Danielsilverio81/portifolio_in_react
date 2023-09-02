const borderTable = `border-b border-stone-900 transition-colors duration-300 ease-in-out hover:bg-teal-100 
dark:border-neutral-500 dark:hover:bg-darkBgColor`;
const tableText = `sm:text-xs md:text-lg  dark:text-white px-3 py-2`;
const borderRight = `border-r border-stone-900 dark:border-neutral-500 text-red-400`

const getAge = () => new Date().getFullYear() - 1995;

export default function ContainerTable() {
  return (
    <section className="mx-2 mb-10">
    <div className="
    border-2 border-stone-900 dark:border-slate-200 p-2 w-full  overflow-x-auto
    ">
      <table className="table-auto">
        <thead>
          <tr className="border-b border-stone-900 dark:border-slate-200">
            <th>Informações</th>
          </tr>
        </thead>
        <tbody>
          <tr className={borderTable}>
            <td className={borderRight}>Idade</td>
            <td className={tableText}>{`${getAge()} Anos`}</td>
          </tr>
          <tr className={borderTable}>
            <td className={borderRight}>Cidade</td>
            <td className={tableText}>Matozinhos (Região metropolitana de Belo Horizonte)</td>
          </tr>
          <tr className={borderTable}>
            <td className={borderRight}>Estado</td>
            <td className={tableText}>Minas Gerais</td>
          </tr>
        </tbody>
      </table>
    </div>  
    </section>
  )
}
