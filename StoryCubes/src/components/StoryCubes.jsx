import { useState } from 'react';
import './StoryCubes.css';

function StoryCubes() {
    const [Emoji, setEmoji] = useState('');
    const [historia, setHistoria] = useState('');
    const [historiaEnviada, setHistoriaEnviada] = useState('');

    const emojis = ['😍', '🎶', '🥶', '🤬', '🤢', '🤒', '🥳', '🐶', '🐱', '🦈', '🦆', '🐧', '🐞', '👩‍💻', '🥺'];

    const sortearEmoji = () => {
        const sorteio = Math.floor(Math.random() * emojis.length);
        setEmoji(emojis[sorteio]);
    };

    const enviarHistoria = () => {
        setHistoriaEnviada(historia);
        setHistoria('');  // Limpa a caixa de texto após o envio
    };

    const recomeçar = () => {
        setHistoriaEnviada('');
        setHistoria('');
        setEmoji('');
    };

    return (
        <div>
<div className='container-header'>
  <img src="./Imagens/StoryC.png" alt="" className='img-story' />
  <p className='story-text'>Escreva sua própria história</p>
</div>
      <h2 className='container-texto'>Crie a sua própria história a partir do Emoji sorteado</h2>

<div className='button'>
    <button onClick={sortearEmoji} className='Sorteio'>Sortear Emoji</button>
</div>

<div className="emoji-display">
    {Emoji || 'Clique no botão para sortear um emoji'}
</div>

  {/* Caixa de texto para escrever a história */}
  <textarea 
      className="historia-input"
      placeholder="Escreva sua história aqui..."
      value={historia}
      onChange={(e) => setHistoria(e.target.value)}
  />
  {/* Botão para enviar a história */}
<div className='button'>
    <button onClick={enviarHistoria} className='Sorteio'>Enviar História</button>
</div>
  {/* Exibição da história enviada */}
  {historiaEnviada && (
      <div className="historia-container">
          <h3>Sua História:</h3>
          <p>{historiaEnviada}</p>
      </div>
  )}
  {/* Botão para recomeçar */}
<div className='button'>
    <button onClick={recomeçar} className='Sorteio'>Recomeçar</button>
</div>
        </div>
    );
}

export default StoryCubes;


