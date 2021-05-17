const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUser = (req, res) => {
    const user = [
        {
            id:1,
            name:'leo'
        },
        {
            id:2,
            name:'pepe'
        },
    ]
    res.json(user);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = (req, res) => {
    
    const user = req.body;

    user.id = 854564;

    const result = {
        message: 'user create',
        user
    }
    res.status(201).json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateAllUser = (req, res) => {
    
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'user update',
        user
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePartierUser = (req, res) => {
    
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'user update with patch',
        user
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res) => {
    
    const { id } = req.params;
    const result = {
        message: `user with id: ${id} deleted`
    }
    res.json(result);
};

module.exports = {
    getAllUser,
    createUser,
    deleteUser,
    updateAllUser,
    updatePartierUser    
}