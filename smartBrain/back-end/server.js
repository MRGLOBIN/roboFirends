const http = require('http')

const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const database = {
  users: [
    {
      id: '1',
      name: 'john',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '2',
      name: 'sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date(),
    },
  ],
}

app.get('/', (req, res) => {
  res.json(database.users)
})

app.post('/signin', (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('success')
  } else {
    res.status(400).json('error logging in')
  }
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body
  database.users.push({
    id: '3',
    name,
    email,
    password,
    entries: 0,
    joined: new Date(),
  })

  res.json(database.users[database.users.length - 1])
})

app.listen(PORT, () => {
  console.log('app is listening on http://localhost:3000')
})
