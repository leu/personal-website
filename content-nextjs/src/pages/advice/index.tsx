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
                    <h2>Boredom</h2>
                    <p>
                        I believe one of the healthiest things you can do is get yourself bored. Feel like you're not living your life to the fullest? Boredom will put you on the right track.
                    </p>
                    <h2>Journalling</h2>
                    <p>
                        Writing daily in my journal is probably the most helpful thing I've learned to do. You can't really think without writing it down. It also really helps with going through with doing things differently in your life. I highly recommend trying it.
                    </p>
                </div>
            </div>
		</>
	)
}