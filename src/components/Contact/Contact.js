import React from 'react';
import Cookies from 'js-cookie';

function Contact() {
  // Définition du cookie
  Cookies.set('nomDuCookie', 'valeurDuCookie', { sameSite: 'Strict' });

  // Récupération de la valeur du cookie
  const valeurDuCookie = Cookies.get('nomDuCookie');

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-content'>
          <h1 className='mb-4'>Contactez-moi !</h1>
          <p>
            Vous pouvez me contacter par téléphone au :{' '}
            <a href='tel:+33670963371'>+33 6 70 96 33 71</a>
          </p>
          <p>
            Vous pouvez également m'envoyer un e-mail à :{' '}
            <a href='mailto:leo.segalini@outlook.com'>leo.segalini@outlook.com</a>
          </p>
          {valeurDuCookie && (
            <p className='cookies'>La valeur du cookie est : {valeurDuCookie}</p>
          )}
        </div>
      </div>
  );
}

export default Contact;
