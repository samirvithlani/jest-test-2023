exports.sum = (a,b)=>{

    return a + b;
}
exports.deleteUserById = (arr,id)=>{


    return arr.filter(item => item.id !== id);
}
exports.findUserById = (arr,id)=>{

    return arr.find(item => item.id === id);
}