import Page from "./Page"

interface ProductDetailsProps {
  name?: string
  src: string
  text: string
}

export default function ProductDetails({ name, src, text }: ProductDetailsProps) {
  return (
    <>
      <Page
        className="flex flex-row items-center justify-center gap-25"
        headline={{ left: `${name}`, right: "Products" }}>
        <div>
          <img src={src} alt={name} />
        </div>
        <div className="w-1/2 text-2xl font-semibold">
          <p>{text}</p>
        </div>
      </Page>
    </>
  )
}
