import Navbar from '@/components/navbar';
import fs from 'fs';
import Head from 'next/head';

export default function Thoughts( { thoughtsArray }: any ) {
    console.log(thoughtsArray)

    return <>
        <Head>
            <title>Daniel Simols - Scrawler</title>
            <meta name="viewport" content="width=device-width" />
        </Head>

        <div className="background">
            {Navbar()}
            <div className="body">
                <h2>Thoughts</h2>
                {thoughtsArray.map((thought: any) => (<p key={thought}>{thought as string}</p>))}
            </div>
        </div>
    </>
}

export async function getServerSideProps() {
    try {
        const data = fs.readFileSync('src/pages/thoughts/thoughts.txt', 'utf8');
        return { props: { thoughtsArray: data.split("\n\n") } }
    } catch (err) {
        console.error(err);
    }
}