<img src="./src/images/logo-big.png" align="center"></img>
<h1 align="center">BelaBelinda</h1>
<p align="center">Projeto de criação de uma <strong>LANDING PAGE </strong> para a empresa BelaBelinda</p>

## Descrição
A Bela Belinda, maior empresa do segmento APLIQUES no Brasil, está com problemas no carregamento de suas landing pages, que são as maiores responsáveis pelo trafêgo de usuários no site principal. 
Está é uma das landing pages atuais([BelaBelinda](https://belabelinda.com/pages/aplique-belabelinda )),que foi usada de exemplo para comparações nesse texto.

## Solução
Desenvolvemos uma [nova](https://belabelinda.netlify.com/) versão da landingpage usando Gatsby, segue abaixo algumas informações sobre as melhorias.

> Informações tiradas do site [PageSpeedInsights](https://developers.google.com/speed/pagespeed/insights/) > - By Google

- A nota da página subiu de **6** para **84** pontos.
- O tempo que o primeiro conteúdo é pintado na tela caiu de **7.5s** para **3.1s**.
- O índice de velocidade foi de **16.9s** de lentidão para **3.1s**.
- O tempo que a página leva para ficar completamente interativa caiu de **37.3s** para **4.4s**. 

Segue abaixo prints comparativos da página que não foi feita com Gatsby e a que foi feita:

PageSpeedTest WordpressLike                              |  PageSpeedTest Gatsby
:-------------------------------------------------------:|:----------------------------------------------------:
<img src="./src/images/static/pagespeedtest-before.png" align="center"/>   |  <img src="./src/images/static/pagespeedtest-after.png" align="center"/>

## Production

OBS: Recomendo dar uma lida sobre Gatsby antes de mergulhar direto no projeto. No final deste documento tem um link para Quick Start do GatbsyJS.

Para rodar o projeto localmente, após clonar esse repositório, você deve entrar na pasta raiz do projeto e rodar os comandos:

Instalar as bibliotecas & dependências do projeto:
yarn install

Subir um servidor local:
gatsby develop


### LINKS

[Gatsby Quick Start](https://www.gatsbyjs.org/docs/quick-start/) 

[PageSpeedTest WordpressLike](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbelabelinda.com%2Fpages%2Faplique-belabelinda)

[PageSpeedTest Gatsby](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbelabelinda.netlify.com%2F)

