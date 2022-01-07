const express = require("express");
const { setupDB } = require("../db");
const applyMiddleware = (app) => {
  const db = setupDB();
  app.use((req, res, next) => {
    req.db = db;
    next();
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = { applyMiddleware };
