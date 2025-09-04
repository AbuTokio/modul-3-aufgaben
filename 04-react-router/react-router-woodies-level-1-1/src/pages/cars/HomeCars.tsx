import CarCard, { type Car } from "../../components/cars/CarCard"
import cars from "../../data/cars/data.json"

export default function HomeCars() {
  const list = cars as Car[]

  return (
    <section>
      <div className="grid">
        {list.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}
