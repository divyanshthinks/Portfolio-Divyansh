const hamburger = document.querySelector('.hamburger');
const navPop = document.querySelector('.navPop');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navPop.classList.toggle('active'); 
});
document.querySelectorAll('.nav-item').forEach(n => {
   return n.addEventListener('click', () => {
      hamburger.classList.remove("active");
      navPop.classList.remove("active");
   });
})

let store = [
  {
     name: "Multi Post Stories",
     description: "A daily selection of privately personalized readsno accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
     techno1: "html",
     techno2: "css",
     techno3: "Bootstrap",
     techno4: "Ruby",
     image: "resources/work-img.png"
  }  
]

const pro1 = document.getElementById("project1");

store.forEach((store, index) => {
   let image1 = document.createElement('img');
   image1.setAttribute('src', store.image);
   image1.className = "work-image";
   pro1.appendChild(image1);

   let prohead = document.createElement('h2');
   prohead.setAttribute('id', 'sub-heading1');
   let proheadco = document.createTextNode(store.name);
   prohead.appendChild(proheadco);
   
   pro1.appendChild(prohead);   

   let paracon = document.createElement('p');
   paracon.setAttribute('id', 'content1');
   let con1 = document.createTextNode(store.description);
   paracon.appendChild(con1);
   pro1.appendChild(paracon);
   
   let list1 = document.createElement('ul');
   list1.setAttribute('id', 'list1');
   pro1.appendChild(list1);

   let li1 = document.createElement('li');
   li1.setAttribute('class', 'lang');
   li1.innerText = store.techno1;
   list1.appendChild(li1);

   let li2 = document.createElement('li');
   li2.setAttribute('class', 'lang');
   li2.innerText = store.techno2;
   list1.appendChild(li2);

   let li3 = document.createElement('li');
   li3.setAttribute('class', 'lang');
   li3.innerText = store.techno3;
   list1.appendChild(li3);

   let li4 = document.createElement('li');
   li4.setAttribute('class', 'lang');
   li4.innerText = store.techno4;
   list1.appendChild(li4);

   let button1 = document.createElement('button');
   button1.setAttribute('id', 'button1');
   button1.innerText = "See Project";
   pro1.appendChild(button1);
})

const pro2 = document.getElementById("project2");

store.forEach((store, index) => {
   let image2 = document.createElement('img');
   image2.setAttribute('src', store.image);
   image2.className = "work-image";
   pro2.appendChild(image2);

   let prohead = document.createElement('h2');
   prohead.setAttribute('id', 'sub-heading2');
   let proheadco = document.createTextNode(store.name);
   prohead.appendChild(proheadco);
   
   pro2.appendChild(prohead);   

   let paracon = document.createElement('p');
   paracon.setAttribute('id', 'content2');
   let con1 = document.createTextNode(store.description);
   paracon.appendChild(con1);
   pro2.appendChild(paracon);
   
   let list1 = document.createElement('ul');
   list1.setAttribute('id', 'list2');
   pro2.appendChild(list1);

   let li1 = document.createElement('li');
   li1.setAttribute('class', 'lang');
   li1.innerText = store.techno1;
   list1.appendChild(li1);

   let li2 = document.createElement('li');
   li2.setAttribute('class', 'lang');
   li2.innerText = store.techno2;
   list1.appendChild(li2);

   let li3 = document.createElement('li');
   li3.setAttribute('class', 'lang');
   li3.innerText = store.techno3;
   list1.appendChild(li3);

   let li4 = document.createElement('li');
   li4.setAttribute('class', 'lang');
   li4.innerText = store.techno4;
   list1.appendChild(li4);

   let button1 = document.createElement('button');
   button1.setAttribute('id', 'button1');
   button1.innerText = "See Project";
   pro2.appendChild(button1);
})

const pro3 = document.getElementById("project3");

