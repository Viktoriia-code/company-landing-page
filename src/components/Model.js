import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import circleImg from '../assets/circle.png';
import { Suspense, useRef, useMemo } from 'react';

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const pointsRef = useRef();
  const t = useRef(0);

  const f = 0.002;
  const a = 3;
  const count = 122;
  const sep = 3;

  // Создаем начальные позиции
  const { positions, xzArray } = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    const xzArray = [];
    
    let index = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        
        positions[index] = x;
        positions[index + 1] = 0;
        positions[index + 2] = z;
        
        xzArray.push([x, z]);
        index += 3;
      }
    }
    return { positions, xzArray };
  }, [count, sep]);

  useFrame(() => {
    t.current += 15;
    
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      const positionAttribute = geometry.attributes.position;
      const posArray = positionAttribute.array;
      
      for (let i = 0; i < xzArray.length; i++) {
        const [x, z] = xzArray[i];
        posArray[i * 3 + 1] = Math.sin(f * (x ** 2 + z ** 2 + t.current)) * a;
      }
      
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={imgTex}
        color={'black'}
        size={0.2}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
      />
    </points>
  );
}

function Model() {
  return (
    <div style={{ width: '100vw', height: '50vh' }}>
      <Canvas camera={{ position: [0, 20, 100], fov: 75 }}>
        <Suspense fallback={null}>
          <Points />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Model;