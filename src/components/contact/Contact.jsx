import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title="map"src={map} height="300" width="400" name="foto"></iframe>
          </div>
          <div className='right row'>
            <h1>Contactanos</h1>
            <p>Estamos abiertos a cualquier sugerencia e inquietud.</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>DIRECCIÓN:</h4>
                <p>Merlo, Buenos Aires, Argentina</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> missnoemoni@gmail.com</p>
              </div>
              <div className='box'>
                <h4>TELEFONO:</h4>
                <p> +54 11 5142 4362</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Nombre y Apellido' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Asunto' />
              <textarea cols='30' rows='10'>
                Crea tu mensaje aqui...
              </textarea>
              <button className='primary-btn'>ENVIAR MENSAJE</button>
            </form>

            <h3>Siguenos aqui</h3>
            <span>FACEBOOK TWITTER INSTAGRAM </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
