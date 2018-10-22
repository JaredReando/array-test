var newArray = [1];
console.log(newArray);



$(document).ready(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();

    var color = $("#color").val();
    var animal = $("#animal").val();
    var snack = $("#snack").val();

    var newArray = [];
    console.log(newArray);

    newArray.push(color, animal, snack);
    console.log(newArray);

    newArray2 = [newArray[1].slice(), newArray[0].slice(), newArray[2].slice()];

    $("#arrayInsert1").text(newArray2[0]);
    $("#arrayInsert2").text(newArray2[2]);
    console.log(newArray2);
    // newArray.push(animal);
    // newArray.push(snack);



    // newArray = newArray.push[color,animal,snack];
    // console.log(newArray);
  });
});
