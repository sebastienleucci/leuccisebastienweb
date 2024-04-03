import { ProjectBaseOld } from "./ProjectBaseOld"
import { ProjectBase } from "./ProjectBase"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import * as THREE from "three"

export function ProjectList() {
	const gltfLun01 = useLoader(GLTFLoader, "/Model_Lun_01_not_baked.glb")
	const gltfLun02 = useLoader(GLTFLoader, "/Model_Lun_02_not_baked.glb")

	const glassMaterial = new THREE.MeshPhysicalMaterial({
		color: 0xcc8564,
		metalness: 0.2,
		roughness: 0.1,
		transmission: 0.8,
	})
	const glassMaterial2 = new THREE.MeshPhysicalMaterial({
		color: 0xa42c37,
		metalness: 0.2,
		roughness: 0.1,
		transmission: 0.8,
	})

	gltfLun01.scene.children[1].material = glassMaterial
	gltfLun02.scene.children[0].material = glassMaterial2

	return (
		<section className='-mt-16'>
			<ProjectBase
				baseState={false}
				title={"Collection de lunettes - Ghyara"}
				pills={["Design de produit", "Modélisation 3D"]}
				color1={"#bf854b"}
				color2={"#9f481f"}
				urls={[
					"/lunettes/M5.1.webp",
					"/lunettes/M5.2.webp",
					"/lunettes/M1.1.webp",
					"/lunettes/M1.2.webp",
					"/lunettes/M2.1.webp",
					"/lunettes/M2.2.webp",
					"/lunettes/M3.1.webp",
					"/lunettes/M3.2.webp",
					"/lunettes/M4.1.webp",
					"/lunettes/M4.2.webp",
				]}
			>
				<div>
					<p className='text-left mb-3'>
						Création et la conception d’une collection de 5 modèles de lunettes de soleil. Imaginer,
						dessiner, modéliser et créer les plans techniques pour l'envoi aux industriels.
						<br />
						<br />
						&bull; Voir lunettes en situation
						<a
							href='https://www.instagram.com/ghyara.co/'
							target='_blank'
							className='text-[#bf854b] font-bold underline pl-1'
						>
							Ghyara Instagram
						</a>
						<br />
						&bull; Disponibles à la vente sur
						<a
							href='https://ghyara.co/'
							target='_blank'
							className='text-[#bf854b] font-bold underline pl-1'
						>
							Ghyara.co
						</a>
						<br />
					</p>
				</div>
				<primitive object={gltfLun01.scene} scale={23} rotation={[0.45, 0, 0]} position={[0, 0.3, 0]} />
			</ProjectBase>
			<ProjectBase
				baseState={false}
				title={"Yacht Wally Esense"}
				pills={["Modélisation 3D"]}
				color1={"#1360a7"}
				color2={"#1360a7"}
				urls={[
					"/wally/wally_01.webp",
					"/wally/wally_02.webp",
					"/wally/wally_03.webp",
					"/wally/wally_04.webp",
					"/wally/wally_05.webp",
					"/wally/wally_06.webp",
					"/wally/wally_07.webp",
					"/wally/wally_08.webp",
				]}
				urlPreview={'url("/wally/wally_icon.webp")'}
			>
				<p className='text-left mb-3'>
					Création et la conception d’une collection de 5 modèles de lunettes de soleil. Imaginer, dessiner,
					modéliser et créer les plans techniques pour l'envoi aux industriels.
				</p>
				<mesh />
			</ProjectBase>
			<ProjectBaseOld
				baseState={false}
				title={"Premiers prototypes - Ghyara"}
				pills={["Design de produit", "Modélisation 3D"]}
				color1={"#af1515"}
				color2={"#e8a967"}
				urls={[
					"/lunettes/M1.1.webp",
					"/lunettes/M1.2.webp",
					"/lunettes/M2.1.webp",
					"/lunettes/M2.2.webp",
					"/lunettes/M3.1.webp",
					"/lunettes/M3.2.webp",
					"/lunettes/M4.1.webp",
					"/lunettes/M4.2.webp",
					"/lunettes/M5.1.webp",
					"/lunettes/M5.2.webp",
				]}
			>
				<p>
					Missionné pour la création et la conception d’une collection de 5 modèles de lunettes de soleil. Ces
					modèles sont les premiers prototypes visuels qui méritent à mon avis d'avoir une place parmis ces
					autres projets.
				</p>
				<primitive object={gltfLun02.scene} scale={23} rotation={[0.45, 0, 0]} position={[0, 0.3, 0]} />
			</ProjectBaseOld>
			<ProjectBaseOld
				baseState={false}
				title={"Wally Esence 143"}
				pills={["Modélisation 3D", "Animation 3D"]}
				color1={"#1515aa"}
				color2={"#8888ff"}
				urls={["/Hexa_Rose_02.png", "/Hexa_Rose_02.png", "/Hexa_Rose_02.png", "/Hexa_Rose_02.png"]}
				urlPreview={'url("/lunettes/M5.1.webp")'}
			>
				<p>
					Missionné pour la création et la conception d’une collection de 5 modèles de lunettes de soleil. Ces
					modèles sont les premiers prototypes visuels qui méritent à mon avis d'avoir une place parmis ces
					autres projets.
				</p>
				<mesh />
			</ProjectBaseOld>
			<ProjectBaseOld
				baseState={false}
				title={"Bonjour"}
				pills={["Modélisation 3D", "Animation 3D"]}
				color1={"#1515aa"}
				color2={"#8888ff"}
				urls={["/Hexa_Rose_02.png", "/Hexa_Rose_02.png", "/Hexa_Rose_02.png", "/Hexa_Rose_02.png"]}
			>
				<p>
					Missionné pour la création et la conception d’une collection de 5 modèles de lunettes de soleil. Ces
					modèles sont les premiers prototypes visuels qui méritent à mon avis d'avoir une place parmis ces
					autres projets.
				</p>
				<mesh />
			</ProjectBaseOld>
		</section>
	)
}
