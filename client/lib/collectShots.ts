import type { Project, Shot } from "@/content/types"

export const collectShots = ({ lead, blocks }: Project): Shot[] => {
  const first: Shot[] =
    lead.type === "triptych"
      ? lead.shots.map((shot) => ({
          ...shot,
          caption: lead.caption,
          kind: "device",
        }))
      : [lead.shot]
  const rest = blocks.flatMap((block): Shot[] => {
    switch (block.type) {
      case "figure":
        return [block.shot]
      case "figures":
        return [...block.shots]
      case "phones":
        return block.shots.map((shot) => ({ ...shot, kind: "phone" }))
      default:
        return []
    }
  })
  return [...first, ...rest]
}
