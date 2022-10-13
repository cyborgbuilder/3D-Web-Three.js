import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei';
import { BoxHelper } from 'three'

type Props = {
  isTesting: boolean
}

const AnimatedBox = () => {

    const meshRef = useRef<THREE.Mesh>(null);
     useHelper(meshRef, BoxHelper, "blue");
    useFrame(() => {
      console.log("Hi");
      if(meshRef.current){
        meshRef.current.rotation.x += 0.01;
      }
    });
  
    return(
      <mesh ref={meshRef} scale={[0.8, 0.8, 0.8]}>
          <boxGeometry />
          <meshStandardMaterial />
      </mesh>
    );
  }

  export default AnimatedBox