import {LoginFormData} from '../pages/AuthPage/AuthPage';

interface Response {
    json: () => object
}

const responseMock = {code: 202, data: 'User Authorized'};

export const fetchMock = (formData: LoginFormData): Promise<Response> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({json: () => responseMock});
        }, 2000);
    });
};
//
// const mockFetch = Promise.resolve({
//   json: () => Promise.resolve(response),
// });