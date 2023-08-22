import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Simols</title>
        <meta name="viewport" content="width=device-width" />
      </Head>

      <div className="navBar">
      <h1><a href="/">About Me</a> - <a href="/projects">My Projects</a> - <a href="/recommended">What I've Learned</a></h1>
      </div>
      <div className="body">
      <p>Hello 👋, I'm Daniel. I'm studying Computer Science in my 3rd year at Imperial College London.</p><p>You can contact me through:</p>
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
        <li><a href="/data/cv.pdf">CV</a></li>
      </ul>
      </div>
    </>
  )
}
