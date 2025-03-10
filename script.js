const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// seleziono elemento da html
const newTaskElementCards = document.getElementById("team-cards")

/* come agiungere un elemento a html da javascript ( struttura esercizio: simon says)
    
        // Creare un nuovo elemento paragrafo
        var nuovoParagrafo = document.createElement("p");
        // Aggiungere del testo al paragrafo
        nuovoParagrafo.textContent = "Questo è un nuovo paragrafo aggiunto con JavaScript.";
        // Aggiungere il paragrafo al contenitore
        document.getElementById("contenitore").appendChild(nuovoParagrafo);

        for (let i = 0; i < randomNumbers.length; i++) {
    const li = document.createElement("li")
    li.textContent = randomNumbers[i]
    numbersList.appendChild(li)

     if (count === 0) {
        console.log("indovina i numeri")
        clearInterval(countdown)
        instructions.textContent = "inserisci i numeri che ricordi"
        numbersList.remove("d-none")
        answersForm.classList.remove("d-none")
        return
    }
    return
}
   */
renderHTML(newTaskElementCards)

function renderHTML(parent, elements) {
  for (let i = 0; i < teamMembers.length; i++) {
    console.log(parent)
    const div = document.createElement("div")

    div.innerHTML

  }

}