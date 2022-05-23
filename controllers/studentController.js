const db = require('../db')
const firestore = db.firestore()
const Student = require('../models/student')


// CREATE the student record

const addStudent = async (req,res) =>{
    try {
        const data = req.body
        await firestore.collection('Students').doc().set(data)
        res.status(201).json('Record entered successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }

}

//GET all stduent records 

const getAllStudents = async(req,res) => {
    try {
        const student = await firestore.collection('Students');
        const data =   await student.get();
        const studentArray = [];
        if(data.empty){
            return res.status(404).send('NO record found');
        }
        data.forEach(doc => {
            const student = new Student(
                doc.id,
                doc.data().firstName,
                doc.data().lastName,
                doc.data().fatherName,
                doc.data().classEnrolled,
                doc.data().age,
                doc.data().phoneNumber,
                doc.data().subject,
                doc.data().year,
                doc.data().semester,
                doc.data().status
            );
            studentArray.push(student);
        });
        res.status(201).json(studentArray)
    }catch(error){
        res.status(400).send(error.message)
    }
}


// GET the single student record

const getStudent = async(req,res) => {

    try {
        const {id:studentId} = req.params;
        const data = await firestore.collection('Students').doc(studentId).get();
        if(!data.exists){
           return  res.status(404).send(`No student found with id ${studentId}`);
        }
        res.status(200).json(data.data())
    } catch (error) {
        res.status(404).json(error)
    }
}


// UPDATE the single record

const updateStudent = async (req,res) => {
    try {
        const {id:studentId} = req.params;
        const data = req.body;
        const student = await firestore.collection('Students').doc(studentId);
        const StudentData = await student.get()
        if(!StudentData.exists){
            return  res.status(404).send(`No student found with id ${studentId}`);
        }
        await student.update(data)
        res.status(200).send('Student record updated successfully!')
    } catch (error) {
        res.status(404).json(error.message)
    }
}

// DELETE single student record

const deleteStudent = async(req,res) =>{
    try {
        const {id:studentId} = req.params;
        const student = await firestore.collection('Students').doc(studentId)
        const StudentData = await student.get()
        if(!StudentData.exists){
            return  res.status(404).send(`No student found with id ${studentId}`);
        }
        await student.delete()
        res.status(200).json('Deleted successfully')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {addStudent,
                  getAllStudents,
                  getStudent,
                  updateStudent,
                  deleteStudent
                }