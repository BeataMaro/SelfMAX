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
      >
        <label htmlFor="name">Imię</label>
        <input type="text" name="name" rules="max:255" />
        <label htmlFor="email">Adres e-mail</label>
        <input type="email" name="email" rules="required|email" />
        <label htmlFor="phone">Numer telefonu</label>
        <input type="text" name="phone" rules="numeric" />
        <label htmlFor="message">Wiadomość</label>
        <textarea name="message" rules="max: 500" />
        <button type="submit">Wyślij</button>

        <input type="checkbox" name="terms" rules="accepted" />
        <label htmlFor="terms">
          Zapoznałem/łam się z informacją o administratorze i przetwarzaniu
          danych.
        </label>
      </form>
    </div>
  )
}

export default ContactForm
