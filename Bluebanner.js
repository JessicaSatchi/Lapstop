import React from 'react';
import "../App.css";
import { useForm, ValidationError } from '@formspree/react';


 
function Bluebanner () {
  const [state, handleSubmit] = useForm('mpznoknr');

   
  return (
    <div className='bluebanner'>
      <div className='bluebanner_text'>
        <h3 className='bluebanner-heading'>JOIN THE NEWSLETTER FAMILY!</h3>
        <p1 className="bluebanner-para">Join our newsletter family to recieve rescources on maxiumising the benefits of working remote. 
        Get our suggestions on the best public co-working spaces around the globe. Most imporantly, get frequent updates on the progressions on lapstop and have your say!</p1>
      </div>
      <form method="POST" onSubmit={handleSubmit} className='contactform'>


<label id="name-label" htmlFor="name">Name:</label>
<input id="name" type="text" name="name" required />
<ValidationError prefix="Name" field="name" errors={state.errors} />

<label id="email-label" htmlFor="email">Email:</label>
<input id="email" type="email" name="email" required />
<ValidationError prefix="Email" field="email" errors={state.errors} />

<button type="submit" disabled={state.submitting}>
  Submit
</button>
<ValidationError errors={state.errors} />
</form>
      </div>

  )

};




export default Bluebanner