store.forEach((store, index) => {
   let image2 = document.createElement('img');
   image2.setAttribute('src', store.image);
   image2.className = "work-image";
   pro3.appendChild(image2);

   let prohead = document.createElement('h2');
   prohead.setAttribute('id', 'sub-heading3');
   let proheadco = document.createTextNode(store.name);
   prohead.appendChild(proheadco);
   
   pro3.appendChild(prohead);   

   let paracon = document.createElement('p');
   paracon.setAttribute('id', 'content3');
   let con1 = document.createTextNode(store.description);
   paracon.appendChild(con1);
   pro3.appendChild(paracon);
   
   let list1 = document.createElement('ul');
   list1.setAttribute('id', 'list3');
   pro3.appendChild(list1);

   let li1 = document.createElement('li');
   li1.setAttribute('class', 'lang');
   li1.innerText = store.techno1;
   list1.appendChild(li1);

   let li2 = document.createElement('li');
   li2.setAttribute('class', 'lang');
   li2.innerText = store.techno2;
   list1.appendChild(li2);

   let li3 = document.createElement('li');
   li3.setAttribute('class', 'lang');
   li3.innerText = store.techno3;
   list1.appendChild(li3);

   let li4 = document.createElement('li');
   li4.setAttribute('class', 'lang');
   li4.innerText = store.techno4;
   list1.appendChild(li4);

   let button1 = document.createElement('button');
   button1.setAttribute('id', 'button1');
   button1.innerText = "See Project";
   pro3.appendChild(button1);
})

const pro4 = document.getElementById("project4");

store.forEach((store, index) => {
   let image2 = document.createElement('img');
   image2.setAttribute('src', store.image);
   image2.className = "work-image";
   pro4.appendChild(image2);

   let prohead = document.createElement('h2');
   prohead.setAttribute('id', 'sub-heading4');
   let proheadco = document.createTextNode(store.name);
   prohead.appendChild(proheadco);
   
   pro4.appendChild(prohead);   

   let paracon = document.createElement('p');
   paracon.setAttribute('id', 'content4');
   let con1 = document.createTextNode(store.description);
   paracon.appendChild(con1);
   pro4.appendChild(paracon);
   
   let list1 = document.createElement('ul');
   list1.setAttribute('id', 'list4');
   pro4.appendChild(list1);

   let li1 = document.createElement('li');
   li1.setAttribute('class', 'lang');
   li1.innerText = store.techno1;
   list1.appendChild(li1);

   let li2 = document.createElement('li');
   li2.setAttribute('class', 'lang');
   li2.innerText = store.techno2;
   list1.appendChild(li2);

   let li3 = document.createElement('li');
   li3.setAttribute('class', 'lang');
   li3.innerText = store.techno3;
   list1.appendChild(li3);

   let li4 = document.createElement('li');
   li4.setAttribute('class', 'lang');
   li4.innerText = store.techno4;
   list1.appendChild(li4);

   let button1 = document.createElement('button');
   button1.setAttribute('id', 'button1');
   button1.innerText = "See Project";
   pro4.appendChild(button1);
})
const forapp = document.querySelector(".mobile-work");
const popop = document.querySelectorAll("#button1");

popop.forEach(button1 => {
  button1.addEventListener("click", () => {
    const popup = document.querySelector(".pop");
    popup.innerHTML = `
    <article class="pop1">
        <div class="pop-title">
       <h2 id="pop-head">Multi Post Stories</h2>
       <img src="resources/close.png" id="closeall">
        </div>
        <br>
        <br>
       <img id="pop-image" src="resources/popmobile.png" alt="popup image">
       <br>
       <br>
       <p id="pop-des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.</p>
       <br>
           <ul class="poplist">
               <li class="pop-item">html</li>
               <li  class="pop-item">Ruby On Rails</li>
               <li class="pop-item">CSS</li>
           </ul>
           <br>
           <br>
           <div class="buttons">
           <button id="live">See Live </button>
           <br>
           <button id="source">See Source </button>
           </div>
    </article>
    `;
    forapp.appendChild(popup);

    const close = document.querySelector("#closeall");

    close.addEventListener("click", () => {
       popup.innerHTML = ``;
    });
  });
});

const desktopsection = document.querySelector("#Portfolio");

