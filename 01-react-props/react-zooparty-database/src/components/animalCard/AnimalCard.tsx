import type { Animal } from "../../interfaces/Animal"

export default function AnimalCard({ animal }: Animal) {
  return (
    <>
      <div className="h-full product-card shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-start gap-6 transition-all duration-300 group">
        <div className="relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#715dcd] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-full after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-full group-hover:translate-x-full transition-all duration-300">
          <div className="relative top-50 translate-y-[-50%]">
            <p className="text-[128px]">{animal.emoji}</p>
          </div>
          <div className="tooltips w-[185%] absolute top-0 left-0 -translate-x-[150%] flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full">
            <p className="text-[#313f30] font-semibold text-3xl uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              {animal.name}
            </p>
            <ul className="flex flex-col items-start gap-2">
              <li className="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                <p className="font-semibold text-[#495c48]">🌍 Habitat: {animal.habitat}</p>
              </li>
              <li className="inline-flex gap-2 items-center justify-center group-hover:delay-300 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                <p className="font-semibold text-[#495c48]">⏳ Lifespan: {animal.lifespan} years</p>
              </li>
              <li className="inline-flex gap-2 items-center justify-center group-hover:delay-400 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                <p className="font-semibold text-[#495c48]">🥗 Diet: {animal.diet}</p>
              </li>
              <li className="inline-flex gap-2 items-center justify-center group-hover:delay-500 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                {animal.funFacts.length > 0 && (
                  <div>
                    <h3 className="font-semibold mt-3 mb-1 text-lg text-[#313f30]">Fun Facts:</h3>
                    <ol className="list-decimal list-inside flex flex-col items-start gap-2 text-base text-[#495c48]">
                      {animal.funFacts.map((fact, index) => (
                        <>
                          <li
                            key={index}
                            className="gap-2 items-center justify-center group-hover:delay-300 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                            {fact}
                          </li>
                        </>
                      ))}
                    </ol>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
