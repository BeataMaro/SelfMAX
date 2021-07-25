import React, { useEffect } from "react"
import kwesforms from "kwesforms"

const ContactForm = () => {
  useEffect(() => {
    kwesforms.init()
  }, [])

  return (
    <div>
      <form
        className="kwes-form"
        action={`https://kwes.io/api/foreign/forms/${process.env.KWES_KEY}`}
        no-success-message
        no-error-message
      >
        <label htmlFor="name">Imię</label>
        <input type="text" name="name" rules="max:255" />
        <label htmlFor="email">Adres e-mail</label>
        <input type="email" name="email_address" />
        <label htmlFor="phone">Numer telefonu</label>
        <input name="phone" />
        <button type="submit">Wyślij</button>

        <input type="checkbox" name="terms" />
        <label htmlFor="terms">
          Zapoznałem/łam się z informacją o administratorze i przetwarzaniu
          danych.
        </label>
      </form>
    </div>
  )
}

export default ContactForm
