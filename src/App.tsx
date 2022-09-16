import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'

import Logo from "./assets/Logo.svg"
import Game1 from "./assets/game-1.png"

import { GameBanner } from './components/GameBanner'



function App() {

  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>
      <img src={Logo} alt="Logo" />
      <h1 className='text-white text-6xl mt-20 font-black'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl={Game1} title="League of Legends" count={4}/>
      </div>

      <div className='pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio 
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
