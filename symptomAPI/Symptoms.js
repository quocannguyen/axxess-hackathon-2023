

fetch("symptoms.json")
.then(response => response.json())
.then(data => {
    console.log(data);

    let array = []
    data.forEach(obj => {
        id = obj.ID;
        username = obj.Name;
        array.push({id,username})
    });
    console.log(array);
})
  .catch(error => console.error(error));