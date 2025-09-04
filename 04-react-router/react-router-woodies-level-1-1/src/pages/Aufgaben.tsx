import Aufgabe from "../components/Aufgabe"

export default function Aufgaben() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Aufgaben</h1>
        <ul className="flex flex-col gap-4">
          <Aufgabe label="Woodies" />
          <Aufgabe label="SimpleBlog" />
          <Aufgabe label="Cars" />
          <Aufgabe label="Bank" />
          <Aufgabe label="Temperatur-Rechner" />
        </ul>
      </div>
    </>
  )
}
