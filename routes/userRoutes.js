const fs = require('fs')
const { join }  = require('path')

const filePath = join(__dirname, 'users.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

        try{
            return JSON.parse(data)
        } catch (error) {
            return []
        }

    }

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));

const userRoute = (app) => {
    //app.route('/users')
    //:id? (id opicional)
    app.route('/users/:id?')
    .get((req, res) => {
        const users = getUsers();

        //const { email, nome } = req.body
        //res.status(201)
        //validaçoes

        res.send({ users });
    })
    .post((req, res) => {
        const users = getUsers()

            users.push(req.body)
            saveUser(users)

            res.status(201).send('OK')

    })
    
}


