const base_url = 'http://localhost:9000/'
const element = document.getElementById('target')
async function fetchGreeting() {
  const res = await fetch(base_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query { greeting }`
    })
  })
  const { data } = await res.json()
  return data
}

element.textContent = 'Loading...'

fetchGreeting().then(({greeting}) => {
  element.textContent = greeting
})
