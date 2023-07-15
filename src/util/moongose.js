module.exports = { 
    multipleMoongoseToObject : function(moongoses) {
        return moongoses.map(moongoses => moongoses.toObject())
    },
    moongoseToObject : function(moongose) {
        return moongose ? moongose.toObject() : moongose;
    }
};