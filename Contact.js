
import React from 'react';
import "../App.css";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm('mpznoknr');
  
    if (state.succeeded) {
      return <p>Thanks for your submission!</p>;
    }
  
    return (
      <form method="POST" onSubmit={handleSubmit} className='contactform'>


        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
  
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
  
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>

    );
  }