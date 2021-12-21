import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Newsletter = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zx20hdh', 'template_42653dd', form.current, 'user_PjStWfbukuOioJgEcFMkf')
      .then((result) => {
          console.log(result.text);
          alert("Thank You for joining with us !!!");
      }, (error) => {
          console.log(error.text);
      });
     };
    return (
        <div>
              <form ref={form} onSubmit={sendEmail}>
                <input type="email" name="user_email" />
                <button type="submit" value="Send" >Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter
