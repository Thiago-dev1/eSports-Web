import { useEffect, useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog"
import { GameController } from 'phosphor-react';

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

import './styles/main.css'

import Logo from "./assets/Logo.svg"



interface Game {
  bannerUrl: string,
  id: string,
  title: string,
  _count: {
    Ad: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>
      <img src={Logo} alt="Logo" />
      <h1 className='text-white text-6xl mt-20 font-black'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} count={game._count.Ad} />
          )
        })}
      </div>
      
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          
          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <form className='mt-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="game" className='font-semibold'>Qual o game</label>
                <input 
                  id="game" 
                  type="text" 
                  placeholder='Selecione o game que deseja jogar'
                  className='bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500'
                  />
              </div>

              <div>
                <label htmlFor="name">Seu nome  (ou nickname)</label>
                <input id="name" type="text" placeholder='Como te chamam dentro do game?' />
              </div>

              <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga há quantos anos</label>
                  <input id="yearsPlaying" type="text" placeholder='Tudo bem ser ZERO'/>
                </div>
                <div>
                  <label htmlFor="discord">Qual seu Discord</label>
                  <input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="weekDays">Quando custema jogar?</label>
                  
                </div>
                <div>
                  <label htmlFor="hourStart">Qual horário do dia</label>
                  <div>
                    <input id='hourStart' type="time" placeholder="De"/>
                    <input id="hourEnd" type="time" placeholder="Até"/>
                  </div>
                </div>
              </div>

              <div>
                <input type="checkbox" name="" id="" />
                Custumo me conectar ao chat de voz
              </div>

              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController />
                  Encontrar Duo
                </button>
              </footer>
            </form>
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
