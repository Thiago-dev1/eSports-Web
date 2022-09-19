import { FormEvent, useEffect, useState } from "react"
import axios from "axios"
import * as Dialog from "@radix-ui/react-dialog"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as TaggleGroup from "@radix-ui/react-toggle-group"
import { Check, GameController } from "phosphor-react"

import { Input } from "./Form/Input"
import { SubmitHandler, useForm, FormState } from "react-hook-form"
import { Label } from "./Form/Label"


interface Game {
    id: string,
    title: string,
}

interface CreateAdProps {
    game: string,
    name: string,
    discord: string,
    yearsPlaying: string,
    hourStart: string,
    hourEnd: string,
}

export function CreateAdModal() {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateAdProps>()

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)

    useEffect(() => {
        axios("http://localhost:3333/games")
            .then(response => setGames(response.data))
    }, [])


    const handleCreadtAd: SubmitHandler<CreateAdProps> = async (data, event) => {
        event?.preventDefault()

        console.log(data.hourEnd)
        console.log(typeof data.hourEnd)

        const hourEnd =  data.hourEnd

        try {
            await axios.post("http://localhost:3333/ads", {

                gameId: data.game,
                name: data.name,
                discord: data.discord,
                yearsPlaying: Number(data.yearsPlaying),
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            })

            alert("Anúncio criado com sucesso!!!")
        } catch (err) {
            alert("Erro")
            console.log(err)
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded w-[480px] shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

                <form onSubmit={handleSubmit(handleCreadtAd)} className='mt-6 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="game" className='font-semibold'>Qual o game</label>
                        <select
                            id="game"
                            className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
                            {...register("game")}
                            defaultValue=""
                        >
                            <option defaultValue="">Selecione o game que deseja jogar</option>

                            {games.map(game => {
                                return <option key={game.id} value={game.id}>{game.title}</option>
                            })}
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="name" title="Seu nome  (ou nickname)" error={errors.name} />
                        <Input
                            id="name"
                            placeholder="Como te chamam dentro do game?"
                            error={errors.name}
                            {...register("name", { required: "Digite seu nick" })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="yearsPlaying" title="Joga há quantos anos" error={errors.yearsPlaying} />
                            <Input error={errors.yearsPlaying} id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" {...register("yearsPlaying", { required: "Coloque nem que seja 0"})} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="discord" title="Qual seu Discord" error={errors.discord}/>
                            <Input  error={errors.discord} id="discord" placeholder="Usuario#0000" {...register("discord", { required: "Falta aqui." })} />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="weekDays" title="Quando custema jogar?"/>
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
                            <Label htmlFor="hourStart" title="Qual horário do dia" />
                            <div className="grid grid-cols-2 gap-2">
                                <Input error={errors.hourStart} id="hourStart" type="time" placeholder="De" {...register("hourStart", {required: "Esse não pode faltar..."})} />
                                <Input error={errors.hourEnd} id="hourEnd" type="time" placeholder="Até" {...register("hourEnd", {required: "Esse não pode faltar..."})} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 flex gap-2 text-sm items-center">
                        <Checkbox.Root
                            className="w-6 h-6 p-1 bg-zinc-900 rounded"
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceChannel(true)
                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }}
                        >
                            <Checkbox.CheckboxIndicator>
                                <Check className="w-4 h-4 text-emerald-400" />
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