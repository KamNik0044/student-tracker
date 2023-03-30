import { Route, Routes } from "react-router-dom";
import GitHubCalllBack from "./components/GitHubCallBack";
import GitHubLogin from "./components/GitHubLogin";
import Homepage from "./components/Homepage/Homepage";
import NavBar from "./components/Homepage/NavBar";
import AttendenceForm from "./components/AttendenceForm";
import SessionDash from "./components/SessionDash";
import NewSession from "./components/NewSession";
import LogoutButton from "./components/LogoutButton";
import JoinButton from "./components/JoinButton";
import Profile from "./components/Profile";
import RegisterUser from "./components/RegisterUser";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RoleContext from "./components/RoleContext";
import { useState } from "react";
import NewSessionData from "./components/NewSessionData";

function App() {
	const [role, setRole] = useState("Trainee");
	const context = [role, setRole];

	return (
		<div>
			<RoleContext.Provider value={context}>
				<NavBar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/login" element={<GitHubLogin />} />
					<Route path="/callback" element={<GitHubCalllBack />} />
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/dashboard" element={<SessionDash />} />
					<Route path="/sessions" element={<NewSession />} />
					<Route path="/logout" element={<LogoutButton />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/register" element={<RegisterUser />} />
					<Route path="/attendenceForm" element={<AttendenceForm />} />
					<Route path="/footer" element={<Footer />} />
					<Route path="/sessiondata" element={<NewSessionData />} />
					<Route path="/join" element={<JoinButton />} />
				</Routes>
				<Footer />
			</RoleContext.Provider>
		</div>
	);
}

export default App;
