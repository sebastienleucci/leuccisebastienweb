import { Link } from "react-router-dom"

export function Footer() {
	return (
		<header className='w-full bg-white shadow-[rgba(0,0,0,0.1)_0px_-2px_4px_2px] mt-20 pt-6'>
			<nav className='m-auto flex justify-center gap-12 px-5 pb-5'>
				<Link to='/' className='font-bold'>
					Accueil
				</Link>
				<Link to='/about' className='font-bold'>
					À propos
				</Link>
			</nav>
			<nav className='m-auto flex justify-center gap-8 px-5'>
				<Link to='/' className='font-bold'>
					<img src='/src/assets/icons/brand-instagram.svg' className='w-10' />
				</Link>
				<Link to='/' className='font-bold'>
					<img src='/src/assets/icons/brand-linkedin.svg' className='w-10' />
				</Link>
				<Link to='/' className='font-bold'>
					<img src='/src/assets/icons/brand-behance.svg' className='w-10' />
				</Link>
			</nav>
			<p className='py-4'>Créé par Sébastien Leucci - Copyright 2024 - Tous droits réservés</p>
		</header>
	)
}
