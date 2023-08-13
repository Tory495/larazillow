<template>
  <form @submit.prevent="login">
    <div class="w-1/2 mx-auto">
      <div>
        <label for="email" class="form-label">E-mail</label>
        <input id="email" v-model="form.email" class="form-input" type="text" />
        <div v-if="form.errors.email" class="form-input-error">
          {{ form.errors.email }}
        </div>
      </div>
      <div class="mt-4">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          v-model="form.password"
          class="form-input"
          type="password"
        />
        <div v-if="form.errors.password" class="form-input-error">
          {{ form.errors.password }}
        </div>
      </div>
      <div class="mt-4">
        <button type="submit" class="btn-primary w-full">Submit</button>
        <div class="mt-2 text-center">
          <Link :href="route('register')" class="text-sm text-gray-500">
            Need an account? Click here
          </Link>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useForm, Link } from '@inertiajs/vue3'

const form = useForm({
  email: null,
  password: null,
})

const login = () => form.post(route('login.store'))
</script>