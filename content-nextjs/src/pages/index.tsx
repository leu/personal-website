import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Simols</title>
        <meta name="viewport" content="width=device-width" />
      </Head>

      <div className="background">
        {Navbar()}
        <div className="body">
          <p>Hello 👋, I'm Daniel. I'm studying Computer Science in my 4th year at Imperial College London.</p><p>You can contact me through:</p>
          <ul>
            <li>Discord:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inlieuofleu</li>
            <li>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in.lieu.of.leu@gmail.com</li>
            <li>Uni Email:&nbsp;&nbsp;ds1920@ic.ac.uk</li>
            <li>Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+44 7340 364 913</li>
          </ul>
          <p>And here are some professional links:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/daniel-simols-325325207/">LinkedIn</a></li>
            <li><a href="https://github.com/leu">GitHub</a></li>
            <li><a href="/cv.pdf">CV</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
