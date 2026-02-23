<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const message = ref("");

onMounted(async () => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/api/demo"
    );
    message.value = res.data.message;
  } catch (err) {
    message.value = "Error connecting to backend";
  }
});
</script>

<template>
  <div>
    <h1>Demo API</h1>
    <p>{{ message }}</p>
  </div>
</template>