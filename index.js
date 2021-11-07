

window.onload=function(){
    let initialstudents=[
        {
            name:"rahul",
            email:"rahul@gmail.com",
            mobile:8277459512
        },
    
        {
            name:"harish",
            email:"harish@gmail.com",
            mobile:7259723940
        }
    
    ];
    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify(initialstudents));
    };
    
    display();
    

};


function display(content = undefined){
    let totaldata="";
    let students;


    if (content == undefined) {
        students = JSON.parse(localStorage.getItem("students"));
    } else {
        students = content;
    };

    
    students.forEach(function(student,index){
        let data=` <tr>
            <td class="btn1">${index+1}</td>
            <td class="btn1">${student.name}</td>
            <td class="btn1">${student.email}</td>
            <td class="btn1">${student.mobile}</td>
            <td><button class="btn" onclick="dlt(${index})">Delete</button>
            <button class="btn" onclick="showmodal(${index})">Update</button></td>
        </tr>`

        totaldata+=data;
    });

    document.getElementsByClassName("tbody")[0].innerHTML=totaldata;

};




function add(e){
    e.preventDefault();
    let student={};
    let b11=document.getElementById("b11").value
    let b12=document.getElementById("b12").value
    let b13=document.getElementById("b13").value

    student.name=b11;
    student.email=b12;
    student.mobile=b13;

    let students=JSON.parse(localStorage.getItem("students"));
    students.push(student);
    localStorage.setItem("students",JSON.stringify(students));


    document.getElementById("b11").value="";
    document.getElementById("b12").value="";
    document.getElementById("b13").value="";

    display(students);
};






function searchByName() {
    
    let searchValue = document.getElementById("searchName").value;
    let students = JSON.parse(localStorage.getItem("students"));
    let newdata = students.filter(function (superhero) {
    return (
        superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
    });

    display(newdata);
};


function showmodal(index) {
    let updatebtn=document.getElementsByClassName("modal")[0];
    updatebtn.style.display="block"
    copydata(index);
}


function hideModal(e){
    if(e.target.className=="modal"){
        let updatebtn=document.getElementsByClassName("modal")[0];
        updatebtn.style.display="none"
    }
}

let updateIndex;
function copydata(index){
    updateIndex=index;
    let students=JSON.parse(localStorage.getItem("students"));
    let student=students[index];

    document.getElementById("upb11").value=student.name
    document.getElementById("upb12").value=student.email
    document.getElementById("upb13").value=student.mobile

};

function updateall(event){

    let students=JSON.parse(localStorage.getItem("students"));
    let student=students[updateIndex];

    let b11=document.getElementById("upb11").value
    let b12=document.getElementById("upb12").value
    let b13=document.getElementById("upb13").value

    student.name=b11;
    student.email=b12;
    student.mobile=b13;

    localStorage.setItem("students",JSON.stringify(students));

    display();
    let updatebtn=document.getElementsByClassName("modal")[0];
        updatebtn.style.display="none"
    
};
function dlt(index){
    let students=JSON.parse(localStorage.getItem("students"));
    students.splice(index,1);
    localStorage.setItem("students",JSON.stringify(students));
    display();

};







