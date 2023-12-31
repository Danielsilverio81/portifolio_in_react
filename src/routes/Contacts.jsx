import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs";  
import ContactsLinks from "../components/ContactsComponents/ContactsLinks";
import FormEmail from "../components/ContactsComponents/FormEmail";
import { useState } from "react";

export default function Contacts() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className={`
    bg-[url('/images/contactsBg.jpg')] w-full ${showForm ? 'h-fit':'h-[calc(100vh-56px)]'} md:h-[calc(100vh-56px)]
     bg-no-repeat bg-cover flex flex-col md:flex-row gap-10 p-6
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
        <div className="w-fit md:ml-[141px] bg-darkBgColor rounded-md text-teal-300 
        flex items-center m-3 p-2">
          <label className="px-2 " htmlFor="check">Deseja Me enviar um Email clique:</label>
          <input 
          type="checkbox" 
          id="check"
          className="cursor-pointer"
          onChange={() => setShowForm(!showForm)} />
        </div>
      </div>
      <FormEmail activeForm={showForm} />
    </section>
  )
}
