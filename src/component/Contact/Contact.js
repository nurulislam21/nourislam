import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact1 from "./contact1.jpg"
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bqvr6nk', 'template_4hqfe19', form.current, '25VbxUozexc7-MGnZ')
    alert(
          `your message was sent successfully`
        )
    e.target.reset()
  };
  // const [data, setData] = useState({
  //   fullname: "",
  //   phone: "",
  //   email: "",
  //   subject: "",
  //   message: "",})

  // const InputEvent = (event) => {
  //   const { name, value } = event.target

  //   setData((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     }
  //   })
  // }

  // const formSubmit = (event) => {
  //   event.preventDefault()
  //   alert(
  //     `My name is ${data.fullname}. 
	// My phone number is ${data.phone}. 
	// My email address is ${data.email}. 
	// My Subject on  ${data.subject}. 
	// Here is my message I want to say : ${data.message}. 
	// `
  //   )
  // }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Nurul Islam</h1>
                  {/* <p>Chief Operating Officer</p> */}
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +8801744247204</p>
                  <p>Email: noman1272003@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.linkedin.com/in/nurulislam21/"target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i class='fab fa-linkedin-in'></i>
                      </button>
                    </a>
                    <a href="https://www.facebook.com/nurulislamnoman.21/"target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i class='fab fa-facebook-f'></i>
                      </button>
                      </a>
                    <a href="https://www.instagram.com/nurul_islam.noman/"target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i class='fab fa-instagram'></i>
                      </button>
                    </a>
                    <a href="https://twitter.com/NurulislamN21"target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i className='fab fa-twitter'></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='right box_shodow'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type="text" name="fullname" />
                  </div>
                  {/* <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div> */}
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type="Email" name="email" />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type="Subject" name="subject" />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' />
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
