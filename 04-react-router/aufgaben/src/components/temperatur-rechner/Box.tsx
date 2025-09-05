interface BoxProps {
  einheit: string
  value: number | string
  onChange: (value: number) => void
}

export default function Box({ einheit, value, onChange }: BoxProps) {
  return (
    <div className="p-8 w-1/4 border flex flex-col justify-center items-center gap-4">
      <p>Schreibe Temperatur in {einheit}</p>
      <input
        className="border rounded-sm"
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}
