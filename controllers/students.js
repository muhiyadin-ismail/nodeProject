const studentsRouter = require("express").Router()
const Student = require("../sequelize").Student;
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Get all students.
studentsRouter.get("/", async (req, res) => {
    let students = await Student.findAll();
    res.json(students);
});


// Delete a student.
studentsRouter.post("/delete/:id", async (req, res) => {
    await Student.destroy({where: {id: req.params.id}});
    res.redirect("/#portfolio");
});

// Updating a student.
studentsRouter.post("/edit/:id",urlencodedParser, async (req, res) => {
    const student = await Student.update(
       { NAME: req.body.txtName,
        EMAIL: req.body.txtEmail,
        ADDRESS: req.body.txtAddress,
        NUMBER: req.body.txtTellephone,
        BIOGRAPHY: req.body.message,
        regDate: new Date()} ,
       { where: { id: req.params.id } }
        
    );
    res.redirect("/#portfolio");
});

// Inserting a student.
studentsRouter.post("/getData",urlencodedParser, async (req, res) => {
    console.log(req.body);
    const student = await Student.create({
        NAME: req.body.txtName,
        EMAIL: req.body.txtEmail,
        ADDRESS: req.body.txtAddress,
        NUMBER: req.body.txtTellephone,
        BIOGRAPHY: req.body.message,
        regDate: new Date()
    });
    res.redirect("/#portfolio");
});

module.exports = studentsRouter;