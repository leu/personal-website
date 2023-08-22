import Head from "next/head";
import Navbar from "../../components/navbar";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Daniel Simols - Projects</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

			<div className="background">
				{Navbar()}
				<div className="body">
					<h2>The Scrawler</h2>
					<img src="/tif.jpg" width="800px" className="imgMax"/><br />
					<p><a className="font-size: 26px; center" href="https://github.com/leu/tif">https://github.com/leu/tif</a></p>
				</div>
			</div>
		</>
	)
}