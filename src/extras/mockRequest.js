import dataArray from './dataArrayList';

function mockRequest(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataArray)
        }, 3000)
    })
}

export default mockRequest;