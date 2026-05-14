'use client';
import { FC, useMemo, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Scene: FC<{ items: any[] }> = ({ items }) => {
  const textures = useTexture(items.map(item => item.image));

  const positions = useMemo(() => {
    const count = items.length;
    const pos: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle for even spacing

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      // Multiplier (3.5) spreads the cluster out
      pos.push([x * 3.5, y * 3.5, z * 3.5]);
    }
    return pos;
  }, [items]);

  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => (
        <mesh key={i} position={positions[i]}>
          <planeGeometry args={[1.2, 0.8]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
        </mesh>
      ))}
    </group>
  );
};

const InfiniteMenu: FC<{ items: any[] }> = ({ items = [] }) => {
  const [cameraDist, setCameraDist] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      // Responsive camera distance
      setCameraDist(window.innerWidth < 768 ? 10 : 6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-full bg-black">
      <Canvas 
        camera={{ position: [0, 0, cameraDist], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1} />
        <Scene items={items} />
      </Canvas>
    </div>
  );
};

export default InfiniteMenu;