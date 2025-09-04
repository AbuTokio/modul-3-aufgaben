import type React from "react"
import PageTitle from "./PageTitle"

interface PageProps {
  headline: { left: string; right: string }
  className?: string
  children?: React.ReactNode
}

export default function Page({ headline, className, children }: PageProps) {
  return (
    <>
      <div className="px-25 py-18.5">
        <PageTitle left={headline.left} right={headline.right} />
        <div className="py-10">
          <div className={className}>{children}</div>
        </div>
      </div>
    </>
  )
}
