<template>
  <form @submit.prevent="update">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-2">
        <label class="form-label">Beds</label>
        <input v-model.number="form.beds" class="form-input" type="text" />
        <div v-if="form.errors.beds">
          {{ form.errors.beds }}
        </div>
      </div>

      <div class="col-span-2">
        <label class="form-label">Baths</label>
        <input v-model.number="form.baths" class="form-input" type="text" />
        <div v-if="form.errors.baths">
          {{ form.errors.baths }}
        </div>
      </div>

      <div class="col-span-2">
        <label class="form-label">Area</label>
        <input v-model.number="form.area" class="form-input" type="text" />
        <div v-if="form.errors.area">
          {{ form.errors.area }}
        </div>
      </div>

      <div class="col-span-4">
        <label class="form-label">City</label>
        <input v-model="form.city" class="form-input" type="text" />
        <div v-if="form.errors.city">
          {{ form.errors.city }}
        </div>
      </div>

      <div class="col-span-2">
        <label class="form-label">Post Code</label>
        <input v-model="form.code" class="form-input" type="text" />
        <div v-if="form.errors.code">
          {{ form.errors.code }}
        </div>
      </div>

      <div class="col-span-4">
        <label class="form-label">Street</label>
        <input v-model="form.street" class="form-input" type="text" />
        <div v-if="form.errors.street">
          {{ form.errors.street }}
        </div>
      </div>

      <div class="col-span-2">
        <label class="form-label">Street Nr</label>
        <input v-model="form.street_nr" class="form-input" type="text" />
        <div v-if="form.errors.street_nr">
          {{ form.errors.street_nr }}
        </div>
      </div>

      <div class="col-span-6">
        <label class="form-label">Price</label>
        <input v-model.number="form.price" class="form-input" type="text" />
        <div v-if="form.errors.price">
          {{ form.errors.price }}
        </div>
      </div>

      <div class="col-span-6">
        <button type="submit" class="btn-primary">Update</button>
      </div>
    </div>
  </form>
</template>
  
<script setup>
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
  listing: Object,
})

const form = useForm({
  beds: props.listing.beds,
  baths: props.listing.baths,
  area: props.listing.area,
  city: props.listing.city,
  code: props.listing.code,
  street: props.listing.street,
  street_nr: props.listing.street_nr,
  price: props.listing.price,
})

const update = () => form.put(route('listing.update', props.listing.id))
</script>

<style scoped>
label {
  margin-right: 2em;
}

div {
  padding: 2px;
}
</style>