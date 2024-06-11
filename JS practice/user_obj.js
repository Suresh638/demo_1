let user = {
    user_name : "suresh",
    password : "suresh123@pass",
    otp:1233,
    mobile:6380362214,
    login: function(){
        console.log("welcome to my webpage");
    },
    logout: function(){
        console.log("logged out  succesfully");
    }
}

user['user_name'] = "Sureshkrishna G";
user.otp = Math.floor(Math.random()*10+1);
console.log(user.otp);
let num = user.otp;

