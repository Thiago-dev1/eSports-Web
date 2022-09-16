import { useEffect, useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog"

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
          
          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2'>
            <Dialog.Title>Publique um anúncio</Dialog.Title>

            ddasasw
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
