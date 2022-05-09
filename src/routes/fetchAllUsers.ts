import { Request, Response } from "express";

export default function fetchAllUsers(request: Request, response: Response) {
    const users = [
        {
            name: 'Stefano',
        },
        {
            name: 'Alper',
        },
        {
            name: 'Joe',
        }
    ];

    response.statusCode = 200;
    response.send({ users });
}