const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/mason-jar.jpg" alt="mason jar" />
                </div>
                Photo by <a href="https://unsplash.com/@andrewbui">Andrew Bui</a> on <a href="https://unsplash.com/s/photos/free">UNSPLASH</a>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home