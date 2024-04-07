import CopyToClipboard from "react-copy-to-clipboard"

export function About() {
	const midA = "V1Y2Npc2ViYXN0aWVuLnByb0BnbWFpbC5jb2"

	return (
		<div className='mySection mb-20'>
			{/* Contact */}
			<section className='flex flex-col-reverse sm:flex-row items-center gap-8 mt-12 lg:mt-28'>
				<div className='text-left lg:-mt-5 flex-1 w-full'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>
						Comment contacter ce jeune homme ?
					</h1>
					<div className='flex flex-wrap align-middle justify-left gap-3 mt-4 lg:mt-12'>
						<p className='sm:text-lg sm:leading-6'>
							Mail: <b>{atob("bG" + midA + "0=")}</b>
						</p>
						<CopyToClipboard text={atob("bG" + midA + "0=")}>
							<button className='px-5 py-1 rounded-md ml-2 -mt-[6px] border-black border-2 hover:bg-black hover:text-white active:bg-white active:text-black'>
								<b className='sm:text-lg sm:leading-6'>Copier</b>
							</button>
						</CopyToClipboard>
					</div>
					<p className='sm:text-lg sm:leading-6 mt-3 lg:mt-7'>
						Instagram: <b>@sebastienleucci</b>
					</p>
				</div>
			</section>
			{/* Description */}
			<section className='flex flex-col sm:flex-row items-center gap-8 mt-14 lg:mt-20 w-full'>
				<div className='max-w-52 rounded-2xl overflow-hidden'>
					<img src='/src/assets/img/about_01.webp' className='transition duration-500 hover:scale-110' />
				</div>
				<div className='text-left mt-3 lg:-mt-5'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>Description succincte</h1>
					<p className='sm:text-lg sm:leading-6'>
						Aujourd'hui j'ai la chance de travailler sur des projets radicalement différents, entre{" "}
						<b>design de produit</b>, <b>visuels pour des documentaires</b> et{" "}
						<b>création d’interface web</b> j’adore découvrir de nouvelles techniques et domaines
						régulièrement.
					</p>
				</div>
			</section>
			{/* Formations */}
			<section className='flex flex-col-reverse sm:flex-row items-center gap-10 mt-12 lg:mt-16'>
				<div className='text-left lg:-mt-5 flex-1'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>Formations</h1>
					<p className='sm:text-lg sm:leading-6 '>
						<b>•</b> Formation initiale en Design de Produit (Bachelor) <br />
						<b>• Indépendant depuis bientôt 4 ans </b> <br />
						<b>•</b> Professionnel et passionné par la modélisation 3D <br />
						<b>•</b> Formé à la création de sites Web (OpenClassrooms.com / Grafikart.fr) <br />
						<b>•</b> Formé à la création de sites Web 3D (ThreeJS-Journey.com)
					</p>
				</div>
				<div className='w-52 rounded-2xl overflow-hidden'>
					<img src='/src/assets/img/about_03.webp' className='transition duration-500 hover:scale-110' />
				</div>
			</section>
			{/* Photo */}
			<section className='items-left gap-8 mt-12 lg:mt-16'>
				<div className='text-left lg:-mt-5'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>Photo</h1>
					<div className="w-[12rem] lg:w-[15rem] aspect-square bg-[url('/src/assets/img/moi_500.web.webp')] bg-cover rounded-2xl"></div>
				</div>
			</section>
			{/* Compétences */}
			<section className='flex flex-col sm:flex-row items-center gap-8 mt-12 lg:mt-20'>
				<div className='text-left lg:-mt-5 flex-1 w-full'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>Compétences</h1>
					<div className='flex gap-2 mt-2 lg:mt-8'>
						<p className='sm:text-lg sm:leading-6 flex-1'>
							<b>3D</b>
							<br /> Modélisation
							<br /> Sculpting
							<br /> Texturing
							<br /> Rigging
							<br /> Animation
							<br /> Export d’assets
						</p>
						<p className='sm:text-lg sm:leading-6 flex-1 '>
							<b>Web</b>
							<br /> Design UX/UI
							<br /> React
							<br /> Tailwind
							<br /> ThreeJS
							<br /> HTML / CSS /JS
						</p>
						<p className='sm:text-lg sm:leading-6 flex-1 '>
							<b>Autres</b>
							<br /> Da Vinci Resolve
							<br /> Premiere Pro
							<br /> Photoshop
							<br /> Illustrator
						</p>
					</div>
				</div>
				<div className='w-52 rounded-2xl mt-3 sm:mt-0 overflow-hidden'>
					<img src='/src/assets/img/about_04.webp' className='transition duration-500 hover:scale-110' />
				</div>
			</section>
			{/* Phrase accroche */}
			<section className='flex flex-col-reverse sm:flex-row items-center gap-8 mt-12 lg:mt-16 w-full'>
				<div className='max-w-52 rounded-2xl overflow-hidden mt-3 sm:mt-0'>
					<img src='/src/assets/img/about_02.webp' className='transition duration-500 hover:scale-110' />
				</div>
				<div className='text-left lg:-mt-5'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>Phrase d'accroche</h1>
					<p className='sm:text-lg sm:leading-6'>
						Créer des projets cohérents et avoir <b>le souci du détail</b> sont des notions
						particulièrement importantes et si vous avez lu jusqu'ici, bien joué, franchement j'aurais pas
						lu.
					</p>
				</div>
			</section>
			{/* Entourage */}
			<section className='flex flex-col sm:flex-row items-center gap-8 mt-10 lg:mt-28'>
				<div className='text-left lg:-mt-5 flex-1'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>Être bien entouré</h1>
					<p className='sm:text-lg sm:leading-6'>
						Pouvoir <b>évoluer en équipe</b> est une notion importante, c'est pourquoi je travaille avec{" "}
						<b>des partenaires fiables</b> spécialisés dans <b>des domaines complémentaires</b> qui peuvent
						convenir pour des projets d'ampleur.
					</p>

					<div className='flex flex-wrap gap-4 mt-10 m-auto'>
						<a
							className='m-auto mt-0 hover:-translate-y-4 transition duration-500'
							href='https://www.linkedin.com/in/jimmy-golaz-76346579/'
							target='_blank'
						>
							<div className="w-[10rem] lg:w-[14.5rem] aspect-square bg-[url('/src/assets/img/pro_jim.webp')] bg-cover rounded-2xl"></div>
							<p className='sm:text-lg sm:leading-6 mt-2 w-[10rem] lg:w-[14.5rem]'>
								<b>Jimmy Golaz</b> <br />
								• Directeur de production <br />
								• Réalisateur <br />• Cadreur sous-marin
							</p>
						</a>
						<a className='m-auto mt-0 hover:-translate-y-4 transition duration-500' target='_blank'>
							<div className="w-[10rem] lg:w-[14.5rem] aspect-square bg-[url('/src/assets/img/pro_jul.webp')] bg-cover rounded-2xl"></div>
							<p className='sm:text-lg sm:leading-6 mt-2 w-[10rem] lg:w-[14.5rem]'>
								<b>Julie Gamba</b> <br />
								• Directrice artistique <br />
								• Motion Designer <br />• Graphiste
							</p>
						</a>
						<a
							className='m-auto mt-0 hover:-translate-y-4 transition duration-500'
							href='https://www.costanzamariabarbiniai.com/'
							target='_blank'
						>
							<div className="w-[10rem] lg:w-[14.5rem] aspect-square bg-[url('/src/assets/img/pro_cost.webp')] bg-cover rounded-2xl"></div>
							<p className='sm:text-lg sm:leading-6 mt-2 w-[10rem] lg:w-[14.5rem]'>
								<b>Costanza Barbini</b> <br />
								• Architecte d'intérieur <br />
								• Designer d'espace <br />
							</p>
						</a>
						<a
							className='m-auto mt-0 hover:-translate-y-4 transition duration-500'
							href='https://www.linkedin.com/in/laura-meunier/'
							target='_blank'
						>
							<div className="w-[10rem] lg:w-[14.5rem] aspect-square bg-[url('/src/assets/img/pro_lau.webp')] bg-cover rounded-2xl"></div>
							<p className='sm:text-lg sm:leading-6 mt-2 w-[10rem] lg:w-[14.5rem]'>
								<b>Laura Meunier</b> <br />
								• Consultante en stratégie de communication <br />
								• Formatrice en planning stratégique <br />
							</p>
						</a>
					</div>
				</div>
			</section>
			{/* Contact */}
			<section className='flex flex-col-reverse sm:flex-row items-center gap-8 mt-20 lg:mt-32 mb-8'>
				<div className='text-left lg:-mt-5 flex-1 w-full'>
					<h1 className='text-2xl sm:text-4xl lg:text-[3.4rem] lg:mb-5 font-bold'>Comment me contacter ?</h1>
					<div className='flex flex-wrap align-middle justify-left gap-3 mt-8'>
						<p className='sm:text-lg sm:leading-6'>
							Mail: <b>{atob("bG" + midA + "0=")}</b>
						</p>
						<CopyToClipboard text={atob("bG" + midA + "0=")}>
							<button className='px-5 py-1 rounded-md ml-2 -mt-[6px] border-black border-2 hover:bg-black hover:text-white active:bg-white active:text-black'>
								<b className='sm:text-lg sm:leading-6'>Copier</b>
							</button>
						</CopyToClipboard>
					</div>
					<p className='sm:text-lg sm:leading-6 mt-7'>
						Instagram: <b>@sebastienleucci</b>
					</p>
				</div>
			</section>
		</div>
	)
}
