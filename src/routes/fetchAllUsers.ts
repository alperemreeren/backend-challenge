import { Request, Response } from "express";
const User = require("../models/user")

export default function fetchAllUsers(request: Request, response: Response) {
    User.find()
        .then((result: any) => {
            response.send(result);
        }).catch((err: any) => {
            console.log(err);
        })
}