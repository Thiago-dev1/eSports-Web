import './styles/main.css'

import Logo from "./assets/Logo.svg"
import Game1 from "./assets/game-1.png"
import Game2 from "./assets/game-2.png"
import Game3 from "./assets/game-3.png"
import Game4 from "./assets/game-4.png"
import Game5 from "./assets/game-5.png"
import Game6 from "./assets/game-6.png"



function App() {
  
  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>
      <img src={Logo} alt="Logo" />
      <h1 className='text-white text-6xl mt-20 font-black'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'> 
        <a>
          <img src={Game1} alt="LOL" />
        </a>

        <a>
          <img src={Game2} alt="Dota 2" />
        </a>

        <a>
          <img src={Game3} alt="CS" />
        </a>

        <a>
          <img src={Game4} alt="Apex" />
        </a>

        <a>
          <img src={Game5} alt="Fortnite" />
        </a>
        
        <a>
          <img src={Game6} alt="WarCraft" />
        </a>
      </div>
    </div>
  )
}

export default App
