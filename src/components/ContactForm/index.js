import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useForm, ValidationError } from "@formspree/react"
import styled from "styled-components"

import { StyledForm } from "./StyledContactForm"
import { Button } from "../atoms/Button"

const StyledInfo = styled.span`
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
`

const ContactForm = () => {
  const [state, handleSubmit] = useForm("ContactSelfMAX")

  const form = useRef(null)

  useEffect(() => {
    form.current.reset()
  }, [state])

  if (state.succeeded) {
    return (
      <StyledForm onSubmit={handleSubmit} ref={form}>
        <label htmlFor="name">Imię</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Adres e-mail</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="phone">Numer telefonu</label>
        <input id="phone" type="numeric" name="phone" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <label htmlFor="message">Wiadomość</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="10"
          maxLength="250"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div style={{ display: "flex" }}>
          <input type="checkbox" name="terms" />
          <label htmlFor="terms">
            Zapoznałam/łem się z informacją o
            <Link to="/terms">
              <span>administratorze i przetwarzaniu danych</span>
            </Link>
            .
          </label>
        </div>
        <Button type="submit" disabled={state.submitting} empty>
          Wyślij
        </Button>

        <StyledInfo>
          <p>Wiadomość wysłana pomyślnie.</p>
          <p>Dziękujemy!</p>
        </StyledInfo>
      </StyledForm>
    )
  }
  return (
    <StyledForm onSubmit={handleSubmit} ref={form}>
      <label htmlFor="name">Imię</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email">Adres e-mail</label>
      <input id="email" type="email" name="email" />
      <ValidationError
        prefix="Adres e-mail jest wymagany."
        field="email"
        errors={state.errors}
        className="error"
      />
      <label htmlFor="phone">Numer telefonu</label>
      <input id="phone" type="numeric" name="phone" />
      <ValidationError
        prefix="Numer telefonu powinien składać sie z cyfr."
        field="phone"
        errors={state.errors}
        className="error"
      />
      <label htmlFor="message">Wiadomość</label>
      <textarea
        id="message"
        name="message"
        rows="10"
        cols="10"
        maxLength="250"
      />
      <ValidationError
        prefix="Wpisz treść wiadomości."
        field="message"
        errors={state.errors}
        className="error"
      />
      <div style={{ display: "flex" }}>
        <input type="checkbox" name="terms" className="checkboxInpt" />
        <label htmlFor="terms">
          Zapoznałam/łem się z informacją o
          <Link to="/terms">
            <span>administratorze i przetwarzaniu danych</span>
          </Link>
          .
        </label>
        <ValidationError
          prefix="Zaznacz zgodę na przetwarzanie danych osobowych."
          field="terms"
          errors={state.errors}
          className="error"
        />
      </div>
      <Button type="submit" disabled={state.submitting} empty>
        Wyślij
      </Button>
    </StyledForm>
  )
}

export default ContactForm
