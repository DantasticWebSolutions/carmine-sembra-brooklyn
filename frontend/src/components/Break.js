/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/break.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.macarena.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <primitive object={nodes.mixamorigHips} />

          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials["Ch03_Body.002"]}
            skeleton={nodes.Ch03.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/break.glb");
