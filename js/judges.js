const judges = [
    {
        id: 1,
        name: "N/A",
        designation: "N/A",
        image: "image/demo-profile.jpg"
    },
    {
        id: 2,
        name: "N/A",
        designation: "N/A",
        image: "image/demo-profile.jpg"
    },
    {
        id: 3,
        name: "N/A",
        designation: "N/A",
        image: "image/demo-profile.jpg"
    },
    {
        id: 3,
        name: "N/A",
        designation: "N/A",
        image: "image/demo-profile.jpg"
    },
];

const display = () => {
    for(let judge of judges){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 mx-5 lg:mx-0">
            <div class="relative">
              <img
                class="w-full h-60 object-cover"
                src="${judge.image}"
                alt="Member 1"
              />
            </div>
            <div class="p-6 text-center BgGradient">
              <h2 class="text-xl font-semibold text-white">${judge.name}</h2>
              <p class="text-gray-200">${judge.designation}</p>
            </div>
        </div>
        `;
        document.getElementById('judges-conatiner').appendChild(div);
    }
}

display();
