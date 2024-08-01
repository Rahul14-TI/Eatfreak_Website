let firstname = document.getElementById("First");
let lastname = document.getElementById("Last");
let number = document.getElementById("phone");
let type = document.getElementById("Party1");
let members = document.getElementById("Members");
let date = document.getElementById("date");


const party_type = () =>{
    const dropdown = document.getElementById("Party1");
    const items = dropdown.value;
    const output = document.getElementById('output');
    if(items==="Corporate Events","Birthday Party","get together"){
    output.innerText = "Available!";
    }
}


const charge = () =>{
    const Members = document.getElementById("Members");
    const items = Members.value;
    const para = document.getElementById('para');
    if(items <= 0){
        alert("please enter Valid Members");
    }else{
        para.innerText = `Per person approx:₹500 Total:-₹${items*500}`;
    }
}

console.log("working");

document.getElementById("submit").addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("clicked");
    console.log(firstname.value, lastname.value, number.value, type.value, members.value, date.value);

    let bookings = localStorage.getItem("bookings")
    console.log(bookings);

    if(bookings == null){
    let booked = [];
    booked.push({First_Name:firstname.value, Last_Name:lastname.value, Phone_No:number.value, Part_type:type.value, No_Members:members.value, Book_Date:date.value});
    alert("Your Booking is Successful");
    localStorage.setItem("bookings", JSON.stringify(booked));
    }
    else{
        let booked = JSON.parse(localStorage.getItem("bookings"))
        booked.push({First_Name:firstname.value, Last_Name:lastname.value, Phone_No:number.value, Part_type:type.value, No_Members:members.value, Book_Date:date.value});
        alert("Your Booking is Successful");
        localStorage.setItem("bookings", JSON.stringify(booked));
    }
    
});

let forms = document.querySelector("#myForm");


