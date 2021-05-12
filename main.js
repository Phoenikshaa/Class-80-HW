names_of_people = [];

function Search()
{
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0; j<names_of_people_.length; j++)
    {
        if(s == names_of_people[j]){
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "name found" + found + "time/s";
    console.log ("found name" + found + "time/s");
}

function submit()
{

    var GuestName = document.getElementById("Enter the Guest Input Box").value;
    console.log(GuestName)
    names_of_people.push(GuestName);
    document.getElementById("display_name").innerHTML = names_of_people
    
}

function sort()
{
    var GuestName = document.getElementById("Enter the Guest Input Box").value;
    console.log(GuestName)
    names_of_people.push(GuestName);
    document.getElementById("display_name").innerHTML = names_of_people





    names_of_people.sort();
    console.log(names_of_people);

    var display_name_for_sorting = [];

    var display_name_for_sorting = display_name_for_sorting;
    console.log(names_of_people);

    for (var k = 0; k < display_name_for_sorting; k++)
    {
        display_name_for_sorting.push("<display_name_for_sorting>NAME -" + name_of_the_student_array[k] + "</display_name_for_sorting>");
        console.log(display_name_for_sorting);
    }

    remove_commas.sort();

    var remove_commas = display_name_for_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_for_sorting_without_commas").innerHTML = remove_commas;
}
    

function show()
{
    var GuestName = document.getElementById("Enter the Guest Input Box").value;
    console.log(GuestName)
    names_of_people.push(GuestName);
    document.getElementById("display_name_for_show").innerHTML = names_of_people
    <br>


}

