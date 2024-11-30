const {hash } = require('bcryptjs')


exports.dohash = ( value , saltValue) =>{
   const hashResult = hash(value, saltValue);
   return hashResult;
}