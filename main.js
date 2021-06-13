var names_of_people = [];

function submit(){
    var GuestName = document.getElementById("name_1").value;
    names_of_people.push(GuestName);
    
    console.lof(GuestName);

    console.log(names_of_people);
    var length_of_name = names_of_people.length;
    console.log(length_of_name);
    document.getElementById("display name2").innerHTML=names_of_people.toString();

}

function sorting(){
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("sorted").innerHTML=i.toString();
}

function show(){
    var i= names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.displays="block";
}

function search(){
    var s= document.getElementById("s1").value;
    var found= 0;
    var j;
    for(j=0; j<display_name2.length; j++)
    {
        if(s==display_name2[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("name found "+found+" time/s");
}