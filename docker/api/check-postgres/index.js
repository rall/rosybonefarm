#!/usr/bin/env node
const { Client } = require('pg')

const client = new Client({
  host: process.env['DATABASE_HOST'],
  port: 5432,
  user: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
})

client.connect(err => {
  if (err) {
    console.error('!no response from postgres', err.stack);
    process.exit(1);
  } else {
    process.exit();
  }
})
