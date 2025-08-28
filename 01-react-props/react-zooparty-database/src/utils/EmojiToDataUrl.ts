export default function emojiToDataUrl(emoji: string, bg = "#ffffff"): string {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0%' stop-color='${bg}'/>
        <stop offset='100%' stop-color='#e7ebda'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)' rx='24' ry='24'/>
    <text x='50%' y='52%' font-size='260' text-anchor='middle' dominant-baseline='middle'>${emoji}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
