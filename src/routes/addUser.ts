import { Request, Response } from "express";
const User = require("../models/user");

export default function addUser(request: Request, response: Response) {
    const user = new User({
        name: 'test'
    });

    user.save()
        .then((result: any) => {
            response.send(result)
            console.log(`Successfully added a new User with ID: ${result._id}`)
        }).catch((err: any) => {
            console.log(err)
        });
}