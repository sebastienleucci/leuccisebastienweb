import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Header() {
	const logoRef = useRef(null)

	// header mobile
	const [open, toggle] = useToggle(true)

	return (
		<header className='fixed z-[999] w-full bg-white shadow-md'>
			<nav className='relative z-50 w-full bg-white m-auto flex max-w-1100 px-5'>
				<a href='/' className='group pt-4 text-md leading-[35px] font-bold'>
					LEUCCI SEBASTIEN
					<div className='bg-red-500 rounded-t-md group-hover:scale-x-100 h-1 mt-[13px] transition-transform scale-x-0' />
				</a>

				{/* Mobile */}
				<button onClick={toggle} className='md:hidden my-auto ml-auto'>
					<img src='/menu.svg' className='w-10' />
				</button>

				{/* Desktop */}
				<nav className='lg:gap-14 w-fit md:flex hidden gap-8 ml-auto mr-5 align-middle'>
					<a href='/' className='group pt-4 text-base font-medium leading-[35px]'>
						À propos
						<div className='bg-red-500 rounded-t-md group-hover:scale-x-100 h-1 mt-[13px] transition-transform scale-x-0' />
					</a>
					<a href='/' className='group pt-4 text-base font-medium leading-[35px]'>
						Me contacter
						<div className='bg-red-500 rounded-t-md group-hover:scale-x-100 h-1 mt-[13px] transition-transform scale-x-0' />
					</a>
				</nav>
			</nav>

			{/* DropDown */}
			<motion.nav
				animate={{ y: open ? 0 : 312 }}
				transition={{ type: "easeOut" }}
				className='absolute md:hidden z-40 bg-white w-full -mt-[20rem] flex flex-col  
        [&>*]:border-b [&>*]:border-slate-300 [&>*]:px-6 [&>*]:py-4 [&>*]:font-medium shadow-md '
			>
				<a href='/' onClick={toggle} className='mt-2 border-t'>
					Accueil
				</a>
				<a href='/' onClick={toggle} to='/Academie'>
					À propos
				</a>
				<a href='/' onClick={toggle} to='/Formation'>
					Me contacter
				</a>
			</motion.nav>
		</header>
	)
}

function useToggle(initialValue) {
	const [value, setValue] = useState(initialValue)
	const toggle = () => {
		const updatedValue = !value
		setValue(updatedValue)
		return updatedValue
	}
	return [value, toggle]
}
