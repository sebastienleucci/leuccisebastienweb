import { Header } from "./components/Header.jsx"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { Footer } from "./components/Footer.jsx"

function App() {
	const canvasContainer = useRef()

	return (
		<>
			<Header />

			<main ref={canvasContainer} className='mt-[68px] flex flex-col items-center'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>

			<Canvas
				eventSource={canvasContainer}
				className='!fixed top-[68px] h-[128rem] overflow-y-scroll hidden sm:block'
			>
				<Suspense fallback={null}>
					<View.Port />
				</Suspense>
			</Canvas>

			<Footer />
		</>
	)
}

export default App
