import { MagnifyingGlassPlus } from 'phosphor-react'

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
        <a className='relative rounded-lg overflow-hidden cursor-pointer hover:scale-110'>
          <img src={Game1} alt="LOL" />

          <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden cursor-pointer hover:scale-110'>
          <img src={Game2} alt="Dota 2" />

          <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>3 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden cursor-pointer hover:scale-110'>
          <img src={Game3} alt="CS" />

          <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Contuer Strike</strong>
            <span className='text-zinc-300 text-sm block'>11 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden cursor-pointer hover:scale-110'>
          <img src={Game4} alt="Apex" />

          <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Apex</strong>
            <span className='text-zinc-300 text-sm block'>2 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden cursor-pointer hover:scale-110'>
          <img src={Game5} alt="Fortnite" />

          <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>9 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden cursor-pointer hover:scale-110'>
          <img src={Game6} alt="WarCraft" />

          <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>WarCraft</strong>
            <span className='text-zinc-300 text-sm block'>1 anúncios</span>
          </div>
        </a>
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
