function login(req,res) {
    res.render('login/register');
}

function register(req, res) {
    res.render('login/register');
}

module.exports = {
    login: login,
    register: register,
}