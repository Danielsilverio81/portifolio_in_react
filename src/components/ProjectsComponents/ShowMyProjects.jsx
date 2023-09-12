import HoverElementsImage from "./CreatePreview";
const data =  [{
  id: 1,
  name: "Conversor de Moedas Fetch Api",
  gif: "/gifs/Currency_Converter_Fetch_Api.gif",
  link: "https://currency-converter-using-a-fetch-api.vercel.app/",
  gitHub:
    "https://github.com/Danielsilverio81/currency_converter_using_a_fetch_api",
  imageDefault: "/images/project_preview_1.png",
},
{
  id: 2,
  name: "Site de Clinica Medica Fictício",
  gif: "/gifs/medical_clinic_website.gif",
  link: "https://responsive-website-beta.vercel.app/",
  gitHub: "https://github.com/Danielsilverio81/Responsive_website_project",
  imageDefault: "/images/project_preview_2.png",
},
{
  id: 3,
  name: "Landing Page Workit Desafio FrontEnd Mentor",
  gif: "/gifs/Landing_page_copies_challenge_Front_End_Mentor.gif",
  link: "https://front-end-mentor-landing-page-workit-challenge.vercel.app/",
  gitHub: "https://github.com/Danielsilverio81/FrontEnd_Mentor_Landing_page-workit_challenge",
  imageDefault: "/images/project_preview_3.png",
},
{
  id: 4,
  name: "Landing Page Equalizer Desafio FrontEnd Mentor",
  gif: "/gifs/Landing_page_Equalizer_Challenge_Front_End_Mentor.gif",
  link: "https://equalizerlandingpage.vercel.app/",
  gitHub: "https://github.com/Danielsilverio81/equalizer-landingpage-project",
  imageDefault: "/images/project_preview_4.png",
},
{
  id: 5,
  name: "Flappy Bird Copia em Javascript puro",
  gif: "/gifs/flappy_bird_game_in_js.gif",
  link: "https://flappy-copy-in-js.vercel.app/",
  gitHub: "https://github.com/Danielsilverio81/Flappy-B_in_JS",
  imageDefault: "/images/project_preview_5.png",
},
{
  id: 6,
  name: "Agencia de Viagens Formulário",
  gif: "/gifs/Travel_agency_form.gif",
  link: "https://travel-agency-form-q60gk6d23-danielsilverio81.vercel.app/",
  gitHub: "https://github.com/Danielsilverio81/Travel_agency_form",
  imageDefault: "/images/project_preview_6.png",
},
{
  id: 7,
  name: "Calculadora de IMC",
  gif: "/gifs/imc_calc.gif",
  link: "https://imc-calculator-in-pure-javascript-c7ks2wfpm-danielsilverio81.vercel.app/",
  gitHub: "https://github.com/Danielsilverio81/IMC_calculator_in_pure_javascript",
  imageDefault: "/images/project_preview_7.png",
},
{
  id: 8,
  name: "SpaceX copia",
  gif: "/gifs/spaceX_WebSite_copy.gif",
  link: "https://my-spacex-website-version.vercel.app/index.html",
  gitHub: "https://github.com/Danielsilverio81/My_spacex_website_version_in_bootstrap_and_sass",
  imageDefault: "/images/project_preview_8.png",
},
];



export default function ShowMyProjects() {
  return (
    <div
      className="
    p-1 flex flex-wrap gap-2
    text-white my-2
    "
    >
      {data.map((item) => (
        <HoverElementsImage
          key={item.id}
          img={item.gif}
          defaultImage={item.imageDefault}
          text={item.name}
          link={item.link}
          repository={item.gitHub}
        />
      ))}
    </div>
  );
}
