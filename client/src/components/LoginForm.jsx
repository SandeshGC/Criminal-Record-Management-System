import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginForm({ setIsLoggedIn }) {
	const nav = useNavigate()
	const [formInput, setFormInput] = useState({ username: "", password: "" })

	function handleLogin(event) {
		event.preventDefault()
		console.log(Object.fromEntries(new FormData(event.target)))
		fetch("http://localhost:9900/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					console.log(data)
					if(data.role==="admin"){
						nav("/admin")
					}
					else
					{console.log("login success")
					nav("/records")}
				}
				else{
					console.log("login failed")
					event.target.reset()
				}
			})

		setIsLoggedIn(true)
	}

	function handleInput(event) {
		const property = event.target.name
		const value = event.target.value

		setFormInput((prevFormInput) => ({
			...prevFormInput,
			[property]: value,
		}))
	}
	return (
		<div className="">
			<form
				onSubmit={handleLogin}
				className="bg-white text-black p-4 rounded-md flex flex-col gap-2"
			>
				<h3 className="text-center border-b-2 border-blue-400">Login</h3>
				<div className="my-2">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="username">Username</label>
						<input
							className="bg-gray-200 py-1 px-2 rounded-sm"
							type={"text"}
							name="username"
							placeholder="username"
							value={formInput.username}
							onChange={handleInput}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full">
						<label htmlFor="password">Password</label>
						<input
							className="bg-gray-200 py-1 px-2 rounded-sm"
							type={"password"}
							name="password"
							placeholder="password"
							value={formInput.password}
							onChange={handleInput}
						/>
					</div>
				</div>
				<button
					className="bg-green-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="submit"
				>
					Login
				</button>
			</form>
		</div>
	)
}
