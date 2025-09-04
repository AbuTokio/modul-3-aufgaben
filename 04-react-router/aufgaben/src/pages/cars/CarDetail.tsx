import { useParams } from "react-router"
import cars from "../../data/cars/data.json"
import type { Car } from "../../components/cars/CarCard"

export default function CarDetail() {
  const { id } = useParams()
  const carId = Number(id)

  const car = (cars as Car[]).find((c) => c.id === carId)

  if (!car) return <p>404, not found</p>

  return (
    <section>
      <h2>{car.CarMake}</h2>
      <h2>{car.carModel}</h2>
      <h2>{car.CarYear}</h2>
    </section>
  )
}
