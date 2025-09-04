import { useEffect, useState } from "react"
import Box from "../../components/temperatur-rechner/Box"
import Output from "../../components/temperatur-rechner/Output"

export default function HomeTemperatur() {
  const [celsius, setCelsius] = useState<number | string>(0)
  const [fahrenheit, setFahrenheit] = useState<number | string>(0)
  const [output, setOutput] = useState<string>("")

  const celiusToFahrenheit = (celsius: number) => {
    setCelsius(celsius)
    setFahrenheit(((celsius * 9) / 5 + 32).toFixed(2))
  }

  const fahrenheitToCelsius = (fahrenheit: number) => {
    setFahrenheit(fahrenheit)
    setCelsius((((fahrenheit - 32) * 5) / 9).toFixed(2))
  }

  useEffect(() => {
    if (Number(celsius) >= 100) {
      setOutput("The water is boiling!")
    } else {
      setOutput("The water is not boiling.")
    }
  }, [celsius])

  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen">
      <Box einheit="Celsius" value={celsius} onChange={celiusToFahrenheit} />
      <Box einheit="Fahrenheit" value={fahrenheit} onChange={fahrenheitToCelsius} />
      <Output text={output} />
      {Number(celsius) >= 280 && <img src="https://c.tenor.com/MYZgsN2TDJAAAAAC/tenor.gif" />}
    </div>
  )
}
