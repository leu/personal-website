import Head from "next/head";
import Navbar from "../../components/navbar";

export default function Blog1() {
	return (
		<>
			<Head>
				<title>Daniel Simols - Laziness Is A Tool</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

            <div className="background">
                {Navbar()}
                <div className="body">
                    <h1>ON LAZINESS</h1>
                    <p>
                        No matter your current motivation, in the end you will be lazy. 
                        This feels like a directive we follow regardless our thoughts on the matter.
                        I used to often think “Why can’t I do work, even though it would only benefit me?”.
                        Recently I discovered a new perspective. 
                        This sense of laziness is actually exceedingly useful for us.
                        It encourages us to be efficient in how we use our time, our energy. 
                        This sense of efficiency is so important that we are given a very 
                        strong urge to follow it regardless of what goes on in our conscious mind.
                    </p>
                    {/* <img src="/large-mountains.jpg" alt="" className="imgMax"/> */}
                    <p>
                        But should we fight back our laziness through self-discipline, 
                        in pursuit of our goals? I would argue that the discomfort we 
                        experience when trying to exercise self-discipline is because we don’t 
                        understand our own laziness. Our laziness is just there to ensure we’re 
                        not doing something for no reason. <em>It’s not there to hold you back</em>.
                    </p>
                    <p>Consider a few scenarios:</p>
                    <ul>
                        <li>
                            You dread doing your job
                            <ul>
                                <li>
                                    Does this job give you experience you need for your ideal job?
                                </li>
                                <li>
                                    Do you need the money?
                                </li>
                                <li>
                                    If you put a little bit of time into making sure you can do your 
                                    job well now, would that save you grief later on?
                                </li>
                            </ul>
                        </li>
                    </ul> 
                    <p>
                        All these points are simply questions to ask to make sure you’re 
                        using your time well. If you don’t want to do something, ask yourself 
                        if there’s a way to make things easier for yourself, or if what you 
                        want to do will give you much value at all.
                    </p>
                    <p>
                        And in fact, you may find that sometimes putting in some time doing something 
                        well <em>now</em> can save you effort in the long run. As an example, 
                        dieting well and really pushing yourself at the gym <em>now</em> so that 
                        you reach your health goals quicker, and possibly saving years of 
                        mediocre trips to the gym. In this way, you can be lazy by trying 
                        to do something well. Think of all the extra free time you’d have saved.
                    </p>
                    <p>
                        Be careful; By doing something ‘well’, I don’t necessarily mean putting in effort. 
                        Make sure you do the actual task in the laziest way possible, too, to
                        make things easier for you. It’s common to think of something being done 
                        ‘lazily’ as ‘badly’, but on the flip side I think a common mistake is to 
                        put in more effort rather than finding a quicker route to completing the task. 
                        Use your inbuilt laziness as a tool to help you not waste more energy than 
                        necessary on something.
                    </p>
                    <p>
                        TEST CHANGE 2
                    </p>
                    <p>
                        2023/08/26
                    </p>
                </div>
            </div>
		</>
	)
}