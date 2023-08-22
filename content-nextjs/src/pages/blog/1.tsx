import Head from "next/head";
import Navbar from "../../components/navbar";

export default function Blog1() {
	return (
		<>
			<Head>
				<title>Daniel Simols - Take The Easy Way</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

            <div className="background">
                {Navbar()}
                <div className="body">
                    <h1>Take The Easy Way</h1>
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
                        objectively good for you, which a lot of people do, but perhaps that’s 
                        because of the shift in how deadly our environment is compared to the past. 
                        Maybe humanity will very slowly shift to being less ‘lazy’. I don’t know, 
                        I’m not a biologist or anything like that.</p>
                    <p>Either way, if you want to combat this feeling of laziness, maybe it would be 
                        best to listen to it and to consider the question “What’s the easiest way of 
                        doing this?” in all your matters. Don’t unnecessarily waste your time.</p>
                    <p>2023/08/22</p>
                </div>
            </div>
		</>
	)
}