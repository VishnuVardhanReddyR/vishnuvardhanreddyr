import React from 'react';
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({ contact }) {
  const { nameLabel, emailLabel, messageLabel, contactTitle, contactSub, contactNote, buttonLabel } = contact[0];
  const [state, handleSubmit] = useForm("xvgaojel");
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }} 
      className={`flex flex-col lg:w-1/3 md:w-1/2 md:ml-auto w-full md:py-8 mt-8 md:mt-0`}>
        <h2 className="mb-1 text-lg font-medium text-white title-font">{contactTitle}</h2>
        <p className="mb-5 leading-relaxed">{contactSub}</p>

        <form onSubmit={handleSubmit}>
        <ContactInput name="name" type="text" label={nameLabel} />
        <ContactInput name="email" type="email" label={emailLabel} />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        <ContactTextArea name={"message"} label={messageLabel} />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        <button className="px-6 py-2 text-lg text-black border-0 rounded bg-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white" 
        type="submit" disabled={state.submitting}>SEND</button>
        <p className="mt-3 text-xs text-gray-400 text-opacity-90">{contactNote}</p>
        </form>
    </motion.div>
  )
}

export default ContactForm;
