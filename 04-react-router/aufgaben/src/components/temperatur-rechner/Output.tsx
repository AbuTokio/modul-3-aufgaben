interface OutputProps {
  text: string
}

export default function Output({ text }: OutputProps) {
  return <p>{text}</p>
}
