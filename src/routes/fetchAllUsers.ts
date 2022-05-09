import { Request, Response } from "express";

export default function fetchAllUsers(request: Request, response: Response) {
    const users = [
        {
            name: 'Stefano',
            age: ~25-30
        },
        {
            name: 'Alper',
            age: 17
        },
        {
            name: 'Joe',
            age: 20
        }
    ];

    response.statusCode = 200;
    response.send({ users });
}