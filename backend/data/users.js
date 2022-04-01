import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Second User',
    email: 'second@example.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Third User',
    email: 'third@example.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users