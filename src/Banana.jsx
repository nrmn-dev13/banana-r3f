import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useGLTF, Detailed, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

function Model({ index, z, speed }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const { nodes, materials } = useGLTF("/banana-transformed.glb");

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
    // rY: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z
      );
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
    // ref.current.rotation.set(
    //   (data.rX += 0.001),
    //   (data.rY += 0.001),
    //   (data.rZ += 0.001)
    // );
    // ref.current.position.set(data.x * width, (data.y += 0.025), z);
    // if (data.y > height) data.y = -height;
  });
  return (
    <mesh
      ref={ref}
      geometry={nodes.banana.geometry}
      material={materials.skin}
      material-emisive="orange"
    />
  );
}

export default function Banana({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    // No need for antialias (faster), dpr clamps the resolution to 1.5 (also faster than full resolution)
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
      <color attach="background" args={['#ffbf40']} />
      <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="orange" />
      {/* Using cubic easing here to spread out objects a little more interestingly, i wanted a sole big object up front ... */}
      {Array.from({ length: count }, (_, i) => <Model key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */)}
      <Environment preset="sunset" />
      {/* Multisampling (MSAA) is WebGL2 antialeasing, we don't need it (faster) */}
      <EffectComposer multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.5} bokehScale={11} height={700} />
      </EffectComposer>
    </Canvas>
  )
}
