let links = document.querySelectorAll('a');
let login = document.getElementById('login');
let register = document.getElementById('register')

//handelling the log and register pages
links.forEach(ele => ele.addEventListener('click',function (){
    if(this === links[0]){
        login.style.display = 'none';
        register.style.display = 'flex';
    }else{
        register.style.display = 'none';
        login.style.display = 'flex';
    }
}));

//login register validation

let user_R = document.getElementById('username');
let submetbtn = document.getElementById(`submet`);
let err_name = document.createElement('p');
let err_mail = document.createElement('p');
let err_pass = document.createElement('p');

document.forms[1][4].onclick = function(e){
    let username = false;
    //username handllig
    try{
            if(document.forms[1][0].value === ''){
            throw 'Please write a name'
        }
        if(!unvalid_username(document.forms[1][0].value)){
            throw "only lowcase, numbers and spacial  charactres"
        }
        username = true;
        err_name.textContent = ""
    }catch(ex){
        err_name.textContent = ex;
        document.forms[1][0].after(err_name);
    }


    //gmail handle
    let gmail = false
    try{

        if(document.forms[1][1].value === ''){
            throw 'you should add your Atlas gmail'
        }
        
        if(!atlas_mail_maching(document.forms[1][1].value)){
            throw "only atlas mails are valid"
        }
        gmail = true;
        err_mail.textContent = ""
    }catch(ex){
        err_mail.textContent = ex;
        document.forms[1][1].after(err_mail)
    }

    //passowrdhandler
    let password = false;
    try{
        if(document.forms[1][2].value == ''){
            throw 'please write a password'
        }

        if(document.forms[1][2].value.length > 8){
            if(!checkpassword(document.forms[1][2].value)){
                throw "lower case, uppercase, number and special charactres"
            }
        }else{
            throw 'you password should be more than 8 caharacter'
        }

        

        password = true;
        err_pass.textContent = ''
    }catch(ex){
        err_pass.textContent = ex;
        document.forms[1][2].after(err_pass)
    }
    if(username === false || gmail ===false || password===false){
        console.log("unvalid")
        e.preventDefault()
     }
        
   
}


let unvalid_username = function(input){
    let rex = /^(?=.*\d)(?=.*[!@#$%^&*_])[a-z\d!@#$%^&*_]/;
    return rex.test(input); 
}

let atlas_mail_maching = function(input){
    let rex = /[0-9]+@st.atlas.edu.tr/ig;
   // console.log(rex);
    return input.match(rex);
}

let checkpassword =function(input){
    let rex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}$/;
    return rex.test(input)
}
console.log((checkpassword("Mostafa207_")))


//[^a-zA-Z0-9]+[0-9]+[a-z]+[^a-zA-Z0-9]+[A-Z]+[0-9]+[^a-zA-Z0-9]* password