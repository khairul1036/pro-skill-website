const judges = [
    {
        id: 1,
        name: "John Doe",
        designation: "Chief Justice",
        image: "https://firebasestorage.googleapis.com/v0/b/test-d262e.appspot.com/o/coo.png?alt=media&token=438c516b-ae7e-43fb-b2bb-19d923315de7"
    },
    {
        id: 2,
        name: "Jane Smith",
        designation: "Associate Justice",
        image: "https://firebasestorage.googleapis.com/v0/b/test-d262e.appspot.com/o/cpo.JPG?alt=media&token=f259f823-3ced-4bc3-97fa-2ce29630ac76"
    },
    {
        id: 3,
        name: "Emily Johnson",
        designation: "District Judge",
        image: "https://firebasestorage.googleapis.com/v0/b/test-d262e.appspot.com/o/cto.png?alt=media&token=188dd5c3-0bce-4b18-896f-6c5374a874b6"
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