const desktopinfo = [
   {
    head: "desktop-project1",  
    projecttitle: "Multi Post Stories",
    projectdes: "A daily selection of privately personalized reads;<br> no accounts or sign-ups required. has been<br> the industry's standard dummy text ever since the 1500s,<br>when an unknown printer took a standard dummy text.", 
    tech1: "CSS",
    tech2: "Html",
    tech3: "Bootstrap",
    tech4: "Ruby"
   },

   {
      head: "desktop-project2",  
      projecttitle: "Multi Post Stories",
      projectdes: "A daily selection of privately personalized reads;<br> no accounts or sign-ups required. has been<br> the industry's standard dummy text ever since the 1500s,<br>when an unknown printer took a standard dummy text.", 
      tech1: "CSS",
      tech2: "Html",
      tech3: "Bootstrap",
      tech4: "Ruby"
     },
     {
      head: "desktop-project3",  
      projecttitle: "Multi Post Stories",
      projectdes: "A daily selection of privately personalized reads;<br> no accounts or sign-ups required. has been<br> the industry's standard dummy text ever since the 1500s,<br>when an unknown printer took a standard dummy text.", 
      tech1: "CSS",
      tech2: "Html",
      tech3: "Bootstrap",
      tech4: "Ruby"
     },

     {
      head: "desktop-project4",  
      projecttitle: "Multi Post Stories",
      projectdes: "A daily selection of privately personalized reads;<br> no accounts or sign-ups required. has been<br> the industry's standard dummy text ever since the 1500s,<br>when an unknown printer took a standard dummy text.", 
      tech1: "CSS",
      tech2: "Html",
      tech3: "Bootstrap",
      tech4: "Ruby"
     }
]

const deskpro = () => {
   let deskcard = "";
    for(let i = 0; i < desktopinfo.length; i++){
     const pro = `
     <div class="${desktopinfo[i].head}">
        <img src="resources/Img Placeholder (2).png" alt="work-image" class="desktop-image">
        <br>
        <section class="desktop-content1">
            <h2 id="desktop-subheading1">${desktopinfo[i].projecttitle}</h2>
        <p id="desktop-content1">${desktopinfo[i].projectdes}</p>
            <ul id="desktop-list1">
                <li class="lang">${desktopinfo[i].tech1}</li>
                <li class="lang">${desktopinfo[i].tech2}</li>
                <li class="lang">${desktopinfo[i].tech3}</li>
                <li class="lang">${desktopinfo[i].tech4}</li>   
            </ul>
            <button id="desktop-button1">See Project</button>
            </section>   
     </div>
     `  
     deskcard += pro;
    }
    desktopsection.innerHTML = deskcard;
}
deskpro ();

const fordesk = document.querySelector(".work");
const deskpop = document.querySelectorAll("#desktop-button1");
const btn = document.querySelector("#desktop-button1");
deskpop.forEach(btn => {
   btn.addEventListener("click", () => {
      const deskup = document.querySelector(".desk-pop");
      deskup.innerHTML = `
      <article class="desk-pop1">
      <div class="desk-pop-title">
     <h2 id="desk-pop-head">Multi Post Stories</h2>
     <img src="resources/close.png" id="deskcloseall">
      </div>
      <br>
      <br>
     <img id="desk-pop-image" src="resources/popmobile.png" alt="popup image">
     <br>
     <br>
     <p id="desk-pop-des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.</p>
     <br>
         <ul class="deskpoplist">
             <li class="desk-pop-item">html</li>
             <li  class="desk-pop-item">Ruby On Rails</li>
             <li class="desk-pop-item">CSS</li>
             <li class="desk-pop-item">Github</li>
         </ul>
         <br>
         <br>
         <div class="desk-buttons">
         <button id="desk-live">See Live </button>
         <br>
         <button id="desk-source">See Source </button>
         </div>
  </article>
      `;
      fordesk.appendChild(deskup);
      const deskclose = document.querySelector("#deskcloseall");

      deskclose.addEventListener("click", () => {
         deskup.innerHTML = ``;
      });
   });
});






