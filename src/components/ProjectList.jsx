import { ProjectBase } from "./ProjectBase"

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
					"/lunettes/05.2.webp",
					"/lunettes/05.1.webp",
					"/lunettes/03.2.webp",
					"/lunettes/03.1.webp",
					"/lunettes/01.2.webp",
					"/lunettes/01.1.webp",
					"/lunettes/02.2.webp",
					"/lunettes/02.1.webp",
					"/lunettes/04.2.webp",
					"/lunettes/04.1.webp",
				]}
				urlPreview={'url("/lunettes/icon_lunettes.webp")'}
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
					"/MYC/myc_03.webp",
					"/MYC/myc_02.webp",
					"/MYC/myc_04.webp",
					"/MYC/myc_05.webp",
					"/MYC/myc_01.webp",
				]}
				urlPreview={'url("/MYC/icon_myc.webp")'}
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
					"/nepal/Na.webp",
					"/nepal/Nc.webp",
					"/nepal/Nd.webp",
					"/nepal/Nf.webp",
					"/nepal/Ng.webp",
					"/nepal/Nh.webp",
				]}
				urlPreview={'url("/nepal/icon_nepal.webp")'}
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
			{/* Riva */}
			<ProjectBase
				baseState={false}
				title={"Yacht Riva"}
				pills={["Modélisation 3D"]}
				color1={"#da5432"}
				color2={"#da5432"}
				urls={[
					"/riva/riva_09.webp",
					"/riva/riva_10.webp",
					"/riva/riva_11.webp",
					"/riva/riva_07.webp",
					"/riva/riva_06.webp",
					"/riva/riva_05.webp",
					"/riva/riva_04.webp",

					"/riva/riva_08.webp",
					"/riva/riva_03.webp",
					"/riva/riva_02.webp",
				]}
				urlPreview={'url("/riva/icon_riva.webp")'}
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
				urls={["/homnes/H01.webp", "/homnes/H03.webp", "/homnes/H02.webp", "/homnes/H04.webp"]}
				urlPreview={'url("/homnes/icon_homnes.webp")'}
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
				urls={["/rocks/R02.webp", "/rocks/R01.webp", "/rocks/R03.webp", "/rocks/R04.webp"]}
				urlPreview={'url("/rocks/icon_rocks.webp")'}
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
					"/celeste/C04.webp",
					"/celeste/C03.webp",
					"/celeste/C01.webp",
					"/celeste/C02.webp",
					"/celeste/C05.webp",
				]}
				urlPreview={'url("/celeste/icon_celeste.webp")'}
			>
				<p className='text-left mb-3'>
					Sur base des dessins et fichiers (.dxf) déjà existant, création des fichiers 3D (.stl) compatible
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
					Modélisation du Wally Esence 143 pour présentation client, besoin de rendus réalistes, animations de
					caméra, texture procedurales, rendus 4K
				</p>
			</ProjectBase>
		</section>
	)
}
