import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function TrebleClefShape() {
  return (
    <group rotation={[0, 0, 0]} scale={1.2}>
      {/* Main spiral body - más grueso */}
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[0.3, 0.15, 32, 64, Math.PI * 1.5]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.8} 
          roughness={0.1}
          emissive="#FFA500"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Upper curve - más grueso */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.2, 0.15, 32, 64, Math.PI]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.8} 
          roughness={0.1}
          emissive="#FFA500"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Vertical stem - más grueso */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.5, 32]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.8} 
          roughness={0.1}
          emissive="#FFA500"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Bottom curve - más grueso */}
      <mesh position={[0, -0.6, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <torusGeometry args={[0.15, 0.15, 32, 64, Math.PI * 1.2]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.8} 
          roughness={0.1}
          emissive="#FFA500"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Dot at bottom - más grande */}
      <mesh position={[0.15, -0.9, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.8} 
          roughness={0.1}
          emissive="#FFA500"
          emissiveIntensity={0.3}
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
