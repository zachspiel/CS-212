function checkvalue(){
  //Variables to get inputs
  var checked_rootbeer = document.querySelector('input[name = "rootbeers"]:checked');
  var checked_icecream = document.querySelector('input[name = "icecream"]:checked');
  var checkboxes = document.getElementsByName('icecream');
  //Checks to see which icecream was selected
  var vals = "";
  for(var i=0, n=checkboxes.length;i<n;i++){
    if(checkboxes[i].checked){
      vals += "," + checkboxes[i].value;
    }
  }
  if (vals) vals = vals.substring(1);
  //Gets the output paragraph
  var output = document.getElementById("output");

  //If Both inputs were selected, print the recipe
  if(checked_rootbeer != null && checked_icecream != null){  //Test if something was checked
    document.getElementById("recipe").style.visibility = "visible";
    output.innerHTML = "In a glass mug, add one scoop<br> each of these ice creams-<br>" + vals+ ". Fill up <br> the mug with " +
                        checked_rootbeer.value + " root beer. <br> Enjoy!";


  } else {
    alert('You must select at least one ice cream falvor and one rootbeer brand'); //Alert, nothing was checked.
  }

}
