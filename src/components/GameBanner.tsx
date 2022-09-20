import "keen-slider/keen-slider.es"

interface GameProps {
    title: string,
    bannerUrl: string,
    count: number
}

export function GameBanner (props: GameProps) {
   
   
    return (
        <a className='keen-slider__slide relative rounded-lg overflow-hidden cursor-pointer hover:border-2 border-green-400 hover:scale-110'>
        <img src={props.bannerUrl} alt="LOL" />
    
        <div className='w-full pt-16 pb-4 px-4 bg-bg-game-gradient absolute bottom-0 sm:bottom-14 left-0 right-0'>
          <strong className='text-white font-bold block sm:opacity-0'>{props.title}</strong>
          <span className='text-zinc-300 text-sm block'>{props.count} anúncio(s)</span>
        </div>
      </a>
    )
}