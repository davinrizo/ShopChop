import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('wakansa', 10),
    isAdmin: true,
  },
  {
    name: 'Tony Martini',
    email: 'tony@example.com',
    password: bcrypt.hashSync('wakansa', 10),
  },
  {
    name: 'RiJaL',
    email: 'ical@example.com',
    password: bcrypt.hashSync('wakansa', 10),
  },
];

export default users;
