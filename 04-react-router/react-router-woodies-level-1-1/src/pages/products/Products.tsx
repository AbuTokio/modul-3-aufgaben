import Page from "../../components/Page"
import ProductCard from "../../components/ProductCard"

export default function Products() {
  return (
    <Page className="flex justify-between items-center" headline={{ left: "What we have", right: "Products" }}>
      <ProductCard label="Jenson" src="/src/assets/img/Tisch.png" to="jenson" />
      <ProductCard label="Deon" src="/src/assets/img/Stuhl.png" to="deon" />
      <ProductCard label="Krisha" src="/src/assets/img/Schuesseln.png" to="krisha" />
    </Page>
  )
}
