export default function Footer() {
  return (
    <>
      <footer className="flex justify-between bg-footer-bg relative w-full">
        <div className="border-t-1 border-[#c4c4c4] my-14 ml-26.5 w-full z-10 pt-4">
          <img className="mt-5" src="/src/assets/img/Logo.png" alt="" />
          <ul className="flex flex-col gap-3 mt-5 text-text-footer text-sm">
            <li>(012) 8967453</li>
            <li>woodies@gmail.com</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
        <img src="/src/assets/img/Footer.png" alt="" />
        <div className="absolute bottom-2 w-full">
          <p className="text-text-footer text-xs font-semibold text-center py-4">© 2020 WOODIES</p>
        </div>
      </footer>
    </>
  )
}
