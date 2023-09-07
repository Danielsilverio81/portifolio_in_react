import { useState } from "react";
import propTypes from "prop-types";

FormEmail.propTypes = {
    activeForm: propTypes.bool
}

const inputStyle = `bg-darkBgColor text-white p-2 rounded-md w-full my-2`;

export default function FormEmail({activeForm}) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  return (
    <div
      className={`
      w-full h-auto border-2 border-red-300 bg-white p-4 rounded-md 
      ${activeForm ? 'inline' : 'hidden'}
      `}>
      <form>
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
      </form>
    </div>
  );
}
