let guestARR :string[] =["Ahmed","Mustafa","Mohsin","Fasih"];
let canNotAttend :string ="Ahmed";
console.log(canNotAttend + " " + "can not attend the dinner");
let newGuest :string="Fasih";
guestARR [guestARR.indexOf(canNotAttend)] =newGuest;
//console.log(guestARR);
guestARR.map((items)=>console.log(`Dear ${items} you are inivited to the dinner`)
)









