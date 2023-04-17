const messageNode = document.getElementById('message');

const render = (cars=[], DOMNode=messageNode) => {
  const frag = document.createDocumentFragment();
  for (const car of cars) {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${car.avatar_url}" /><span>${car.name} ${car.bhp}</span>`
    frag.append(li)
  }
  DOMNode.append(frag);
}

const getData = async () => {
  try {
    const response = await fetch('/.netlify/functions/read-all-cars')
    if(!response.ok) throw response;
    const cars = await response.json();
    console.log(cars);
    render(cars)
  } catch (err) {
    alert('Error fetching. Check console');
    console.log(err);
  }
}

getData();