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
                    <img className="vagabondImage" src="/large-mountains.jpg"/>
                    {/* <img className="vagabondImage" src="/vagabond-alone.jpg"/> */}
                    <span className="credits">Credit to the Vagabond manga for this image</span>
                    <h2 className="adviceTitle">Pursue What You Want Most Right Now</h2>
                    <p className="advicePara">
                        Our goal is to feel happy. This can be done from the reward system in the brain. What gets
                        rewarded and what doesn't is quite variable and fuzzy, and it's difficult to create a
                        model where the goal is consistent. However, I've quite rarely, if indeed ever, been in
                        a place where I didn't have some ideas of possible goals to work towards. We should pick
                        the goal we feel the most strongly for, and we should work towards it. This will lead
                        to a state of fulfillment. The key is that you won't feel this until <em>after</em> you
                        feel you've done all you can.<br/><br/>

                        The hard part is, of course, putting in the work towards that goal. This is really, really
                        hard. But it's necessary if you want to feel fulfillment. Just like bodybuilding, you can
                        build up resilience of your mind to tasks with progressive overload. The key is that, it
                        may be impossible to go from video games to spending each day productive, in just one day.
                        But if you try your hardest each day, you can do slightly more than the day before, and
                        before long you can recognise what you want most, and work on achieving it immediately.
                    </p>
                    <h2 className="adviceTitle">Corollary: Avoid Bread and Circuses</h2>
                    <p className="advicePara">
                        I believe one of the healthiest things you can do is cut off mindless entertainment. 
                        Things like social media apps, youtube, netflix, etc.
                        The reasons are twofold. One, I feel depressed after some time on social media.
                        Two, it's addicting and indirectly stops you from achieving more rewarding goals.
                    </p>
                    <h2 className="adviceTitle">Corollary: On Meaninglessness</h2>
                    <p className="advicePara">
                        I don't know what your beliefs are, but I myself am an Atheist. There was a period where I
                        struggled with the fact I couldn't rationally make out any objective meaning to my struggles.
                        Why should I try when I can coast by with 10% of my max effort? I've met people that I thought
                        was what I wanted to become, but getting to that point just seems so meaningless either way.
                        Why not relax and watch movies with the people I live with, all day every day, forgetting
                        my once-important goals? I would sometimes sleep for over 12 hours during this period.
                        I tried researching Absurdism and how previous philosophers addressed it.
                        Still no satisfactory answer.<br/><br/>

                        Then came a realisation. If I think back to some of the happiest / most interesting moments
                        of my life, I really didn't care that it was meaningless. My mood is primary, and I
                        rationalise a reason for it. I consider how to recreate those feelings of happiness.
                        My conclusion, hard as it was to come to during this period where I sometimes slept over 12 hours a day,
                        was that I wasn't trying hard enough to pursue my goals. I tried putting in some effort,
                        and it started paying off.
                    </p>
                </div>
            </div>
		</>
	)
}