import {Link } from "react-router-dom"

const Public =()=>
{
    const content =(
        <section className="public">
            <header>
                <h1>welcomes t Repair Store!</h1>
            </header>
            <main>
                <p>
                    Located is city
                </p>
                <P>&nbsp;</P>
                <address>
                    Repair store<br/>
                    555 Foo Drive<br/>

                </address>
            </main>
            <footer>
                <Link t="/login">Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public