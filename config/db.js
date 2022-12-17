const express = require('express');
const { Sequelize } = require('sequelize');


const createDB = new Sequelize('test-db', 'user', 'pass' , {
    dialect: 'sqlite',
    host: './config/db.sqlite',
});

const connectDB = () => {
    createDB.sync().then(() => {
        console.log('connected to DB');
    })
    .catch((e) => {
        console.log('DB connection failed', e);
    })
};

module.exports = { createDB ,connectDB};

