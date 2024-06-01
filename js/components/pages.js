function loadContent(page) {
  var contentHTML = "";

 
  switch (page) {

         // Despre mine
    case "about":
      contentHTML = `
      <h1>Despre mine</h1>
            <main>
                
                <div class="listCustom">
                    <ul>
                        <li>Numele meu : Tamba Robert Cristian</li>
                        <li>Cati ani am : 21 ani</li>
                        <li>Unde locuiesc : Romania ; Bucuresti</li>
                        <li>Ce hobby-uri am : Website Developing ,Discord Server Creator ,Gaming</li>
                        <li>Cum ma puteti contacta : 
                            <ul>
                                <li>Discord : _atemis</li>
                                <li>Skype : Leaqwid</li>
                                <li>Microsoft Teams : - Leaqwid - </li>
                                <li><a href="https://www.facebook.com/profile.php?id=100077500881403" rel="noopener" target="_blank">Facebook</a></li>
                                <li><a href="https://www.instagram.com/robertcristian2517/" rel="noopener" target="_blank">Instagram</a></li>
                                <li>Gmail : tambarobert1355@gmail.com</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </main>
                `;
      break;



     // Proiectele mele
    case "projects":
      contentHTML = `
      <h1>Projects</h1>
      <main>
           

      </main>`
      break;

    // Cum am facut acest website
    case "how":
      contentHTML = `
      <h1>Cum am facut acest Website</h1>
            <main>
                
                
    <div>
         <p>Am incercat sa structurez din punct de vedere structural al codului si functional din partea Userul-ui ,deoarece este important UX (User Experience-ul) cand vine vorba de crearea unui Website</p>

           <p>M-am gandit in felul urmator : </p>
           <ul>
                <li>Sa imi aranjez codurile html prin Javascript</li>
                <li>Acest aranjament le voi numii componente in care daca vreau sa modific ceva ,doar intru in folderul javascript si modific si prin aceasta metoda am inteles ca sunt folosite in acest mod de catre frameworkuri/libreries doar ca am facut in cod pur</li>
               <li>URL-ul nu se schimba deoarece am folosit un cod Javascript in care schimba continutul paginii Index.html</li>
             </ul>
         
    </div>

            </main>`;
      break;







      
    default:
      contentHTML = `<p>Pagina nu a fost găsită.</p>`;
  }

  
  document.getElementById("contentContainer").innerHTML = contentHTML;
}

export { loadContent };
