import { useEffect, useState } from 'react';
import axios from 'axios';
import * as Dialog from "@radix-ui/react-dialog"
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal';

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
  const [open, setOpen] = useState(false);

  // altere aqui para funcionar o carrossel
  // arrumar...
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 5, // alterar para o funcionamento do carrossel
      spacing: 5,
    },
  })

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then(response => setGames(response.data))
  }, [])

  console.log(open)

  return (
    <div className='max-w-[1334px] xl:max-w-[750px] mx-auto flex flex-col items-center my-20 xl:my-6 sm:text-center'>
      <img src={Logo} alt="Logo" />
      <h1 className='text-white text-6xl xl:text-5xl mt-20 xl:mt-15 font-black'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div ref={sliderRef} className='keen-slider mt-16 sm:h-44 '>
        {games.map(game => {
          return (
            <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} count={game._count.Ad} />
          )
        })}
      </div>
      
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <CreateAdBanner />

        <CreateAdModal open={open} setOpen={setOpen} />
      </Dialog.Root>
    </div>
  )
}

export default App
