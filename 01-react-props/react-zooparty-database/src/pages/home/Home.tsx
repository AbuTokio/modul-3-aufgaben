import AnimalCard from "../../components/animalCard/AnimalCard"
import animals from "../../data/Animals"
import type { Animal } from "../../interfaces/Animal"

export default function Home() {
  return (
    <>
      <div className="m-8 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 place-items-center">
        {animals.map(({ animal }: Animal, index: number) => {
          return (
            <div key={index} className="border border-gray-200 rounded-2xl shadow-sm w-full h-[500px] overflow-hidden">
              <AnimalCard animal={animal} />
            </div>
          )
        })}
      </div>
    </>
  )
}
