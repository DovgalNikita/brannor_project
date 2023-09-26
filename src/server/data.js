module.exports = () => {
    let collection = [];
    for(i in 100){
        collection.push({i, name:name+i, surname:surname+i})
    }
    return collection;
}
