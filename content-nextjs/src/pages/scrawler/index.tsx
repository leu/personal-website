import Head from "next/head";
import Navbar from "../../components/navbar";

export default function Scrawler() {
	return (
		<>
			<Head>
				<title>Daniel Simols - Scrawler</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

			<div className="background">
				{Navbar()}
				<div className="body">
					<h2>The Scrawler</h2>
					<img src="/tif.jpg" width="800px" className="imgMax"/><br />
					<p><a className="scrawlerLink" href="https://github.com/leu/tif">GitHub Repo</a></p>
					<p className="advicePara">
						This is a passion project on creating an ergonomic keyboard using hexagonal keys. 
						I plan to keep prototyping in the future, but for now I lack the money 😭.
					</p>
					<p className="advicePara">
						The idea in the keyboard above is to use your thumb on those square keys for modifiers
						such as ctrl, alt, win, shift, as well as layer keys. Layers are how I'm able to fit
						many characters on fewer keys.
					</p>
					<p className="advicePara">
						One of the optimisations I then have to work out is the most comfortable placement of
						characters on this physical keyboard. Obviously we want the letters of the english alphabet
						that come up more frequently such as the letter e to be on the home row. We also need
						to take into account which fingers are stronger (I'd rather reach with my index finger than
						my pinky), and possibly keyboard strokes, i.e., which bigrams come up the most frequently in english,
						and placing those two letters next to each other on the keyboard.
					</p>
					<p className="advicePara">
						The above keyboard obviously doesn't look the best, and I don't like how the thumb keys are
						placed. I was working on a better prototype before I realised I don't have the money to
						keep going for the time being.
					</p>
				</div>
			</div>
		</>
	)
}