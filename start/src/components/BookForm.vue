<template>
	<form @submit.prevent="save" class="book-form">
		<input v-model="title" placeholder="Title" required class="input-field" />
		<input v-model="author" placeholder="Author" required class="input-field" />
		<input v-model="dateFinished" type="date" required class="input-field" />
		<div class="button-group">
			<button type="button" @click="$emit('close')" class="button button-secondary">Cancel</button>
			<button type="submit" class="button" v-if="edit">Update</button>
			<button type="submit" class="button" v-else>Save</button>
		</div>
	</form>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["save", "close", "update"]);
const props = defineProps(["book", "edit"]);
const title = ref(props.book?.title || "");
const author = ref(props.book?.author || "");
const dateFinished = ref(props.book?.dateFinished || "");

const save = () => {
	const book = { title: title.value, author: author.value, dateFinished: dateFinished.value };
	if (props.edit) {
		book.id = props.book.id;
		emit("update", book);
		return;
	} else {
		emit("save", book);
		title.value = "";
		author.value = "";
		dateFinished.value = "";
	}
};
</script>

<style scoped>
.book-form {
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 400px;
	margin: auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f9f9f9;
}

.input-field {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
}

.button-group {
	display: flex;
	justify-content: space-between;
}

.button {
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	background-color: #007bff;
	color: white;
	font-size: 16px;
	cursor: pointer;
}

.button:hover {
	background-color: #0056b3;
}

.button-secondary {
	background-color: #ccc;
	color: black;
}
</style>
