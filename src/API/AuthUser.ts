import {LoginFormData} from '../pages/AuthPage/AuthPage';

interface ResponsePromise {
    json: () => object
}

export type Response = {
    code: number,
    data: string
}

const responseMock: Response = {code: 202, data: 'User Authorized'};

export const fetchMock = (formData: LoginFormData): Promise<ResponsePromise> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({json: (): Response => responseMock});
        }, 3500);
    });
};
//
// const mockFetch = Promise.resolve({
//   json: () => Promise.resolve(response),
// });