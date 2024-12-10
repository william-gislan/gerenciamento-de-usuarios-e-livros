const authAdmin = (req, res, next) => {
  if(req.user?.role === 'admin'){
    next()
  } else{
    res.status(403).json({message:'Permission Denied'})
  }
}

module.exports = authAdmin