function success(data){
    return {
        code: 200,
        status: 'Success',
        data: data
    }
}
function badRequest(){
    return {
        code: 400,
        status: 'Bad Request'
    }
}
function badAuthentication(message){
    return {
        code: 401,
        status: message || 'Bad Authorization'
    }
}
function error(message){
    return {
        code: 500,
        status: message || 'Error'
    }
}
module.exports = {success,badRequest,badAuthentication,error}