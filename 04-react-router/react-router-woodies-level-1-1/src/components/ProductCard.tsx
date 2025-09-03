import LinkButton from "./LinkButton"

interface ProductCardProps {
  label: string
  src: string
  to: string
}

export default function ProductCard({ label, src, to }: ProductCardProps) {
  return (
    <>
      <div className="relative">
        <h4 className="absolute top-4 left-5 text-xl font-semibold">{label}</h4>
        <img src={src} alt={label} />
        <span className="absolute bottom-6 left-35">
          <LinkButton to={to} label="Shop now" />
        </span>
      </div>
    </>
  )
}
