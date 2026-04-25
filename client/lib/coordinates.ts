/**
 * Formats decimal latitude/longitude into a degrees / decimal-minutes string,
 * e.g. `8° 38.76' S 115° 6.97' E`.
 */
export const formatCoordinates = ({
  lat,
  lng,
}: {
  lat: number
  lng: number
}): string => {
  const component = (value: number, pos: string, neg: string) => {
    const hemisphere = value >= 0 ? pos : neg
    const abs = Math.abs(value)
    const degrees = Math.floor(abs)
    const minutes = ((abs - degrees) * 60).toFixed(2)
    return `${degrees}° ${minutes}' ${hemisphere}`
  }

  return `${component(lat, "N", "S")} ${component(lng, "E", "W")}`
}
