import { useEffect, useState } from "react"
import { CreditCard } from "react-kawaii"

type Mood = "happy" | "sad" | "shocked" | "blissful" | "lovestruck" | "excited" | "ko" | undefined

export default function HomeBank() {
  const [amount, setAmount] = useState<number>(0)
  const [balance, setBalance] = useState<number>(0)
  const [mood, setMood] = useState<Mood>("happy")

  useEffect(() => {
    if (balance === 0) setMood("shocked")
    if (balance < 0 && balance >= -100) setMood("sad")
    if (balance < -100) setMood("ko")
    if (balance > 0 && balance <= 100) setMood("happy")
    if (balance > 100) setMood("excited")
  }, [balance])

  return (
    <div className="bg-bank-bg h-screen flex flex-col justify-center items-center">
      <CreditCard size={480} mood={mood} color="#84d1fb" />
      <div className="-mt-20">
        <h1 className="text-4xl text-white font-bold text-center mb-8">SUPER BANK</h1>
        <div className="flex flex-col justify-center items-center gap-4 bg-bank-card w-xl px-16 py-8 border rounded-2xl">
          <p className="font-bold">Dein Girokonto</p>
          <p className="text-4xl">{balance}€</p>
          <input
            className="px-8 py-4 bg-white w-full text-center border rounded-sm"
            type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Gib einen Geldbetrag ein"
          />
          <div className="flex gap-2">
            <button
              className="px-6 py-2 font-bold border rounded-sm cursor-pointer active:scale-95"
              onClick={() => setBalance(balance + amount)}>
              Einzahlen
            </button>
            <button
              className="px-6 py-2 font-bold border rounded-sm cursor-pointer active:scale-95"
              onClick={() => setBalance(balance - amount)}>
              Auszahlen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
