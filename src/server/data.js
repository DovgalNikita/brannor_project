module.exports = () => {
    const collection = {users:[]};
    for(let i=0; i<100; i++){
        collection.users.push({id:i, name:`name${i}`, surname:`surname${i}`})
    }
    return collection;
}
