/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
