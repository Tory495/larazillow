<template>
  <form @submit.prevent="register">
    <div class="w-1/2 mx-auto">
      <div>
        <label for="name" class="form-label">Your Name</label>
        <input id="name" v-model="form.name" class="form-input" type="text" />
        <div v-if="form.errors.name" class="form-input-error">
          {{ form.errors.name }}
        </div>
      </div>
      <div class="mt-4">
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
        <label for="password_confirmation" class="form-label">Confirm Password</label>
        <input
          id="password_confirmation"
          v-model="form.password_confirmation"
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
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
})

const register = () => form.post(route('register.store'))
</script>