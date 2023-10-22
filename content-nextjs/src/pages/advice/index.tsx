import Head from "next/head";
import Navbar from "../../components/navbar";

export default function Recommended() {
	return (
		<>
			<Head>
				<title>Daniel Simols - Advice</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

            <div className="background">
                {Navbar()}
                <div className="body">
                    <h1>My Advice</h1>
                    <h2>Avoid Bread and Circuses</h2>
                    <p>
                        I believe one of the healthiest things you can do is cut off mindless entertainment. 
                        Things like social media apps, youtube, netflix, etc.
                        This will get you bored which will motivate you to pursue whatever you want to pursue.
                        I believe this is actually a way to achieve self-actualisation.
                    </p>
                    <img className="vagabondImage" src="/large-mountains.jpg"/>
                </div>
            </div>
		</>
	)
}