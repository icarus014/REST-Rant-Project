const React = require('react')
const Def = require ('../default')

function new_form (data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert-danger'>{data.message}</h4>
        )
    }
    return(
        <Def>
            <main>
                <h1>Add a new Place</h1>
                {message}
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label for="founded">Place Name</label>
                        <input className="form-control" id="founded" name="founded" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="founded">Founded Year</label>
                        <input type="number"className="form-control" id="founded" name="founded" value={new Date().getFullYear} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                    </form>
             </main>
        </Def>
    )
}


module.exports = new_form