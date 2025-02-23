import books from "./example_files/books.json" assert { type: "json" };

//#region function -----------------------------------------------------------------

function booksStartingWithThe(books) {
    let titlesStartingWithThe = [];
    for (let book of books) {
        let title = book.title;
        let startsWithThe = false;
        if (title.length >= 3 && title[0] === 'T' && title[1] === 'h' && title[2] === 'e') {
            startsWithThe = true;
        }
        if (startsWithThe) {
            titlesStartingWithThe[titlesStartingWithThe.length] = title;
        }
    }
    return titlesStartingWithThe;
}

function booksByAuthorsWithT(books) {
    let titlesWrittenByAuthorsWithT = [];
    for (let book of books) {
        let author = book.author;
        let hasT = false;
        for (let i = 0; i < author.length; i++) {
            if (author[i] === 't' || author[i] === 'T') {
                hasT = true;
                break;
            }
        }
        if (hasT) {
            titlesWrittenByAuthorsWithT[titlesWrittenByAuthorsWithT.length] = book.title;
        }
    }
    return titlesWrittenByAuthorsWithT;
}

function booksAfter1992(books) {
    let count = 0;
    for (let book of books) {
        if (book.publication_year > 1992) {
            count++;
        }
    }
    return count;
}

function booksBefore2004(books) {
    let count = 0;
    for (let book of books) {
        if (book.publication_year < 2004) {
            count++;
        }
    }
    return count;
}

function isbnNumbersByAuthor(books, author) {
}

function booksAscendingAlphabeticallyByAuthor(books, author) {
}

function booksDescendingAlphabeticallyByAuthor(books, author) {
}

function booksAscendingChronologically(books) {
}

function booksDescendingChronologically(books) {
}

function booksGroupedByAuthorLastName(books) {
}

function booksGroupedByAuthorFirstName(books) {
}




//#endregion

//#region results -----------------------------------------------------------------

console.log("Here is the list of books starting with 'The'");
console.log(booksStartingWithThe(books));
console.log("Here is the list of books written by authors with 't' in their name");
console.log(booksByAuthorsWithT(books));
console.log("The number of books written after 1992 is " + booksAfter1992(books));
console.log("The number of books written before 2004 is " + booksBefore2004(books));


//#endregion