class BookList {
    constructor(title, isRead, allbooks) {
        this.title = title;
        this.isRead = true;
        this.allbooks = ['book1']
    }

    addBook() {
        return `Нова книга "${this.title}""`
  }

}
  
class Book extends BookList {
    constructor(title, author) {
        super(title);
        this.author = author;
    } 
  }
  
const book1 = new Book('Хіба ревуть воли', 'Панас Мирний');
const book2 = new Book('Вечори на хуторі біля Диканьки', 'Микола Гоголь');

console.log(book1);

console.log(book1.addBook());
