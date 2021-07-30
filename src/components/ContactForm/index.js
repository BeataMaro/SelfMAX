import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useForm, ValidationError } from "@formspree/react"

import { StyledForm, StyledInfo, StyledTerms } from "./StyledContactForm"
import { Button } from "../atoms/Button"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("ContactSelfMAX")

  const form = useRef(null)

  useEffect(() => {
    state.errors.length === 0 && form.current.reset()
  }, [state])

  if (state.succeeded) {
    return (
      <StyledForm onSubmit={handleSubmit} ref={form} autoComplete="off">
        <label htmlFor="name" req="true">
          Imię
        </label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email" req="true">
          Adres e-mail
        </label>
        <input id="email" type="email" name="email" />
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        <label htmlFor="phone">Numer telefonu</label>
        <input id="phone" type="numeric" name="phone" />
        {/* <ValidationError prefix="Phone" field="phone" errors={state.errors} /> */}
        <label htmlFor="message" req="true">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="10"
          maxLength="250"
        />
        {/* <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /> */}
        <StyledTerms>
          <input type="checkbox" name="terms" className="checkboxInpt" />
          <label htmlFor="terms" req="true">
            Zapoznałam/łem się z informacją o
            <Link to="/terms">
              <span>administratorze i przetwarzaniu danych</span>
            </Link>
            .
          </label>
        </StyledTerms>
        <Button type="submit" disabled={state.submitting} empty>
          Wyślij
        </Button>
        {state.errors.length > 0 && (
          <span className="error">
            Wypełnij poprawnie pola formularza oznaczone gwiadką.
          </span>
        )}

        <StyledInfo>
          <p>Wiadomość wysłana pomyślnie.</p>
          <p>Dziękujemy!</p>
        </StyledInfo>
      </StyledForm>
    )
  }
  return (
    <StyledForm onSubmit={handleSubmit} ref={form} autoComplete="off">
      <label htmlFor="name" req="true">
        Imię
      </label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email" req="true">
        Adres e-mail
      </label>
      <input id="email" type="email" name="email" />
      {/* <ValidationError
        prefix="Adres e-mail jest wymagany."
        field="email"
        errors={state.errors}
        className="error"
      /> */}
      <label htmlFor="phone">Numer telefonu</label>
      <input id="phone" type="numeric" name="phone" />
      {/* <ValidationError
        prefix="Numer telefonu powinien składać sie z cyfr."
        field="phone"
        errors={state.errors}
        className="error"
      /> */}
      <label htmlFor="message" req="true">
        Wiadomość
      </label>
      <textarea
        id="message"
        name="message"
        rows="10"
        cols="10"
        maxLength="250"
      />

      {/* <ValidationError
        prefix="Wpisz treść wiadomości."
        field="message"
        errors={state.errors}
        className="error"
      /> */}
      <StyledTerms>
        <input type="checkbox" name="terms" className="checkboxInpt" />
        <label htmlFor="terms" req="true">
          Zapoznałam/łem się z informacją o
          <Link to="/terms">
            <span>administratorze i przetwarzaniu danych</span>
          </Link>
          .
        </label>
        {/* <ValidationError
          prefix="Zaznacz zgodę na przetwarzanie danych osobowych."
          field="terms"
          errors={state.errors}
          className="error"
        /> */}
      </StyledTerms>
      <Button type="submit" disabled={state.submitting} empty>
        Wyślij
      </Button>
      {state.errors.length > 0 && (
        <span className="error">
          Wypełnij poprawnie pola formularza oznaczone gwiadką.
        </span>
      )}
    </StyledForm>
  )
}

export default ContactForm
