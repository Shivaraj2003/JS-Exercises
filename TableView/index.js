const page_limit = 5;
var currentPage = 1;



const btns = document.querySelectorAll('.page-link');

for (let i = 0; i < btns.length; i++) {
    let curBtn = btns[i];
    btns[i].addEventListener('click', () => {

        let pageNum = btns[i].textContent;

        if (pageNum === 'Prev') {
            if (currentPage == 1)
                // document.getElementById("prev").disabled = true;
                console.log(Number(btns[btns.length - 1].textContent) > 3);
            else {
                updatePageNum(pageNum);
                currentPage -= 1;
            }
        }




        else if (pageNum == 'Next') {
            let totalPages = Math.ceil(100 / page_limit);
            if (currentPage == totalPages) {
                document.getElementById("next").disabled = true;

            }
            else {
                currentPage += 1;
                updatePageNum(pageNum);
                document.getElementById("next").disabled = false;

            }
        }
        else {
            currentPage = Number(pageNum);
            document.getElementById("prev").disabled = false;

        }



        loadDataAndDisplay(currentPage);

    }
    )
}

document.getElementById('prev').addEventListener('click', () => {

});


function updatePageNum(btn) {
    if (btn == 'Next') {
        for (let i = 1; i < btns.length - 1; i++) {
            btns[i].textContent = Number(btns[i].textContent) + 1;
        }
        console.log(currentPage);
    }

    else if (btn == 'Prev') {
        for (let i = 1; i < btns.length - 1; i++) {
            btns[i].textContent = Number(btns[i].textContent) - 1;
        }
    }
}


async function loadDataAndDisplay(currentPage = 1) {
    try {
        const response = await fetch("movies.json");
        const data = await response.json();
        const tableBody = document.querySelector("#tableBody");
        //data.sort((a, b) => b.imdb.rating - a.imdb.rating);
      
        tableBody.innerHTML = "";

        let startIndex = (currentPage - 1) * 5;
        let endIndex = currentPage * 5 - 1;

        for (let i = startIndex; i <= endIndex; i++) {
            {
                const row = document.createElement("tr");
                row.innerHTML = `
        <td>${i + 1}</td>
        <td>${data[i].title}</td>
        <td>${data[i].imdb.rating}</td>
        <td>${data[i].tomatoes.viewer.rating}</td>
        <td>${(data[i].imdb.rating + data[i].tomatoes.viewer.rating).toFixed(2)}</td>
        <td>${data[i].plot}</td>
      `;
                tableBody.appendChild(row);
            }
        }


        //     data.forEach((movie, index) => {
        // if(index>=startIndex && index<=endIndex)
        //       {const row = document.createElement("tr");
        //       row.innerHTML = `
        //         <td>${index + 1}</td>
        //         <td>${movie.title}</td>
        //         <td>${movie.imdb.rating}</td>
        //         <td>${movie.tomatoes.viewer.rating}</td>
        //         <td>${(movie.imdb.rating + movie.tomatoes.viewer.rating).toFixed(2)}</td>
        //         <td>${movie.plot}</td>
        //       `;
        //       tableBody.appendChild(row);}

        //     });

    } catch (error) {
        console.error("Error fetching or parsing data:", error);
    }

    
}



loadDataAndDisplay();
