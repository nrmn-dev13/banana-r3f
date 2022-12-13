import { Suspense, useState } from 'react'
import Canvas from './layout/Canvas'
import Home from './page/Home'
import { FadeIn, LeftMiddle } from './layout/styles'


export default function App() {
  const [speed, set] = useState(1)
  return (
    <>
      <Suspense fallback={null}>
        <Canvas speed={speed} />
        <FadeIn />
      </Suspense>
      <Home />
      <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
    </>
  )
}