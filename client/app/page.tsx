import { SelectedWork } from "@/components/portfolio"
import { StructuredData } from "@/components/utils"
import { about } from "@/content/about"

export default function HomePage() {
  return (
    <>
      <StructuredData id="person" data={about.structuredData} />
      <h1 className="sr-only">{about.title}</h1>
      <div className="prose prose-xl dark:prose-invert">{about.content}</div>
      <SelectedWork />
    </>
  )
}
