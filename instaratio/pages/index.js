import { Inter } from "next/font/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
const inter = Inter({ subsets: ["latin"] });

const responseFacebook = (response) => {
	console.log(response);
};

export default function Home() {
	return (
		<>
			<h1>Website under development</h1>
		</>
	);
}
