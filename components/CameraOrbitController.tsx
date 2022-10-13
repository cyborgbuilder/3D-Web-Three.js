import { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber'
import {  OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const CameraOrbitController = () => {
    const {camera, gl} = useThree();
  
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;

    
  }

export default CameraOrbitController;