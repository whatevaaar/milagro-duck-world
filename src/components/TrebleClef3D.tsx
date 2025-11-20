import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function TrebleClefShape() {
  return (
    <group rotation={[0, 0, 0]}>
      {/* Main spiral body */}
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI * 1.5]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Upper curve */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.2, 0.08, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Vertical stem */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 1.5, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Bottom curve */}
      <mesh position={[0, -0.6, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <torusGeometry args={[0.15, 0.08, 16, 32, Math.PI * 1.2]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Dot at bottom */}
      <mesh position={[0.15, -0.9, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.2} />
      </mesh>
    </group>
  );
}

export const TrebleClef3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
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
