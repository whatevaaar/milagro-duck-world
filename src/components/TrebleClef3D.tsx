import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function TrebleClefShape() {
  return (
    <group rotation={[0, 0, 0]} scale={1.3}>
      {/* Spiral superior - parte característica de la clave de sol */}
      <mesh position={[0, 1.2, 0]}>
        <torusGeometry args={[0.25, 0.12, 32, 64, Math.PI * 2]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Curva superior derecha */}
      <mesh position={[0.3, 1.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <torusGeometry args={[0.15, 0.12, 32, 64, Math.PI]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Tallo vertical largo */}
      <mesh position={[0.15, 0.3, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 2.2, 32]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Círculo central característico */}
      <mesh position={[0.15, -0.1, 0]}>
        <torusGeometry args={[0.35, 0.12, 32, 64]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Curva inferior */}
      <mesh position={[0.2, -0.8, 0]} rotation={[0, 0, -Math.PI / 3]}>
        <torusGeometry args={[0.2, 0.12, 32, 64, Math.PI * 1.3]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Bolita inferior */}
      <mesh position={[0.35, -1.1, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Notas musicales flotantes */}
      {/* Primera nota */}
      <mesh position={[0.8, 1.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0.8, 1.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 16]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      {/* Segunda nota */}
      <mesh position={[1.0, 1.5, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[1.0, 1.7, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 16]} />
        <meshStandardMaterial 
          color="#C9A36A" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export const TrebleClef3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.8} />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#FFD700" />
        <TrebleClefShape />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Suspense>
    </Canvas>
  );
};
