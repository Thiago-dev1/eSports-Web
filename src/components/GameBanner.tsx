import Game1 from "../assets/game-1.png"

interface GameProps {
    title: string,
    bannerUrl: string,
    count: number
}

export function GameBanner (props: GameProps) {
   
   
    return (
        <a className='relative rounded-lg overflow-hidden cursor-pointer hover:scale-110'>
        <img src={props.bannerUrl} alt="LOL" />
    
        <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='text-white font-bold block'>{props.title}</strong>
          <span className='text-zinc-300 text-sm block'>{props.count} anúncio(s)</span>
        </div>
      </a>
    )
}