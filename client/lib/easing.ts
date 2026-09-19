const cubicBezier =
  (x1: number, y1: number, x2: number, y2: number) => (t: number) => {
    const sampleX = (u: number) =>
      3 * (1 - u) ** 2 * u * x1 + 3 * (1 - u) * u ** 2 * x2 + u ** 3
    const sampleY = (u: number) =>
      3 * (1 - u) ** 2 * u * y1 + 3 * (1 - u) * u ** 2 * y2 + u ** 3
    let low = 0
    let high = 1
    let u = t
    for (let i = 0; i < 24; i++) {
      const x = sampleX(u)
      if (Math.abs(x - t) < 1e-4) break
      if (x < t) low = u
      else high = u
      u = (low + high) / 2
    }
    return sampleY(u)
  }

export const morph = cubicBezier(0.32, 0.72, 0, 1)
