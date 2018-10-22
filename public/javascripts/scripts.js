document.addEventListener('DOMContentLoaded', () => {

 // console.log('The DOM is working!');

 fillTheTable()
 addNewBlog()
})

// Function to fill the table with the current data in the blog table
function fillTheTable () {
  axios.get('/blogtable')
  .then((response) => {

    // DOM Manipulation, need to create TRs, TDs
    response.data.forEach((blog) => {
      let tbody = document.querySelector('#blog-posts tbody')
      let tr = document.createElement('tr')
      let name = document.createElement('td')
      let blogpost = document.createElement('td')

      name.innerText = blog.name
      blogpost.innerText = blog.blogpost

      // append IMG, to the TD, append TDs to the TR, the TR to the TBODY
      tr.appendChild(name)
      tr.appendChild(blogpost)
      tbody.appendChild(tr)

    })

  })
  .catch((error) => {
    console.log(error)
  })
}

// Function to wipe the table clearn
function clearTable () {
  axios.get('/blogtable')
  .then((response) => {

    // DOM Manipulation, need to create TRs, TDs
    response.data.forEach((blog) => {
      let tbody = document.querySelector('#blog-posts tbody')
      while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
      }
    })
  })
}

// Funtion to add new blog to the table
function addNewBlog() {
  let form = document.getElementById('create-report')
  form.addEventListener('submit', (ev) => {

    ev.preventDefault()

    // grab all values from the form
    let postData = {}
    let formElements = ev.target.elements

    for (var i = 0; i < formElements.length; i++) {
      let inputName = formElements[i].name
      let content = formElements[i].blogpost
      if( inputName ) {
        postData[inputName] = formElements[i].value
      }
    }


    //axios.post that data to the correct backend route
    axios.post('/blogtable', postData)
    .then((response) => {
      console.log();
      clearTable()
      fillTheTable()  //call this once again
    })
    .catch((error) => {
      console.log(error)
    })
  })
}
