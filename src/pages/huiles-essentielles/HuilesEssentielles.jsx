import React from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

// CSS
import './huilesessentielles.scss'

// Component
import Newsletter from '../../components/newsletter/Newsletter';
import Button from '../../components/button/Button'

const HuilesEssentielles = () => {
  return (
    <div id="page-huiles-essentielles">
          <Helmet>
            <title>Évasion - Laboratoire d'huiles essentielles</title>
            <meta name='description' content="Nos produits sont le fruit d'un savoir-faire unique, associant naturalité et innovation. Chaque formulation est développée avec exigence." />
          </Helmet>
          <div id="container-header-huile">   
            <div className='container-image'>
              <img alt="" src="../../public/assets/img/photos/pipette.jpg"></img>
            </div>
          </div>
          <section id="container-header-texte">
            <div className='container container-grid'>
              <div className='container-flex-texte grid5'>
                <h1 className='title-XXH'>Huiles essentielles</h1>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path d="M0,160L80,176C160,192,320,224,480,250.7C640,277,800,299,960,272C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </section>
          <section id="container-evader" className="container-dark">
            <div className='container container-grid'>
              <div className='container-image-border grid4'>
                <div className='border border-scale-center'>
                </div>
                <div className='container-image image-zoom'>
                  <img alt="Une femme qui se prélasse au soleil pour prendre du temps pour sois" src="../../public/assets/img/photos/photo-nature-1000px.jpg"/>
                </div>
              </div>

              <div className='container-flex-texte grid5'>
                <h2 className='title-XH' >S’évader un moment</h2>
                <p><span className='paragraphe-chapeau'>Prendre soin de soi, c’est aussi s’accorder le luxe de ralentir, de fermer les yeux et de respirer profondément</span></p>
                <p>Un parfum, une texture, une sensation... et vous voici transporté(e) en Bretagne, sur la Côte d'Azur ou au cœur du maquis corse. Nos soins sont pensés pour vous offrir une expérience sensorielle unique, inspirée des plus belles régions françaises.</p>
                <p>Chaque produit est une invitation au voyage, un rituel qui transforme l’ordinaire en un instant précieux. Une crème aux senteurs de lavande évoque une balade au cœur des champs ensoleillés, une huile aux agrumes réveille les souvenirs d’une escapade sur la Riviera... Laissez-vous porter par ces instants d’évasion et ressentez pleinement le plaisir du moment présent.</p>
                <p>Nos soins vous accompagnent dans cette quête de bien-être en vous offrant un moment suspendu, où seuls comptent les sensations et le plaisir des sens. Faites une pause, laissez-vous emporter, et savourez chaque instant.</p>
                <Button name='Découvrir nos gammes' lien='/nos-gammes' class="button-white" />
              </div>
            </div>  
          </section>
          <section id="container-citation" className='container-white'>
            <div className='container container-grid'>
              <h3 className='title-XH grid8'>Plongez dans un univers où chaque soin devient une invitation au voyage.</h3>
              <hr className='grid2c'></hr>
              <p className='grid8'>Évasion vous propose des produits cosmiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France.</p>
            </div>
          </section>
          <section id="section-huiles-essentielles" className='container-image-large'>
            <div className='container-image'>
              <img alt="" src="../../public/assets/img/photos/huiles-essentielles-2-1800px.jpg"></img>
            </div>
            <div className='container container-grid'>
              <div className='container-flex-texte container-white grid4'>
                <h2 className='title-XH'>Savoir-faire d'excellence</h2>
                <p><span className='paragraphe-chapeau'>L'excellence au service de votre bien-être.</span></p>
                <p>Nos produits sont le fruit d'un savoir-faire unique, associant naturalité et innovation. Chaque formulation est développée avec exigence, en partenariat avec des experts en cosmétologie et des producteurs locaux, pour garantir une qualité et une efficacité optimales.</p>
                <p>Nous privilégions des ingrédients bruts d'exception, sélectionnés avec soin pour leurs bienfaits reconnus. Nos processus de fabrication respectueux préservent toute la richesse des huiles essentielles et des actifs naturels afin d'offrir des soins à la fois doux, efficaces et sensoriels. Chaque produit est conçu pour s’intégrer parfaitement à votre rituel beauté et bien-être.</p>
                <Button name="En savoir plus" lien='/actualite/article/9/les-bienfaits-des-huiles-essentielles'/>
              </div>
            </div>
          </section>
          <Newsletter/>
    </div>
  )
}

export default HuilesEssentielles