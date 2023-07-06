module.exports.contactProducts = {
  getProducts: (req, res) => {
    res.json(["Iphone 12", "Samsung s22", "Honor watch"]);
  },
  createProducts: (req, res) => {
    res.json(["Iphone 12", "Samsung s22", "Honor watch"]);
},
getIdProducts: (req,res) => {
    res.json('Нет Id')
},
deleteIdProducts :(req, res) =>{
    res.json('Удален')
}
};