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
                    <h1>Laziness Is A Tool</h1>
                    <p>One thing that’s constantly on my mind is 
                        “Why am I so lazy? Why don’t I feel like doing this simple task even 
                        though I would simply benefit?”</p>
                    <img src="/ghibli-resting.webp" alt="" className="imgMax"/>
                    <p>One answer that I’ve thought of is “Because it encourages us to be efficient 
                        in how we approach the problem”. From this perspective, you could 
                        consider the lazy voice inside of you as a source of pragmatism, so 
                        that you don’t spend all your days going after one goal. 
                        Which is a really positive shift of perspective!</p>
                    <p>On an aside, it’s interesting to think of how the language we use influences us. 
                        I wouldn’t call someone that’s a good-for-nothing “pragmatic”, 
                        but if we’re trying our hardest, and yet finding limits to what our 
                        mind is OK with spending time on, maybe we shouldn’t call that ‘laziness’, 
                        but something like ‘pragmatic’! Maybe it’s a good thing that our mind pushes
                        us to consider “Maybe there’s a better use of my time”.</p>
                    <p>Though, I guess I wouldn’t go so far as to say watching Netflix is
                        objectively good for you, which a lot of people do. But it makes sense 
                        that as organisms we don’t want to pursue something if we already feel 
                        secure enough. Perhaps a lot of it is how our environment influences us, 
                        or habit. I don’t really know.
                    </p>
                    <p>
                        Either way, I’ve found that asking myself “What’s the easiest way of 
                        doing this” actually helps me to achieve goals while dealing with this feeling 
                        of laziness. I realised that at times I’d been stubbornly thinking that I’m 
                        simply lazy for dreading doing a task, when in reality it was my body 
                        telling me “Hey, maybe you could do this task in a more efficient way” 
                        rather than it being something like divine retribution for my hubris.
                    </p>
                    <p>
                        If you’re feeling lazy, consider if what you’re doing is really worth your time. 
                        Use your laziness as a tool to help yourself stay efficient.
                    </p>
                    <p>
                        2023/08/22
                    </p>
                </div>
            </div>
		</>
	)
}