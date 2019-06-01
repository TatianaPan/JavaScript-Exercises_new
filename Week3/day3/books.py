class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f"{self.title} by {self.author}"


class BookShelf:
    def __init__(self, books):
        self.books = books
        self.book_storage = []
        self.add_book()

    def __str__(self):
        result = ""
        for book in self.book_storage:
            result += str(book) + "\n"
        return result

    def add_book(self):

        for title, author in self.books:
            book = Book(title, author)
            self.book_storage.append(book)

    def print_bookshelf(self):
        for book in self.book_storage:
            print(book)


book_shelf = BookShelf(books=[
    ('The old man and the see', 'Ernest Hemingway'),
    ('Beyond Good and Evil', 'Friedrich Nietzsche'),
])
print(book_shelf)
