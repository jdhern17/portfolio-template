function getContent() {
  console.log("inside getContent func");
  fetch("/content", {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
    .then((response) => {
      console.log("inside first then");
      return response.json();
    })
    .then((data) => {
      console.log("inside second then");
      return console.log(data);
    })
}

export { getContent };
