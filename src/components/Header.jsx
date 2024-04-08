import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function Header() {
	// header mobile
	const [open, toggle] = useToggle(true)

	return (
		<header className='fixed z-[999] w-full bg-white shadow-md xl:px-10 '>
			<nav className='relative z-50 w-full bg-white m-auto flex max-w-1100 px-5'>
				<Link to='/' className='group pt-4 text-md leading-[35px] font-bold'>
					LEUCCI SEBASTIEN
					<div className='bg-[#c4433d] rounded-t-md group-hover:scale-x-100 h-1 mt-[13px] transition-transform scale-x-0' />
				</Link>

				{/* Mobile */}
				<button onClick={toggle} className='md:hidden my-auto ml-auto'>
					<img src='/icons/menu-2.svg' className='w-10' />
				</button>

				{/* Desktop */}
				<nav className='lg:gap-14 w-fit md:flex hidden gap-8 ml-auto align-middle'>
					<Link to='/about' className='group pt-4 text-base font-medium leading-[35px]'>
						À propos
						<div className='bg-[#c4433d] rounded-t-md group-hover:scale-x-100 h-1 mt-[13px] transition-transform scale-x-0' />
					</Link>
					<Link to='/about' className='group pt-4 text-base font-medium leading-[35px]'>
						Me contacter
						<div className='bg-[#c4433d] rounded-t-md group-hover:scale-x-100 h-1 mt-[13px] transition-transform scale-x-0' />
					</Link>
				</nav>
			</nav>

			{/* DropDown */}
			<motion.nav
				animate={{ y: open ? 0 : 312 }}
				transition={{ type: "easeOut" }}
				className='absolute md:hidden z-40 bg-white w-full -mt-[20rem] flex flex-col  
        [&>*]:border-b [&>*]:border-slate-300 [&>*]:px-6 [&>*]:py-4 [&>*]:font-medium shadow-md '
			>
				<Link to='/' onClick={toggle} className='mt-2 border-t'>
					Accueil
				</Link>
				<Link to='/about' onClick={toggle}>
					À propos
				</Link>
				<Link to='/about' onClick={toggle}>
					Me contacter
				</Link>
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
