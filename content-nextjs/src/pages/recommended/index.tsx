import Head from "next/head";

export default function Recommended() {
	return (
		<>
			<Head>
				<title>Daniel Simols - What I've Learned</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

            <div className="background">
                <div className="navBar">
                <h1><a href="/">About Me</a> - <a href="/projects">My Projects</a> - <a href="/recommended">What I've Learned</a></h1>
                </div>
                
                <div className="body">
                <h1>What I've Learned</h1>
                <h2>Journalling</h2>
                <p>
                        Writing daily in my journal is probably the most helpful thing I've learned to do. You can't really think without writing it down. It also really helps with going through with doing things differently in your life. I highly recommend trying it.
                </p>
                <h2>Standing Desk</h2>
                <p>
                        One more thing that is strangely effective is using a standing desk. It's hard to explain without trying it out yourself, but you become way more productive if you're standing. You will get tired at first - but these days I can stand the whole day without ever sitting!
                </p>
                </div>
            </div>
		</>
	)
}