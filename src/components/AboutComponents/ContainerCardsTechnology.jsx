import CardsTechnology from "./Cards/CardsTechnology";
import jsImg from "/images/JavascriptIcon.png";
import reactImg from "/images/icons8-react-100.png";
import sassImg from "/images/icons8-sass-96.png";
import tailwindCssImg from "/images/icons8-tailwind-css-96.png";
import cssImg from "/images/icons8-css-96.png";
import bootstrapImg from "/images/icons8-bootstrap-96.png";
import htmlImg from "/images/icons8-html-96.png";
import gitImg from "/images/icons8-git-96.png";



export default function ContainerCardsTechnology() {
  return (
    <section>
        <h2
          className="
        md:text-2xl mb-3 text-fontColor  dark:text-secondaryColor [text-shadow:_1px_1px_2px_black] 
        font-bold ml-3 md:ml-48
        "
        >
          Hard skills:
        </h2>
        <div
          className="
        w-fit h-auto p-6 mx-auto grid auto-rows-auto grid-cols-2 md:grid-cols-4 mb-10 gap-5
        bg-darkBgColor 
        "
        >
            <CardsTechnology
            imageIcon={jsImg}
            textCard={'Javascript'}
             />
             <CardsTechnology
            imageIcon={reactImg}
            textCard={'ReactJs'}
             />
             <CardsTechnology
            imageIcon={sassImg}
            textCard={'Sass'}
             />
             <CardsTechnology
            imageIcon={tailwindCssImg}
            textCard={'Tailwind Css'}
             />
            <CardsTechnology
           imageIcon={bootstrapImg}
           textCard={'Bootstrap'}
            />
             <CardsTechnology
            imageIcon={cssImg}
            textCard={'CSS'}
             />
              <CardsTechnology
            imageIcon={htmlImg}
            textCard={'HTML'}
             />
              <CardsTechnology
            imageIcon={gitImg}
            textCard={'GIT'}
             />
        </div>
      </section>
  )
}
