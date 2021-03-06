import { Request, response, Response } from "express";
import fetchAllUsers from "./fetchAllUsers";

describe('Fetch all users request', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject: Object = {};

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation(result => {
                responseObject = result
            })
        }
    });

    test('200 - users', () => {
        const expectedStatusCode = 200;
        const expectedResponse = {
            users: [
                {
                    name: 'Stefano',
                },
                {
                    name: 'Alper',
                },
                {
                    name: 'Joe',
                }
            ]
        };

        fetchAllUsers(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedResponse);
    });
});