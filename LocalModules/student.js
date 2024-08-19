
// singal module export system
// exports.StudentName =()=>{
//     return "Ms Shakil"
// }
const StudentName =()=>{
    return "Ms Shakil"
}
const StudentAge =()=>{
    return "Ms Shakil"
}
const cgpa =2.77;

// exports.StudentName = StudentName
// exports.StudentAge = StudentAge
// exports.cgpa = cgpa

// multiple module export tach
module.exports ={
    StudentAge,
    StudentName,
    cgpa,
}