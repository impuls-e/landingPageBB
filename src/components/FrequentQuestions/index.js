import React from 'react';
import './styles.css';
import { FaQuestionCircle } from 'react-icons/fa';
export default function FrequentQuestions() {
  return (
    <React.Fragment>
      <div className="container frequent-questions">
        <h3>Perguntas Frequentes</h3>
        <div className="wrap-questions">
          <div className="questions">
            <p>
              <FaQuestionCircle /> Quais sāo as formas de pagamento?
            </p>
            <strong>
              Como trabalhamos com produtos importados, nós usamos Cartāo de Crédito e PayPal.
            </strong>
            <p>
              <FaQuestionCircle /> O aplique é simples de usar?
            </p>
            <strong>
              É super simples! Basta colocar o elástico na cabeça e cobrir com o seu cabelo natural.
              Pronta em menos de 1 minuto!
            </strong>
            <p>
              <FaQuestionCircle /> O material é bom?
            </p>
            <strong>
              É ótimo! Usamos fibras SYNT™ para garantir os melhores apliques do mercado idênticos
              aos naturais(só que 100x mais acessível).
            </strong>
            <p>
              <FaQuestionCircle /> Tem garantia?
            </p>
            <strong>
              Garantia 100% Blindada! Caso haja qualquer dano de transporte ou defeito, nós te
              reembolsamos completamente.
            </strong>
            <p>
              <FaQuestionCircle /> Quanto tempo demora pra chegar?
            </p>
            <strong>
              Os nossos Apliques sāo importados diretamente da Fábrica Internacional para sua casa!
              Desse jeito conseguimos manter os melhores preços para nossas clientes. Os nossos
              produtos costumam levar de 15 a 30 dias úteis para chegar.
            </strong>
            <p>
              <FaQuestionCircle />  Quanto custa o frete?
            </p>
            <strong>
              Nesse momento estamos com uma promoçāo super limitada com frete grátis para todo o
              Brasil!!!
            </strong>
            <p>
              <FaQuestionCircle /> Os produtos sāo originais?
            </p>
            <strong>
              Sim! Os produtos sāo enviados de fabricantes selecionados criteriosamente em 3
              diferentes países.
            </strong>
          </div>
          <div className="questions">
            <p>
              <FaQuestionCircle /> Vai funcionar para mim?
            </p>
            <strong>
              Com toda a certeza! Temos 18 tons diferentes de cabelos e qualquer dúvida estamos à
              disposiçāo!
            </strong>
            <p>
              <FaQuestionCircle /> Quantos apliques eu devo comprar?
            </p>
            <strong>
              1 pode ser o suficiente para um ótimo efeito, mas 85% de nossas clientes preferem
              levar 2 apliques para garantir o volume dobrado!
            </strong>
            <p>
              <FaQuestionCircle /> Posso comprar em alguma loja física?
            </p>
            <strong>
              Nāo! BelaBelinda é uma marca oficial e nossos apliques importados só podem ser
              adiquiridos NA NOSSA LOJA ONLINE!
            </strong>
            <p>
              <FaQuestionCircle /> Pode fazer Chapinha ou Babyliss?
            </p>
            <strong>
              Pode sim! Os apliques tem resistência de até 120°, entāo é só garantir que ele nāo
              passe dessa faixa!
            </strong>
            <p>
              <FaQuestionCircle /> Quantas gramas tem o Aplique?
            </p>
            <strong>Aproximadamente 110 gramas.</strong>
            <p>
              <FaQuestionCircle /> Meu cabelo é um pouco mais curto, posso cortar?
            </p>
            <strong>
              Claro que pode! O aplique BelaBelinda pode ser cortado na altura que você desejar!
            </strong>
            <p>
              <FaQuestionCircle /> Há alguma taxa internacional nos correios?
            </p>
            <strong>Nāāāo! As taxas sāo pré-pagas.</strong>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
