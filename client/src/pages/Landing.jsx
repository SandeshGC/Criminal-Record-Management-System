import React, { useState } from "react"
import { LoginForm } from "../components"

export default function Landing() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	return (
		<div className="">
			<h1 className="text-5xl font-bold text-center leading-loose">
				Criminal Record Mangement System
			</h1>
			<div className=" flex flex-col items-center p-4">
				<LoginForm setIsLoggedIn={setIsLoggedIn} />
			</div>
		</div>
	)
}
