

// async function apiCalling(){

const populate = async (base, amount) => {
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_B0LLyjjAIsHf7ItsWwwDqDbBSrECxtNLcuU9Gx2R&base_currency=${base}`;
    let raw = await fetch(url)
    let response = await raw.json()
    let tbody = document.querySelector('tbody')
    document.querySelector('thead').style.display = 'block'

    tbody.innerHTML = ''

    for (const currency in response.data
    ) {

        tbody.innerHTML += ` 
<tr>
<td>${currency}</td>
<td>${response.data[currency].code}</td>
<td>${response.data[currency].value * amount}</td>
</tr>
`
    }
}
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    let base = document.querySelector('#select').value
    let amount = parseInt(document.querySelector('#value').value)

    populate(base, amount)
})

