<template>
  <form @submit.prevent="create">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-2">
        <label class="form-label">Beds</label>
        <input v-model.number="form.beds" type="text" class="form-input" />
        <InputError :error-message="form.errors.beds" />
      </div>

      <div class="col-span-2">
        <label class="form-label">Baths</label>
        <input v-model.number="form.baths" type="text" class="form-input" />
        <InputError :error-message="form.errors.baths" />
      </div>

      <div class="col-span-2">
        <label class="form-label">Area</label>
        <input v-model.number="form.area" type="text" class="form-input" />
        <InputError :error-message="form.errors.area" />
      </div>

      <div class="col-span-4">
        <label class="form-label">City</label>
        <input v-model="form.city" type="text" class="form-input" />
        <InputError :error-message="form.errors.city" />
      </div>

      <div class="col-span-2">
        <label class="form-label">Post Code</label>
        <input v-model="form.code" type="text" class="form-input" />
        <InputError :error-message="form.errors.code" />
      </div>

      <div class="col-span-4">
        <label class="form-label">Street</label>
        <input v-model="form.street" type="text" class="form-input" />
        <InputError :error-message="form.errors.street" />
      </div>

      <div class="col-span-2">
        <label class="form-label">Street Nr</label>
        <input v-model="form.street_nr" type="text" class="form-input" />
        <InputError :error-message="form.errors.street_nr" />
      </div>

      <div class="col-span-6">
        <label class="form-label">Price</label>
        <input v-model.number="form.price" type="text" class="form-input" />
        <InputError :error-message="form.errors.price" />
      </div>

      <div class="col-span-6">
        <button type="submit" class="btn-primary">Create</button>
      </div>
    </div>
  </form>
</template>
  
<script setup>
import { useForm } from '@inertiajs/vue3'
import InputError from '@/Components/UI/InputError.vue'

const form = useForm({
  beds: 0,
  baths: 0,
  area: 0,
  city: null,
  code: null,
  street: null,
  street_nr: null,
  price: 0,
})

const create = () => form.post(route('listing.store'))

</script>

<style scoped>
label {
  margin-right: 2em;
}

div {
  padding: 2px;
}
</style>