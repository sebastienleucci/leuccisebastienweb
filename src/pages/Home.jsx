import { ProjectList } from "../components/ProjectList.jsx"
import { Link } from "react-router-dom"
import { ProjectWebWide } from "../components/ProjectWebWide.jsx"

export function Home() {
	return (
		<>
			<section className='relative bg-gradient-to-r from-[#8f06242a]  to-[#f58b491c]  w-full pb-16'>
				<div className='relative z-30 mySection mx-auto mt-14 flex flex-col text-left'>
					<h2 className='font-bold text-2xl sm:text-[2.5rem] -mb-1 sm:-mb-0 text-black'>Freelance</h2>
					<h1 className='w-fit text-4xl mb:text-[3rem] sm:text-[4rem] pb-5 -mb-5 leading-none font-extrabold bg-gradient-to-r from-[#8F062F] to-[#f58b49] inline-block text-transparent bg-clip-text'>
						Infographiste 3D <br /> Web Designer
					</h1>
					<div className='flex flex-col lg:flex-row'>
						<Link
							to='/about'
							className='w-fit bg-gradient-to-r from-[#8F062F] to-[#cc4e3f] text-sm sm:text-base h-fit min-w-fit py-[5px] px-4 rounded-3xl mt-10 lg:mt-16 font-semibold text-white'
						>
							Me contacter{" "}
							<img
								src='/icons/arrow-right.svg'
								className='inline w-5 ml-6 sm:ml-10 -mt-[1px] -mr-1'
							/>
						</Link>
						<div>
							<img src='/img/Acc_01.webp' className='mr-10 mt-8 mb:mt-0 ' />
						</div>
					</div>
				</div>
				<div className='absolute z-20 bg-gradient-to-b from-[#ffffff00] via-[#ffffff98]  to-[#ffffffff] w-full h-96 bottom-0'></div>
			</section>
			<ProjectList />
		</>
	)
}
