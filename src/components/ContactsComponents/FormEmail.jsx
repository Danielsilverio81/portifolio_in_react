import { useState } from "react";
import propTypes from "prop-types";
import emailJs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const containersInputsStyle = `flex flex-col gap-1`
const errorStyle = `text-red-400 text-sm`

const createFormSubmitSchema = z.object({
  name: z.string().nonempty('O Nome é Obrigatório!'),
  email: z.string()
  .nonempty('O e-mail é Obrigatório!')
  .email('Formato de e-mail invalido!'),
  message: z.string().nonempty('Escreva uma mensagem antes de Enviar!')
})


FormEmail.propTypes = {
  activeForm: propTypes.bool,
};

const inputStyle = `bg-darkBgColor text-white p-2 rounded-md w-full my-2`;

export default function FormEmail({ activeForm }) {

  const { 
    register,
    handleSubmit,
    formState:{errors}
   } = useForm({
    resolver: zodResolver(createFormSubmitSchema)
  })
  

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const [submit, setSubmit] = useState(false);

  const templateParams = {
    from_name: nameValue,
    message: messageValue,
    email: emailValue
  }
  const sendEmail = () => {
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
      <form onSubmit={handleSubmit(sendEmail)} >
        <div className={containersInputsStyle}>
          <label className="font-bold" htmlFor="nameId">
            Nome:
          </label>
          <input
            type="text"
            className={inputStyle}
            id="nameId"
            placeholder="Digite seu Nome"
            {...register('name')}
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
          />
          {errors.name && <span className={errorStyle}>{errors.name.message}</span>}
        </div>

        <div className={containersInputsStyle}>
          <label className="font-bold" htmlFor="emailId">
            Email:
          </label>
          <input
            className={inputStyle}
            type="email"
            placeholder="Digite seu Email"
            {...register('email')}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
          />
          {errors.email && <span className={errorStyle}>{errors.email.message}</span>}
        </div>

        <div className={containersInputsStyle}>
          <label className="font-bold" htmlFor="emailId">
            Mensagem:
          </label>
          <textarea
            className={inputStyle}
            placeholder="Digite sua Mensagem"
            {...register('message')}
            onChange={(e) => setMessageValue(e.target.value)}
            value={messageValue}
          />
          {errors.message && <span className={errorStyle}>{errors.message.message}</span>}
        </div>

        <button
          className="
        bg-emerald-400 p-2 border border-black rounded-md w-full mt-2 mb-8
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
