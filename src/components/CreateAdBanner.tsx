import * as Dialog from "@radix-ui/react-dialog"
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient mt-5 self-stretch xl:self-center rounded-lg overflow-hidden xl:w-[700px] sm:w-[380px]'>
            <div className='bg-[#2A2634] px-8 py-6 sm:px-6 sm:py-4 flex justify-between items-center xl:w-[700px] sm:w-[380px]'>
                <div>
                    <strong className='text-2xl xl:text-xl sm:text-base text-white font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400 block xl:text-[12px] sm:text-[10px]'>Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className='py-3 px-4 sm:py-1 sm:px-2 bg-violet-500 hover:bg-violet-600 text-white rounded flex gap-3 xl:text-[14px] '>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}