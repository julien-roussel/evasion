import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import supabase from "../../supabase.js"
import functionActu from './functionActualite.js'

// CSS
import './actualite.scss'

// COMPONENT
import Button from '../../components/button/Button.jsx'

const ItemArticle = (props) => {
  return (
    <div className='container-post'>
      <div className='border'>
        <span className='meta-post-date'>{functionActu.dateMonthDay(props.date)}</span>
        <Button lien={props.lien} class='button-read' name='Lire la suite'/>
      </div>
      <div  className='container-post-meta'>
        <Link to={props.lien} className='article-image'>
          <img alt={props.title} src={ 'http://localhost:5173'+(props.image)+'-400px.jpg'} />
        </Link>
        <div className='container-meta'>
          <h3 className='meta-post-title title-post-item'>{props.title}</h3>
          <span className='meta-post-category'>{props.category}</span>
          <hr></hr>
          <p>{functionActu.resume(props.chapeau)}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemArticle