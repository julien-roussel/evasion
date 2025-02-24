import React from 'react'
import { Link } from 'react-router';

// CSS
import '../../scss/custom.scss'
import './button.scss';

const ButtonPicto = (props) => {
  return (
    <Link to={props.lien} className={props.class ? props.class + ' button-picto' : 'button-picto'  }>
        <img alt={props.name} src={props.img}/>
    </Link>
  )
}

export default ButtonPicto