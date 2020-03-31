import React from 'react';
import './styles.css';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export default function StillDoubts() {
  const data = useStaticQuery(graphql`
    query ImgStillDoubt {
      image: file(relativePath: { eq: "comparativeBoard.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section class="container stillDoubt">
      <div className="first-content">
        <div className="first-content-description">
          <h3>Ainda se convencendo?</h3>
          <p>
            Relaxa! A gente entende! Assiste o video pra ver a opiniāo completa e independente de
            alguém que já comprou o Aplique BelaBelinda.
          </p>
        </div>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/vDlIaC_79mk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div className="second-content">
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/lRDcl7rYnPI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/MH_kDlgWLPk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/H5clAuZeZR8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div className="third-content">
        <div>
          <h3>Veja o Quadro Comparativo:</h3>
          <p>
            Por nāo causar danos, nāo precisar de manutençāo ou de cabeleireiro e ser mais acessível
            financeiramente, o aplique BelaBelinda é comprovadamente superior a todos os outros
            tipos de aplique.
          </p>
        </div>
        <Img fluid={data.image.childImageSharp.fluid} alt="Logo da Bela Belinda" />
      </div>
    </section>
  );
}
