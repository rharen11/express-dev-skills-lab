function index(req, res){
    res.render('skills/index', {
        Skills: Skills
    })
}

export{
    index
}