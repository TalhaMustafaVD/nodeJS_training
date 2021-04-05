const fetch = require('node-fetch')

module.exports.getAllFilms = async(req, res) => {
try {
    const { title } = req.params;
    let condition = {};
    if (title) {
        condition = encodeURIComponent(JSON.stringify({
            "title": title
        }));
    }
    let films = await fetch(`https://swapi.dev/api/films?where${condition}`);
    let data  = await films.json();
    res.send(data);
} catch (error) {
    console.log(error);
    res.send(error);
}
}
