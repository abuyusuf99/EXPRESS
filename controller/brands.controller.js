module.exports.contactBrands = {
    getBrands: (req, res) => {
      res.json(["Apple", "Samsung", "Honor",'FORD']);
    },
    createBrands: (req, res) => {
      res.json(["Apple", "Samsung", "Honor",'FORD']);
    },
    deleteBrands:(req,res) =>{
        res.json('Бренд удален')
    }
  };
  