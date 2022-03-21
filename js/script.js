/*
Treehouse Techdegree: Data Pagination and Filtering
*/


/*
This function creates and inserts the neccessary elements needed to display a list or page, of nine students
*/
function showPage(list, page) {
   const startIndex = ( page * numOfItems ) - numOfItems;
   const endIndex = page * numOfItems;
   const student_list = document.querySelector('.student-list');
   student_list.innerHTML = '';

   for (i = 0; i < list.length; i++) {
      const student_info = `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
       </li>
      `;
      if (i >= startIndex && i < endIndex) {
         student_list.insertAdjacentHTML('beforeend', student_info);
      }
   }
}


/*
A function to create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
   const numOfPages = Math.ceil(list.length / numOfItems);
   const link_list = document.querySelector('.link-list');
   link_list.innerHTML = '';
   for (i = 0; i < numOfPages; i++) {
      const pageButton = `
         <li>
            <button type="button">${i + 1}</button>
         </li>
      `;
      link_list.insertAdjacentHTML('beforeend', pageButton);
   }
   
   if (link_list.getElementsByTagName('li').length > 0) {
      const firstButton = link_list.firstElementChild.firstElementChild;
      firstButton.className = 'active';
   }

   link_list.addEventListener('click', (e) => {
      if (e.target.type === 'button') {
         const btns = document.querySelectorAll('button');
         for (i = 0; i < btns.length; i++) {
            btns[i].className = '';
         }
         e.target.className = 'active';
         showPage(list, parseInt(e.target.innerText));
      }
   });
}


// Calls both functions above
showPage(data, 1);
addPagination(data);




// code for "Exceeds Expectations" -


// creates a search bar that the user can interact with to find a specific name
const searchBar = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;
document.querySelector('.header').insertAdjacentHTML('beforeend', searchBar);

// Neccesary variables for nesting the users action into the search bar, as well as clicking the "search button"
const search = document.querySelector('#search');
const submit = document.querySelector('.student-search button');
let studentMatches = [];

//
function searchForStudents (searchInput, names) {
   studentMatches = [];
   for (i = 0; i < names.length; i++){
      const studentName = names[i].name.first.toLowerCase() + ' ' + names[i].name.last.toLowerCase();
      if (studentName.includes(searchInput.value.toLowerCase()) ) {
         studentMatches.push(names[i]);
      }
   }
}



