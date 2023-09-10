import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs";  
import ContactsLinks from "../components/ContactsComponents/ContactsLinks";
import FormEmail from "../components/ContactsComponents/FormEmail";
import { useState } from "react";

export default function Contacts() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className={`
    bg-contactBgImage w-full ${showForm ? 'h-fit':'h-[calc(100vh-56px)]'} bg-no-repeat bg-cover
    flex flex-col md:flex-row gap-10 p-6
    `}>
      <div className="flex w-full flex-col  justify-center">
        <ContactsLinks
        linkText={'https://www.linkedin.com/in/danielsilverio81/'}
        text={'LinkedIn'}
        hover={'hover:text-blue-400 hover:[box-shadow:_4px_4px_4px_white]'}
        icon={<AiFillLinkedin size={20} />} />
        <ContactsLinks
        linkText={'https://github.com/Danielsilverio81'}
        text={'Git Hub'}
        hover={'hover:text-teal-300 hover:[box-shadow:_4px_4px_4px_white]'}
        icon={<AiFillGithub size={20} />} />
        <ContactsLinks
        linkText={'https://www.instagram.com/danielsilverio81/'}
        text={'Instagram'}
        hover={'hover:text-rose-600 hover:[box-shadow:_4px_4px_4px_white]'}
        icon={<BsInstagram size={20} />} />
        <div className="w-60 md:ml-52  bg-darkBgColor rounded-md text-teal-300 
        flex items-center m-2">
          <label className="px-2" htmlFor="check">Deseja Me enviar um Email:</label>
          <input 
          type="checkbox" 
          id="check"
          onChange={() => setShowForm(!showForm)} />
        </div>
      </div>
      <FormEmail activeForm={showForm} />
    </section>
  )
}
