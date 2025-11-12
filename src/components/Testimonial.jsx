import React from 'react';

const Testimonial = ({ item }) => {
  if (!item) {
    return null;
  }

  const { nombre, cargo, texto, foto } = item;

   return(
        <article className='testimonial-card'>
            <img src={foto} alt={`Foto de ${nombre}`} className='testimonial-photo'/>
            <h3 className='testimonial-name'>{nombre}</h3>
            <p className='testimonial-role'>{cargo}</p>
            <p className='testimonial-text'>{texto}</p>
        </article>
    );
};

export default Testimonial;

