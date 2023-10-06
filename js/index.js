function  sendMail(){
    var  params ={
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value,
        phone :document.getElementById("phone").value,
        message : document.getElementById("message").value,


    }

    const serviceID = "service_t5sn4q3";
    const templateID ="template_m2vr9ze" ;

    emailjs.send(serviceID, template, params)
    .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "" ;
            document.getElementById("phone").value = "" ;
            document.getElementById("message").value = "" ;
            console.log(res);
            alert("your message sent sucessfully ");
        }
    )
    .catch(err=> console .log(err));

    }