import React from 'react'

function StoryCubes() {
    const [Emoji, setEmoji] = useState()

  const emojis = ['😍', '🎶', '🥶', '🤬', '🤢', '🤒', '🤠', '🤡', '🥳', '🥸', '👽', '💩', '🐵', '🐶', '🐱', '🐷', '🐔', '🦈', '🦆', '🦐', '🐧', '🐞', '👸', '🕵️', '🎅', '🥷', '🧑‍🍳', '👩‍💻']
  const sortearEmoji = () => {
      const sorteio = Math.floor(Math.random() * emojis.length);
      const emojisSorteado = emojis[sorteio];
      setEmoji (emojisSorteado);
  };
  return (
    <div>
    <div className='container-header'>
       <img src="./Imagens/StoryC.png" alt="" className='img-story'/>
      <p>Escreva sua própria história</p>
    </div>
        <div>
    <h2 className='explicacao'>Crie a sua própria história a partir da Imagem sorteada</h2>
    

    
    <div className='button'>
      <button onClick={sortearEmoji} className='Sorteio'>Sortear Emoji</button>
    </div>

    <div style={{fontSize:'500%', display:'flex', justifyContent: 'center'}}>
    {Emoji ? Emoji : 'oii'}
  </div >
  </div>  
    </div>
  )
}

export default StoryCubes
