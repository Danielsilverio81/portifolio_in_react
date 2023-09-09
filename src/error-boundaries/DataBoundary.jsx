import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const styleErrorModal = `w-80 border border-black bg-red-700 rounded-xl my-40 h-fit
 p-8 mx-auto font-bold text-center`


export default function DataBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <div className={styleErrorModal}><h3>Projeto não encontrado.</h3></div>
            case 400:
                return <div className={styleErrorModal}><h3>Parece que algo deu errado na requisição.</h3></div>
            case 500:
                return <div className={styleErrorModal}><h3>Erro interno no servidor.</h3></div>
        }
    }
  return (
    <div className={styleErrorModal}><h3>Algo deu Errado.</h3></div>
  )
}
