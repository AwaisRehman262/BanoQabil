//making an object
const object_01 = {
    name : "Awais Rehman",
    fname : "Munawar Hussain"
}

//Taking wish from user if he wanna change or not
let wish = prompt("Do you wanna change value?")

//Taking wish type from user if he wanna change name or fname
let wish_type = prompt("Change value of name or fname or both.")
    wish_type = wish_type.toLowerCase

//
if(wish && wish_type == "name"){
    let new_value_name = prompt("Enter new value for name.")
    object_01.name = new_value_name
    console.log(object_01)
}else if(wish && wish_type == "fname"){
    let new_value_fname = prompt("Enter new value for fname.")
    object_01.fname = new_value_fname
    console.log(object_01)
}else if(wish && i){
    let new_value_fname = prompt("Enter new value for fname.")
    object_01.fname = new_value_fname
    console.log(object_01)
}