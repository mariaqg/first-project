/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div class='contenedor-testimonio'>
      <img 
      class='imagen-testimonio' 
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='Foto de Emma'/> 
      <div class='contenedor-texto-testimonio'>
        <p class='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p class='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p class='texto-testimonio'>"{props.testimonio}"</p> 
      </div>
    </div>
  )
}

export default Testimonio;