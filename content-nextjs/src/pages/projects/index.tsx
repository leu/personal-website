import Head from "next/head";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Daniel Simols - Projects</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

			<div className="navBar">
			<h1><a href="/">About Me</a> - <a href="/projects">My Projects</a> - <a href="/recommended">What I've Learned</a></h1>
			</div>

			<div className="body">
				<h2>The Scrawler</h2>
				<img src="/tif.jpg" width="800px" /><br />
				<p><a className="font-size: 26px; center" href="https://github.com/leu/tif">https://github.com/leu/tif</a></p>
			</div>
		</>
	)
}