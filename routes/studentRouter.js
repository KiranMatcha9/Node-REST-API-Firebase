const express = require('express');
const router = express.Router();
const {addStudent,getAllStudents,getStudent,updateStudent,deleteStudent} = require('../controllers/studentController')

router.post('/student',addStudent)
      .get('/student',getAllStudents)
      .get('/student/:id',getStudent)
      .patch('/student/:id',updateStudent)
      .delete('/student/:id',deleteStudent);

module.exports = router;