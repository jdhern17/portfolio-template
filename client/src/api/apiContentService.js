function getContent() {
  return fetch("/content", {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export { getContent };
