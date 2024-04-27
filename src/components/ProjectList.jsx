import { ProjectBase } from "./ProjectBase"
import { ProjectWebWide } from "./ProjectWebWide"

export function ProjectList() {
	return (
		<section className='w-full -mt-16'>
			{/* Lunettes Ghyara */}
			<ProjectBase
				baseState={false}
				title={"Collection de lunettes - Ghyara"}
				pills={["Design de produit", "Modélisation 3D"]}
				color1={"#bf854b"}
				color2={"#9f481f"}
				urls={[
					"/projets/lunettes/05.2.webp",
					"/projets/lunettes/05.1.webp",
					"/projets/lunettes/03.2.webp",
					"/projets/lunettes/03.1.webp",
					"/projets/lunettes/01.2.webp",
					"/projets/lunettes/01.1.webp",
					"/projets/lunettes/02.2.webp",
					"/projets/lunettes/02.1.webp",
					"/projets/lunettes/04.2.webp",
					"/projets/lunettes/04.1.webp",
				]}
				urlPreview={'url("/projets/lunettes/icon_lunettes.webp")'}
			>
				<div>
					<p className='text-left mb-3'>
						<b>Création et conception d’une collection</b> de 5 modèles de lunettes de soleil. Imaginer,
						dessiner, modéliser et création des plans techniques pour industriels.
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
			</ProjectBase>
			{/* MYC */}
			<ProjectBase
				baseState={false}
				title={"Monaco Yacht Club - 70 ans"}
				pills={["Modélisation 3D", "Animation 3D"]}
				color1={"#be2822"}
				color2={"#be2822"}
				urls={[
					"/projets/MYC/myc_03.webp",
					"/projets/MYC/myc_02.webp",
					"/projets/MYC/myc_04.webp",
					"/projets/MYC/myc_05.webp",
					"/projets/MYC/myc_01.webp",
				]}
				urlPreview={'url("/projets/MYC/icon_myc.webp")'}
			>
				<p className='text-left mb-3'>
					À l'occasion des 70 ans du Yacht Club de Monaco, animation d'un livre 3D pour rappels des évènement
					marquants du club. <b>Rendu final: 18000 images / 48fps / Full HD</b>
				</p>
			</ProjectBase>
			{/* Nepal */}
			<ProjectBase
				baseState={false}
				title={"Documentaire : Le Dernier Dauphin"}
				pills={["Modélisation 3D", "Animation 3D"]}
				color1={"#089384"}
				color2={"#089384"}
				urls={[
					"/projets/nepal/Na.webp",
					"/projets/nepal/Nc.webp",
					"/projets/nepal/Nd.webp",
					"/projets/nepal/Nf.webp",
					"/projets/nepal/Ng.webp",
					"/projets/nepal/Nh.webp",
				]}
				urlPreview={'url("/projets/nepal/icon_nepal.webp")'}
			>
				<div className='mb-3'>
					<p className='text-left'>
						Réalisé et co-réalisé par Kevin Sempé et Jimmy Golaz, missionné pour la création de cartes
						animées en 3D réalistes et schématiques. (4K ProRes / 25fps) <br />
						Teaser:
						<a
							href='https://www.youtube.com/watch?v=Vz1kKn5-gJs'
							target='_blank'
							className='text-[#089384] font-bold underline pl-1'
						>
							Le Dernier Dauphin de la Rivière Sacrée
						</a>
					</p>
				</div>
			</ProjectBase>
			{/* Web Neobrutalism */}
			<ProjectWebWide
				baseState={false}
				title={"Design Study: Neobrutalism"}
				pills={["Design UI", "React", "Tailwind"]}
				color1={"#000000"}
				color2={"#000000"}
				urlPreview={'url("/projets/neo/icon_neo.webp")'}
			>
				<p className='text-left mb-3 w-full'>
					Découverte du Néobrutalism, courant de design mineur ayant ses spécificités propres, coloré, flat
					design, contours...
				</p>
			</ProjectWebWide>
			{/* Riva */}
			<ProjectBase
				baseState={false}
				title={"Yacht Riva"}
				pills={["Modélisation 3D"]}
				color1={"#da5432"}
				color2={"#da5432"}
				urls={[
					"/projets/riva/riva_09.webp",
					"/projets/riva/riva_10.webp",
					"/projets/riva/riva_11.webp",
					"/projets/riva/riva_07.webp",
					"/projets/riva/riva_06.webp",
					"/projets/riva/riva_05.webp",
					"/projets/riva/riva_04.webp",

					"/projets/riva/riva_08.webp",
					"/projets/riva/riva_03.webp",
					"/projets/riva/riva_02.webp",
				]}
				urlPreview={'url("/projets/riva/icon_riva.webp")'}
			>
				<p className='text-left mb-3'>
					Missionné pour la modélisation du yacht RIVA par Monaco Piscine et y appliquer des modifications
					techniques et structurelles. (modifications non publiques)
				</p>
			</ProjectBase>
			{/* Homnes */}
			<ProjectBase
				baseState={false}
				title={"Maison-Atelier Homnès"}
				pills={["Modélisation 3D", "Animation 3D"]}
				color1={"#989986"}
				color2={"#989986"}
				urls={[
					"/projets/homnes/H01.webp",
					"/projets/homnes/H03.webp",
					"/projets/homnes/H02.webp",
					"/projets/homnes/H04.webp",
				]}
				urlPreview={'url("/projets/homnes/icon_homnes.webp")'}
			>
				<p className='text-left mb-3'>
					Mise en scène du packaging et des shampoings naturels. Animation 3D et Loop des shampoings pour le
					kit coffret découverte.
				</p>
			</ProjectBase>
			{/* Rocks */}
			<ProjectBase
				baseState={false}
				title={"Piscine Rocks"}
				pills={["Modélisation 3D"]}
				color1={"#2f4ea4"}
				color2={"#2f4ea4"}
				urls={[
					"/projets/rocks/R02.webp",
					"/projets/rocks/R01.webp",
					"/projets/rocks/R03.webp",
					"/projets/rocks/R04.webp",
				]}
				urlPreview={'url("/projets/rocks/icon_rocks.webp")'}
			>
				<p className='text-left mb-3'>
					Sur base des plans et dessins du projets, réalisation de la piscine et de l'environnement en 3D pour
					présentation client.
				</p>
			</ProjectBase>
			{/* Celeste */}
			<ProjectBase
				baseState={false}
				title={"Guitare Céleste MCI"}
				pills={["Modélisation 3D"]}
				color1={"#9f4525"}
				color2={"#9f4525"}
				urls={[
					"/projets/celeste/C04.webp",
					"/projets/celeste/C03.webp",
					"/projets/celeste/C01.webp",
					"/projets/celeste/C02.webp",
					"/projets/celeste/C05.webp",
				]}
				urlPreview={'url("/projets/celeste/icon_celeste.webp")'}
			>
				<p className='text-left mb-3'>
					Sur base des dessins et fichiers (.dxf) déjà existant, création des fichiers 3D (.stl) compatibles
					pour les machines de conception.
					<br />
					Voir la collection
					<a
						href='https://celeste-guitars.com/collection-mc1/'
						target='_blank'
						className='text-[#9f4525] font-bold underline pl-1'
					>
						Céleste MCI
					</a>
				</p>
			</ProjectBase>
			{/* Wally */}
			<ProjectBase
				baseState={false}
				title={"Yacht Wally Esense 143"}
				pills={["Modélisation 3D", "Animation 3D"]}
				color1={"#1360a7"}
				color2={"#1360a7"}
				urls={[
					"/projets/wally/wally_01.webp",
					"/projets/wally/wally_02.webp",
					"/projets/wally/wally_03.webp",
					"/projets/wally/wally_04.webp",
					"/projets/wally/wally_05.webp",
					"/projets/wally/wally_06.webp",
					"/projets/wally/wally_07.webp",
					"/projets/wally/wally_08.webp",
				]}
				urlPreview={'url("/projets/wally/wally_icon.webp")'}
			>
				<p className='text-left mb-3'>
					Modélisation du Wally Esence 143 pour présentation client, besoin de rendus réalistes, animations de
					caméra, texture procedurales, rendus 4K...
				</p>
			</ProjectBase>
			{/* Projets Divers */}
			<ProjectBase
				baseState={false}
				title={"Projets 3D Divers"}
				pills={["Modélisation 3D", "Animation 3D"]}
				color1={"#0215b5"}
				color2={"#0215b5"}
				urls={[
					"/projets/divers/01.webp",
					"/projets/divers/02.webp",
					"/projets/divers/03.webp",
					"/projets/divers/05.webp",
					"/projets/divers/06.webp",
					"/projets/divers/11.webp",
					"/projets/divers/07.webp",
					"/projets/divers/04.webp",
				]}
				urlPreview={'url("/projets/divers/00.webp")'}
			>
				<p className='text-left mb-3'>
					Des projets professionnels mais aussi personnels, dans cette section vous trouverez différents
					rendus 3D et vous aurez un aperçu d'autres projets et possibilités.
				</p>
			</ProjectBase>
		</section>
	)
}
