import { useEffect, useState } from "react"

import * as Dialog from "@radix-ui/react-dialog"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as TaggleGroup from "@radix-ui/react-toggle-group"
import { Check, GameController } from "phosphor-react"

import { Input } from "./Form/Input"



interface Game {
    id: string,
    title: string,
  }

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])

    useEffect(() => {
        fetch("http://localhost:3333/games")
          .then(response => response.json())
          .then(data => setGames(data))
      }, [])

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded w-[480px] shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

                <form className='mt-6 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="game" className='font-semibold'>Qual o game</label>
                        <select 
                            id="game"
                            className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
                            defaultValue=""
                        >
                            <option value="" disabled selected>Selecione o game que deseja jogar</option>

                            {games.map(game => {
                                return <option key={game.id} value={game.id}>{game.title}</option>
                            })}
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='font-semibold'>Seu nome  (ou nickname)</label>
                        <Input id="name" placeholder="Como te chamam dentro do game?" />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga há quantos anos</label>
                            <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual seu Discord</label>
                            <Input id="discord" placeholder="Usuario#0000" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays">Quando custema jogar?</label>

                            <TaggleGroup.Root type="multiple" className="grid grid-cols-4 gap-2"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                <TaggleGroup.Item
                                    value="0"
                                    title="Domingo"
                                    className={`w-8 h-8 roundded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    D
                                </TaggleGroup.Item>
                                <TaggleGroup.Item
                                    value="1"
                                    title="Segunda"
                                    className={`w-8 h-8 roundded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </TaggleGroup.Item>
                                <TaggleGroup.Item
                                    value="2"
                                    title="Terça"
                                    className={`w-8 h-8 roundded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    T
                                </TaggleGroup.Item>
                                <TaggleGroup.Item
                                    value="3"
                                    title="Quarta"
                                    className={`w-8 h-8 roundded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    Q
                                </TaggleGroup.Item>
                                <TaggleGroup.Item
                                    value="4"
                                    title="Quinta"
                                    className={`w-8 h-8 roundded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    Q
                                </TaggleGroup.Item>
                                <TaggleGroup.Item
                                    value="5"
                                    title="Sexta"
                                    className={`w-8 h-8 roundded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </TaggleGroup.Item>
                                <TaggleGroup.Item
                                    value="6"
                                    title="Sábado"
                                    className={`w-8 h-8 roundded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </TaggleGroup.Item>
                            </TaggleGroup.Root>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Qual horário do dia</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input id="hourStart" type="time" placeholder="De" />
                                <Input id="hourEnd" type="time" placeholder="Até" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 flex gap-2 text-sm flex items-center">
                        <Checkbox.Root className="w-6 h-6 p-1 bg-zinc-900 rounded">
                            <Checkbox.CheckboxIndicator>
                                <Check  className="w-4 h-4 text-emerald-400" />
                            </Checkbox.CheckboxIndicator>
                        </Checkbox.Root>
                        Custumo me conectar ao chat de voz
                    </div>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close
                            className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold"
                        >
                            Cancelar
                        </Dialog.Close>

                        <button
                            type="submit"
                            className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3"

                        >
                            <GameController size={24} />
                            Encontrar Duo
                        </button>
                    </footer>
                </form>

            </Dialog.Content>
        </Dialog.Portal>
    )
}