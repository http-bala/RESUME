function sendmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        number: document.getElementById("number").value,


    };
    
const serviceID ="service_f0g73qe";
const templateID = "template_i6116tn";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("number").value = "";

        console.log(res);
        alert("your message sent sucessfully");

    })
    .catch((err) => console.log(err));
}
