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
                        The reasons are twofold. One, I feel depressed after some time on social media.
                        Two, it's addicting and indirectly stops you from achieving more rewarding goals.
                    </p>
                    <img className="vagabondImage" src="/large-mountains.jpg"/>
                    <h2>Sometimes You Just Need to Force Yourself</h2>
                    <p>
                        I like to find ways to make things easier, rather than trying harder. Study smart, not hard etc.
                        So I cut off a lot of the useless things from my life (social media, mindless games, etc), and
                        now I'm left with a lot of free time. And this has got me far! But this doesn't automatically go
                        into pursuing fulfilling goals.
                        It's not uncommon for me to sleep for over 12 hours some days. So there are times I get depressed.
                        And so I've realised that actually <em>trying</em> is necessary for happiness. It may sound obvious,
                        but it's hard, really hard, so it's easy to forget.
                    </p>
                    <img className="vagabondImage" src="/vagabond-alone.jpg"/>
                </div>
            </div>
		</>
	)
}