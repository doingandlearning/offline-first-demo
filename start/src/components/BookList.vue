<template>
	<ul class="book-list">
		<li v-for="book in books" :key="book.id" class="book-item">
			{{ book.title }} by {{ book.author }} (Finished: {{ book.dateFinished }})
			<button @click="editBook(book)">Edit</button>
			<button @click="deleteBook(book.id)">Delete</button>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import type { Book } from "../types/Book"

defineProps(["books"]);
const emit = defineEmits(["edit", "delete"]);

function editBook(book: Book) {
	emit("edit", book);
}

function deleteBook(bookId: number) {
	emit("delete", bookId);
}
</script>

<style scoped>
.book-list {
	list-style-type: none;
	padding: 0;
}

.book-item {
	background-color: #f9f9f9;
	margin: 10px 0;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
}

.book-item:nth-child(odd) {
	background-color: #f1f1f1;
}
</style>
