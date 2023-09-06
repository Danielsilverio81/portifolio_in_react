import HoverElementsImage from "./ShowGifs";

const data = [
  {id: 1, name: 'Conversor de Moedas Fetch Api', gif: './src/assets/gifs/Currency_Converter_Fetch_Api.gif', 
  link: 'https://currency-converter-using-a-fetch-api.vercel.app/', gitHub: 'https://github.com/Danielsilverio81/currency_converter_using_a_fetch_api'},
  {id: 2, name: 'Site de Clinica Medica Fictício', gif: './src/assets/gifs/medical_clinic_website.gif', 
  link: 'https://responsive-website-beta.vercel.app/', gitHub: 'https://github.com/Danielsilverio81/Responsive_website_project'}
]


export default function ShowMyProjects() {
  return (
    <div className="
    p-4 h-[calc(100vh-56px)] 
    text-white mx-auto my-2
    ">
      {data.map((item) => (
        <HoverElementsImage 
        key={item.id} 
        img={item.gif} 
        text={item.name}
        link={item.link}
        repository={item.gitHub}
        />
      ))}
    </div>
  )
}
