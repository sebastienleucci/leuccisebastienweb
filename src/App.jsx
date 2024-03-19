import { Header } from "./components/Header.jsx"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { ProjectList } from "./components/ProjectList.jsx"

function App() {
	const canvasContainer = useRef()

	return (
		<>
			<Header />

			<main ref={canvasContainer} className='mt-[68px] flex flex-col items-center'>
				<ProjectList />
			</main>

			<Canvas
				eventSource={canvasContainer}
				// onScroll={true}
				className='!fixed top-[68px] h-[128rem] overflow-y-scroll hidden sm:block'
			>
				<Suspense fallback={null}>
					<View.Port />
				</Suspense>
			</Canvas>
		</>
	)
}

export default App
