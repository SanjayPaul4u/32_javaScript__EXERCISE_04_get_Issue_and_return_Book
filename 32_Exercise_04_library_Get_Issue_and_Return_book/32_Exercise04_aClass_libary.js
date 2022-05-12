console.log("Exercise 4: creating a class Libary.");
// you should go for exercise4 solution

class Libary{
    constructor(givenBook1, givenBook2, givenBook3, givenBook4, givenBook5){
        this.book1 = givenBook1;
        this.book2 = givenBook2;
        this.book3 = givenBook3;
        this.book4 = givenBook4;
        this.book5 = givenBook5;
    }
    getBookList(){
        return `Book List Are:     ${this.book1}, ${this.book2}, ${this.book3}, ${this.book4}, ${this.book5}`;
    }
    issueBook(bookName, user){
        let bookNAndUserN = localStorage.getItem("issueBook");
        let arr;
        if (bookNAndUserN === null){
        arr= [];
        }
        else{
            arr= JSON.parse(bookNAndUserN);
        }
        let obj = {
            book : bookName,
            user : user
        }
        arr.push(obj)
        localStorage.setItem("issueBook", JSON.stringify(arr));
        arr.forEach(function(e){
            console.log(`This user name: ${e.user} take this book Name: ${e.book}`);
        })
    }
    returnBook(bookName){
        let bookNAndUserN = localStorage.getItem("issueBook");
        let arr;
        if (bookNAndUserN === null){
        arr= [];
        }
        else{
            arr= JSON.parse(bookNAndUserN);
        }

        let indexPoint;
        let elementPoint;
        arr.forEach(function(element, index){
            elementPoint = element.book;
            if(elementPoint.includes(bookName)){
                indexPoint=index;
                // console.log(indexPoint);
                arr.splice(indexPoint, 1);
                localStorage.setItem("issueBook", JSON.stringify(arr));
            }
        })

        
    }
}

let allBook = new Libary("History", "Geography", "Enlish", "Biology", "LifeScience");
console.log(allBook);
console.log(allBook.getBookList());

// console.log(allBook.issueBook("History", "shayam"));
// console.log(allBook.issueBook("Hidasfsdy", "shayfdasf"));
// console.log(allBook.issueBook("rahul", "biology"));

// console.log(allBook.returnBook("History"));