const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=100') 
    const { results } = await res.json()
    // console.log(results)

    // Clear results
    result.innerHTML = ''
    results.forEach( user => {
        // console.log(user.name.first)
        
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city} , ${user.location.country}</p>
                </div>
        `
        result.appendChild(li)

    });
}

function filterData(searchTerm) {
    listItems.forEach( item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            // remove class hide
            item.classList.remove('hide')
        } else {
            // add class hide
            item.classList.add('hide')
        }
    })
}