import React from 'react'
import PageHeader from '../../template/page-header'
import homeIcon from '../../images/tony.jpg';

export default props => (
    <div>
        <PageHeader name="Sobre" small="Tony Montana"/>
        <h3>Início da carreira</h3>
        <p>Quando Tony era apenas um simples cubano seu amigo Manolo "Manny" Ribera arranjou um acordo com um chefão de Miami, que pediu um serviço a eles, em troca receberiam o green card. Após conseguir o Green Card, Tony trabalhou como lavador de pratos em uma lanchonete,e por não se dar muito bem com o seu patrão,ele se demitiu logo na primeira oportunidade que teve de entrar para a mafia. Um dos traços marcantes do personagem e que é desenvolvido com o decorrer do filme é o uso abusivo de cocaína por parte de Tony. Tony é conhecido por ser um assassino frio e cauteloso, com suas vitímas.</p>
        <h3>Vida pessoal</h3>
        <ul>
            <li>A causa de sua cicatriz foi uma briga quando criança.</li>
            <li>Seu pai lhe abandonou quando ainda era criança.</li>
            <li>O relacionamento com sua mãe e sua irmã era muito difícil.</li>
            <li>Casado com Elvira, ex-esposa de seu antigo patrão.</li>
        </ul>
        <img src={homeIcon} />
    </div>    
)