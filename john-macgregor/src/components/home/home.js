import logo from '../../images/BlackLogoNoBackground.png'

const logoAlt = 'A solid black wizard holding a staff in one hand and summoning an object with the other above the name John MacGregor and the slogan "build with magic"';

function Home() {
  return(
    <>
        <img src={logo} alt={logoAlt}/>
        <h2>Welcome!</h2>
        <div>
            <p>This is the online home for John MacGregor, the software professional who resides in Ohio, USA.</p>
            <p>The goal of this site is to provide:</p>
            <ul>
                <li>A short bio</li>
                <li>Links to</li>
                <ul>
                <li>Writings</li>
                <li>Social media</li>
                <li>My public body of work</li>
                </ul>
                <li>And a living example of my skills</li>
            </ul>
            <p>My intention is to provide an easy way for you to learn about me and what I can bring to the table, without a lot of hassle.</p>
            <p>If you have any questions after poking around, don't hesitate to reach out to me <a href='mailto:john.macgregor@john-macgregor.dev'>via my email</a>.</p>
        </div>
    </>
  );
}

export default Home;