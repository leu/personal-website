import Head from "next/head";
import Navbar from "../../components/navbar";

export default function Blog() {
	return (
		<>
			<Head>
				<title>Daniel Simols - Blog</title>
				<meta name="viewport" content="width=device-width" />
			</Head>

            <div className="background">
                {Navbar()}
                <div className="body">
                    <h1>Blog Articles</h1>
                    <a href="/blog/1"><h2 className={"blogArticle"}>Laziness Is A Tool</h2></a>
                </div>
            </div>
		</>
	)
}