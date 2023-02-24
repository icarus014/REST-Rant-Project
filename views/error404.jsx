const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page !!</p>
                <img src="./image/hand-stop.jpg" alt="Hand stop sign" />
                Photo by <a href="https://unsplash.com/@giuliamay">Giulia May</a> on <a href="https://unsplash.com/s/photos/free">UNSPLASH</a>
            </main>
        </Def>
    )
}

module.exports = error404