import productMocks from './productMocks';

function mockRequest(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productMocks)
        }, 2000)
    })
}

export default mockRequest;