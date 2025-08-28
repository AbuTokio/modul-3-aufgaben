import ProductCard from "../../components/productCard/ProductCard"
import { products } from "../../data/Products"
import type { Product } from "../../interfaces/Product"

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-8 mt-8">
        {products.map(({ product }: Product, index: number) => {
          return (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          )
        })}
      </div>
    </>
  )
}
