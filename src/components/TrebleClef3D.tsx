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
      
      {/* Notas musicales flotantes - mejoradas */}
      {/* Primera nota - más grande y con más detalle */}
      <group position={[0.7, 1.2, 0]}>
        {/* Cabeza de la nota */}
        <mesh rotation={[0, 0, -Math.PI / 6]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial 
            color="#C9A36A" 
            metalness={0.95} 
            roughness={0.05}
            emissive="#D4AF37"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Tallo de la nota */}
        <mesh position={[0.08, 0.25, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.5, 16]} />
          <meshStandardMaterial 
            color="#C9A36A" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
        {/* Bandera de la nota */}
        <mesh position={[0.08, 0.45, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.15, 0.08, 0.02]} />
          <meshStandardMaterial 
            color="#C9A36A" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
      </group>
      
      {/* Segunda nota - más grande y con más detalle */}
      <group position={[0.95, 1.4, 0]}>
        {/* Cabeza de la nota */}
        <mesh rotation={[0, 0, -Math.PI / 6]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial 
            color="#C9A36A" 
            metalness={0.95} 
            roughness={0.05}
            emissive="#D4AF37"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Tallo de la nota */}
        <mesh position={[0.08, 0.25, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.5, 16]} />
          <meshStandardMaterial 
            color="#C9A36A" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
        {/* Bandera de la nota */}
        <mesh position={[0.08, 0.45, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.15, 0.08, 0.02]} />
          <meshStandardMaterial 
            color="#C9A36A" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
      </group>
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
