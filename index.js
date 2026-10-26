let students = [];
function addStudent(){
 let id=document.getElementById('sid').value;
 let name=document.getElementById('sname').value;
 let dept=document.getElementById('dept').value;
 let year=document.getElementById('year').value;
 let gpa=document.getElementById('gpa').value;
 if(!id||!name||!gpa){alert('Fill all fields');return;}
 students.push({id,name,dept,year,gpa});
 let table=document.getElementById('table');
 let row=table.insertRow();
 row.insertCell(0).innerText=id;
 row.insertCell(1).innerText=name;
 row.insertCell(2).innerText=dept;
 row.insertCell(3).innerText=year;
 row.insertCell(4).innerText=gpa;
 updateSQL();
 document.getElementById('sid').value='';
 document.getElementById('sname').value='';
 document.getElementById('gpa').value='';
}

function updateSQL(){
 let sql="USE Student_DB;\n";
 students.forEach(s=>{
  sql+=`INSERT INTO students (student_id, student_name, department, year_of_study, gpa) VALUES (${s.id}, '${s.name}', '${s.dept}', ${s.year}, ${s.gpa});\n`;
 });
 document.getElementById('sqlBox').innerText=sql;
}

function copySQL(){
 navigator.clipboard.writeText(document.getElementById('sqlBox').innerText);
 alert('SQL Copied!');
}
