const fetch = require('node-fetch');
const users = [];
const roles = [];

module.exports.getAllUsers = async(req, res) => {
try {    
    res.status(200).send([]);
} catch (error) {
    console.log(error);
    res.send(error);
}
}

module.exports.getUserById = async(req, res) => {
try {
    const { id } = req.params;
    if (!id) return req.status(404).send('Invalid Id!');
    let user = users.find(e => e.id === +id);
    if (!user) return res.status(400).send('user not found!');
    res.status(200).send(user);
} catch (error) {
    console.log(error);
    res.send(error);
}
}

module.exports.createUser = async(req, res) => {
    try {
        const { name, role } = req.body;
        if (!name) return req.status(404).send('Invalid Name!');
        users.push({name: name, id: users.length+1, role: roles.find(e => e.name === role).id})
        res.status(201).send(users[users.length-1]);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports.deleteUserById = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) return req.status(404).send('Invalid Id!');
        let user = users.find(e => e.id === +id);
        if (!user) return res.status(400).send('user not found!');
        users = users.filter(e => e.id !== +id);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports.updateUserById = async(req, res) => {
    try {
        const { id, name, role } = req.body;
        if (!name || !id) return req.status(404).send('Invalid Request!');
        let index = users.indexOf(e => e.id === +id);
        if (index === -1) return res.status(400).send('user not found!');
        users[index] = {...user, name};
        res.status(200).send(users[index]);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}