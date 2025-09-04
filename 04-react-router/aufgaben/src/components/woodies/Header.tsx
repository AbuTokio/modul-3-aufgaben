import NavigationLink from "./NavigationLink"

export default function Header() {
  return (
    <header className="px-20 py-5 flex justify-between items-center z-999 relative">
      <img src="/src/assets/img/Logo.png" alt="woodies-logo" />
      <nav className="flex gap-12">
        <NavigationLink to="/woodies" label="Home" />
        <NavigationLink to="about" label="About Us" />
        <NavigationLink to="products" label="Products" />
      </nav>
    </header>
  )
}
