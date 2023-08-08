<template>
  <form @submit.prevent="login">
    <div class="w-1/2 mx-auto">
      <div>
        <label for="email" class="form-label">E-mail</label>
        <input id="email" v-model="form.email" class="form-input" type="text" />
        <div class="form-input-error">Potential errors</div>
      </div>
      <div class="mt-4">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          v-model="form.password"
          class="form-input"
          type="password"
        />
      </div>
      <div class="mt-4">
        <button type="submit" class="btn-primary w-full">Submit</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  email: null,
  password: null,
})

const login = () => form.post(route('login.store'))
</script>