import type { NextPage } from 'next'
import { Canvas, useThree } from '@react-three/fiber'
import CameraOrbitController from '../components/CameraOrbitController'
import AnimatedBox from '../components/AnimatedBox'
import { OrbitControls, Stats } from '@react-three/drei'





const Home: NextPage = () => {
  const testing = true;

  return (
    <div className='container'>
      <Canvas>
        {testing ? <Stats />: null};
        {testing ? <axesHelper  args={[4]} />: null};
        <OrbitControls />
      <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
      <AnimatedBox  />
    </Canvas>
    </div>
    
  )
}

export default Home
