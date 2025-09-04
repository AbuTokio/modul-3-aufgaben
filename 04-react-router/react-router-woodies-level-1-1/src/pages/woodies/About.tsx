import Page from "../../components/woodies/Page"

export default function About() {
  return (
    <Page headline={{ left: "Who we are", right: "About Us" }}>
      <div className="flex justify-between items-center">
        <img src="/src/assets/img/About.png" alt="" />
        <div className="flex flex-col gap-4 max-w-1/2">
          <p className="text-4xl font-extrabold text-text">
            WOODIES <span className="font-semibold">is the</span> home of modern wood furniture
          </p>
          <p className="text-2xl font-semibold">the answer to your need for furniture with shapes, sizes and colors.</p>
        </div>
      </div>
    </Page>
  )
}
