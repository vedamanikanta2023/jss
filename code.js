
const studentsList = [{
    rollNo: 1111,
    name: 'name1'
}, {
    rollNo: 2222,
    name: 'name2'
}]

interface StudenType{

}

const [student, setStudent] = useState<StudenType>(studentsList);

const updateStudentName = ()=>{
  const updatedStudents = studentsList.map((student)=>{
    if (student.rollNo===2222){
      student.name = "name3";
      return student
    }
    return student
  })
  setStudent(updatedStudents);
}