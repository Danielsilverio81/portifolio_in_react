import { useState } from "react";
import propTypes from "prop-types";
import emailJs from "@emailjs/browser";

FormEmail.propTypes = {
  activeForm: propTypes.bool,
};

const inputStyle = `bg-darkBgColor text-white p-2 rounded-md w-full my-2`;

export default function FormEmail({ activeForm }) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const [submit, setSubmit] = useState(false);

  const templateParams = {
    from_name: nameValue,
    message: messageValue,
    email: emailValue
  }
  const sendEmail = (e) => {
    e.preventDefault()
    emailJs.send("service_o2rb8f2", "template_3oia459", templateParams, "S7YLoWO4yG_U6yijc")
    .then(() => {
      setSubmit(true)
      setNameValue('')
      setEmailValue('')
      setMessageValue('')
    }, (err) => alert(`Error: ${err}`)
  )}

  

  return (
    <div
      className={`
      w-full h-fit border-2 border-red-300 bg-white p-4 rounded-md  
      ${activeForm ? "inline" : "hidden"}
      `}
    >
      <form onSubmit={sendEmail} >
        <label className="font-bold" htmlFor="nameId">
          Nome:
        </label>
        <input
          type="text"
          className={inputStyle}
          id="nameId"
          placeholder="Digite seu Nome"
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
        />

        <label className="font-bold" htmlFor="emailId">
          Email:
        </label>
        <input
          className={inputStyle}
          type="text"
          placeholder="Digite seu Email"
          required
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
        />

        <label className="font-bold" htmlFor="emailId">
          Mensagem:
        </label>
        <textarea
          className={inputStyle}
          placeholder="Digite sua Mensagem"
          onChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
        />

        <button
          className="
        bg-emerald-400 p-2 border border-black rounded-md w-[90%] mx-auto mt-2 mb-8
        "
          type="submit"
        >
          Enviar
        </button>
        <span className={`
        ${submit ? 'inline':'hidden'} text-emerald-500 bg-darkBgColor w-[90%]
        text-center p-3 mx-24 border border-emerald-300
        `}>Enviado com sucesso!!</span>
      </form>
    </div>
  );
}
