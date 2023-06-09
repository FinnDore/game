import { Canvas, useFrame } from "@react-three/fiber";
import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { type Mesh } from "three";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="description" content="game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Canvas className="h-full w-full">
          <ambientLight />
          <Game />
        </Canvas>
      </main>
    </>
  );
};

export default Home;

const Game = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh | null>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (mesh.current) mesh.current.rotation.x += delta;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <>
      <mesh
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[-2, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[2, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    </>
  );
};
