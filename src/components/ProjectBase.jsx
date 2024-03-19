import { OrbitControls, View } from "@react-three/drei"
import { PerspectiveCamera } from "@react-three/drei"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Slider from "react-slick"

export function ProjectBase({ baseState, title, pills, color1, color2, urls, children }) {
	//Handle resizing
	const [open, toggle] = useToggle(false)
	OpenCloseResizing({ open, toggle })

	return (
		<section className='mt-16 mySection w-full sm:overflow-hidden flex flex-col'>
			<div className='flex flex-col sm:flex-row gap-6'>
				<div className='flex flex-col w-full'>
					<div
						className={`h-[2px] bg-gradient-to-r`}
						style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
					></div>
					<h2 className='text-[1.6rem] sm:text-3xl font-bold text-left mt-2'>{title}</h2>
					<ul className='flex gap-2 mt-2 sm:mt-2  whitespace-nowrap flex-wrap'>
						{pills.map((value, index) => (
							<li
								key={index}
								style={{ borderColor: `${color1}`, color: `${color1}` }}
								className={`rounded-2xl px-4 border-2 text-sm w-fit font-semibold`}
							>
								{value}
							</li>
						))}
					</ul>
					<div className='mt-[0.7rem] sm:mt-2 text-left'>{children[0]}</div>
					{!baseState && (
						<button
							onClick={toggle}
							style={{ color: `${color1}` }}
							className='mr-auto mt-auto -mb-2 font-bold hidden sm:block'
						>
							{open ? "Fermer projet " : "Ouvrir projet "}
							&gt;
						</button>
					)}
				</div>
				<div
					style={{ borderColor: `${color2}` }}
					className='flex sm:relative sm:border-2 -mt-8 sm:mt-0 rounded-xl sm:min-w-40 sm:w-40 sm:h-40 sm:aspect-square overflow-hidden sm:overflow-visible'
				>
					<View className='absolute w-[130%] h-[130%] -ml-[15%] -mt-6 hover:cursor-pointer hidden sm:block'>
						<PerspectiveCamera makeDefault position={[0, 0, 5]} />
						<pointLight intensity={25} position={[2.5, 1, -1]} />
						<pointLight intensity={25} position={[-2.5, 1, -1]} />
						<pointLight intensity={25} position={[1.5, -2, 2]} />
						<pointLight intensity={25} position={[-1.8, -0.5, 2]} />
						<mesh>{children[1]}</mesh>
						<OrbitControls enablePan={false} maxDistance={7} minDistance={3} />
					</View>
				</div>
			</div>
			{baseState ? (
				<motion.div className='h-auto mt-6'>
					<div className='slider-container rounded-2xl overflow-hidden hover:cursor-pointer'>
						<SimpleSlider>
							{urls.map((url, index) => (
								<div
									key={index}
									className={
										"flex justify-center items-center overflow-hidden h-64 sm:h-[32rem] -mb-2"
									}
								>
									<img src={url} className='min-h-full object-cover' />
								</div>
							))}
						</SimpleSlider>
					</div>
				</motion.div>
			) : (
				<motion.div
					animate={{ height: open ? "auto" : 0 }}
					transition={{ type: "easeOut" }}
					className='h-0 mt-6'
				>
					<div className='slider-container rounded-2xl overflow-hidden hover:cursor-pointer '>
						<SimpleSlider>
							{urls.map((url, index) => (
								<div
									key={index}
									className={
										"flex justify-center items-center overflow-hidden h-64 sm:h-[32rem] -mb-2"
									}
								>
									<img src={url} className='min-h-full object-cover' />
								</div>
							))}
						</SimpleSlider>
					</div>
				</motion.div>
			)}
		</section>
	)
}

function OpenCloseResizing({ open, toggle }) {
	const [isMobile, setIsMobile] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640)
			setIsDesktop(window.innerWidth > 640)
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])
	useEffect(() => {
		if (isMobile && !open) {
			toggle(true)
		}
	}, [isMobile])

	useEffect(() => {
		if (isDesktop && open) {
			toggle(false)
		}
	}, [isDesktop])
}

function SimpleSlider({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
		appendDots: (dots) => (
			<div>
				<ul style={{ marginTop: "-70px" }}> {dots} </ul>
			</div>
		),
	}
	return <Slider {...settings}>{children}</Slider>
}
function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: "block", marginLeft: 40, zIndex: 10 }}
			onClick={onClick}
		/>
	)
}
function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: "block", marginRight: 40, zIndex: 10 }}
			onClick={onClick}
		/>
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
