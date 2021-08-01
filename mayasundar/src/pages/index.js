import * as React from "react"
import "../styles/style.css"

const IndexPage = () => {

    return (
    <div>

      <title>Maya Sundar</title>
      <div className="divider">
      <h1>Maya Sundar</h1>
      </div>

      <p>
          I'm a second year computer science student at Columbia interested in full-stack development and venture capital. 
          Currently, I'm a research assistant in the Corter Lab at Teacher's College, working on knowledge diversity and cooperative learning. 
          <br />
          <br />
          In my free time, I enjoy crossword puzzles, <a className="paint" href="/blog/notfound">painting</a>, and reading short stories.
      </p>

      <div className="divider">
      <h2>Contact Me</h2>
      </div>

        <div className="social-icon">

          <a className="social" href="https://www.linkedin.com/in/mayasundar">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="currentColor" fillRule="evenodd"></path>
                </svg>          
          </a>

          <a className="social" href="https://github.com/mayasundar">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
          </a>

          <a className="social" href="mailto:mayasundar2@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
                   <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" fill="currentColor"></path>
                </svg>
          </a>

        </div>


      <div className="divider">
      <h2>Writing
      </h2>
      </div>

        <a className="box" href="/blog/on-digital-humanities">
            <div className="date">June 2021</div>
            <div className="title">On Digital Humanities</div>
        </a>

        <a className="box" href="/blog/on-digital-humanities">
            <div className="date">April 2021</div>
            <div className="title">Public Roads, Private Profit</div>
        </a>

        <a className="box" href="/blog/on-digital-humanities">
            <div className="date">March 2021</div>
            <div className="title">Decentralized Dystopia</div>
        </a>

  </div>

  )
}

export default IndexPage
