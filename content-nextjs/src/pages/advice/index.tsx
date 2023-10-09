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
                    <h2>Cutting Off Distractions</h2>
                    <p>
                        I believe one of the healthiest things you can do is cut off mindless entertainment. 
                        Things like social media apps, youtube, netflix, etc.
                        This will get you bored which will motivate you to pursue whatever you want to pursue.
                        I believe this is actually a way to achieve self-actualisation.
                    </p>
                    <h2>Journalling</h2>
                    <p>
                        Writing daily in my journal is probably the most helpful thing I've learned to do. You can't really think without writing it down. It also really helps with going through with doing things differently in your life. I highly recommend trying it.
                    </p>
                    <img className="vagabondImage" src="/large-mountains.jpg"/>
                </div>
            </div>
		</>
	)
}