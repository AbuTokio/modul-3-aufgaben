import type { Product } from "../../interfaces/Product"

export default function ProductCard({ product }: Product) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={product.imageUrl} alt={product.name} className="h-96 aspect-auto" />
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p className="text-xl text-green-800">${product.price.toFixed(2)}</p>
        <button className="px-32 py-4 rounded-4xl bg-[#F47187] text-white cursor-pointer hover:opacity-80 active:opacity-100 active:scale-95">
          BUY NOW
        </button>
      </div>
    </>
  )
}
