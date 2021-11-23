function getContent() {fetch("/content").then(response => response.json).then(data => data)}

export {getContent};