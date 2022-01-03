import { BrowserRouter, Navigate, NavLink, Routes, Route } from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="logo " />
					<ul>
						<li>
							<NavLink className={({isActive})=> isActive? 'nav-active' : '' } to="/">Inicio</NavLink>
						</li>
						<li>
							<NavLink className={({isActive})=> isActive? 'nav-active' : '' } to="/about">Acerca</NavLink>
						</li>
						<li>
							<NavLink to="/users" className={({isActive})=> isActive? 'nav-active' : '' } >Usuarios</NavLink>
						</li>
					</ul>
				</nav>

			<Routes>
				<Route  path="about" element={<h1>Acerca Page</h1>} />
				<Route  path="/users" element={<h1>usuarios Page</h1>} />
				<Route  path="/" element={<h1>Home Page</h1>} />
				<Route  path="/*" element={<Navigate to="/" replace />} />
			</Routes>
			</div>

		</BrowserRouter>
	);
};
