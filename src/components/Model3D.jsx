import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model3D(props) {
  const { scene } = useGLTF("/models/Big Leaf Plant.glb"); 

  return <primitive object={scene} {...props} />;
}
