

const party_type = () =>{
    const dropdown = document.getElementById("Party1");
    const items = dropdown.value;
    const output = document.getElementById('output');
    if(items==="Kitty Party","Birthday Party","get together"){
    output.innerText = "Available!";
    }
}


const charge = () =>{
    const Members = document.getElementById("Members");
    const items = Members.value;
    const para = document.getElementById('para');
    if(items < 0){
        alert("please enter Valid Members");
    }else{
        para.innerText = `Per person approx:₹500 Total:-₹${items*500}`;
    }
}

document.getElementById("submit").addEventListener("click", () =>{
    
    alert("Your Booking is Successful");
    
});

let forms = document.querySelector("#myForm");


