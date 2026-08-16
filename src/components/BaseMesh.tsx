import * as THREE from "three";
import React, { JSX, useRef, useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";
import baseMeshUrl from '../assets/models/BaseMesh-transformed.glb'

type ActionName = 'AboutMe' | 'AboutMe Breathing' | 'Breathing' | 'Hello'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.SkinnedMesh
    Cube: THREE.SkinnedMesh
    Hair002: THREE.SkinnedMesh
    Pants: THREE.SkinnedMesh
    Retopo_simply_coll009: THREE.SkinnedMesh
    Shirt001: THREE.SkinnedMesh
    Shirt003: THREE.SkinnedMesh
    Sphere001: THREE.SkinnedMesh
    ['MCH-foot_ikparentL']: THREE.Bone
    ['MCH-foot_ikparentR']: THREE.Bone
    ['MCH-hand_ikparentL']: THREE.Bone
    ['MCH-hand_ikparentR']: THREE.Bone
    ['MCH-thigh_ik_targetparentL']: THREE.Bone
    ['MCH-thigh_ik_targetparentR']: THREE.Bone
    ['MCH-torsoparent']: THREE.Bone
    ['MCH-upper_arm_ik_targetparentL']: THREE.Bone
    ['MCH-upper_arm_ik_targetparentR']: THREE.Bone
    root: THREE.Bone
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}
useGLTF.preload(baseMeshUrl);
const BaseMesh = (props: JSX.IntrinsicElements["group"]) => {
  const group = React.useRef<THREE.Group>()
  const { scene, animations } = useGLTF(baseMeshUrl)
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const helloAction = actions["Hello"];
    const breathingAction = actions["Breathing"];

    if (helloAction && breathingAction) {
      // 1. Play Hello once
      helloAction.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0).play();
      helloAction.clampWhenFinished = true;

      // 2. Chain to Breathing
      const onFinished = (event: any) => {
        if (event.action.getClip().name === "Hello") {
          breathingAction.reset().fadeIn(0.5).play();
        }
      };

      const mixer = helloAction.getMixer();
      mixer.addEventListener("finished", onFinished);

      return () => {
        mixer.removeEventListener("finished", onFinished);
      };
    }
  }, [actions]);

  useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material]

        materials.forEach((material) => {
          material.flatShading = true
          material.needsUpdate = true
        })
      }
    })
  }, [scene])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="LowPoly">
        <group name="rig001">
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-hand_ikparentL']} />
          <primitive object={nodes['MCH-hand_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
          <primitive object={nodes.root} />
        </group>
        <skinnedMesh name="Body" geometry={nodes.Body.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Body.skeleton} />
        <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Cube.skeleton} />
        <skinnedMesh name="Hair002" geometry={nodes.Hair002.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Hair002.skeleton} />
        <skinnedMesh name="Pants" geometry={nodes.Pants.geometry} material={materials.PaletteMaterial003} skeleton={nodes.Pants.skeleton} />
        <skinnedMesh name="Retopo_simply_coll009" geometry={nodes.Retopo_simply_coll009.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Retopo_simply_coll009.skeleton} />
        <skinnedMesh name="Shirt001" geometry={nodes.Shirt001.geometry} material={materials.PaletteMaterial004} skeleton={nodes.Shirt001.skeleton} />
        <skinnedMesh name="Shirt003" geometry={nodes.Shirt003.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Shirt003.skeleton} />
        <skinnedMesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Sphere001.skeleton} />
      </group>
    </group>
  )
};


export default BaseMesh;
