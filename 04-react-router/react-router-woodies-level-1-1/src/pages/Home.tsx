import LinkButton from "../components/LinkButton"

export default function Home() {
  return (
    <>
      <div className="pl-25.5 flex justify-between items-center h-[calc(100vh-73px)]">
        <div className="flex flex-col gap-4">
          <p className="text-4xl text-text">
            Are you looking for <span className="font-bold">woodden furniture</span> for your place?
          </p>
          <h1 className="text-7xl font-bold text-text-h1">This is the Right Place</h1>
          <LinkButton to="products" label="Explore Categories" />
        </div>
        <img className="z-999" src="/src/assets/img/Home.png" alt="woodies-table" />
        <div className="absolute top-0 right-0 h-screen w-92.5 bg-pink"></div>
      </div>
    </>
  )
}
