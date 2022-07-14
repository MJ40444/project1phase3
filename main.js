import './style.css';


function (fe)
fetch('https://picsum.photos/v2/list?page=2&limit=100')
  .then((res) => res.json())
  .then((listOfPhotos) => {
    const i = Math.floor(Math.random() * 100);

    console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);

    const button = document.querySelector('#button');
    button.addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });

    document.querySelector('#app').innerHTML += `
     <h2> ${listOfPhotos[i].author} - ${listOfPhotos[i].id}</h2>
    <img src="${listOfPhotos[i].download_url}" alt="Random Picture" />
    `;
  });
