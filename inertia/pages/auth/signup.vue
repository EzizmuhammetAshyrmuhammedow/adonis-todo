<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <Card class="w-full max-w-sm">
      <template #title>
        <h1 class="text-2xl font-bold">Signup</h1>
      </template>
      <template #subtitle>
        <p class="text-sm">Enter your details below to create your account</p>
      </template>
      <template #content>
        <Form v-slot="{ processing, errors }" route="new_account.store" class="flex flex-col gap-4">

          <div class="flex flex-col gap-2">
            <label for="fullName">Full name</label>
            <InputText id="fullName" name="fullName" type="text" :invalid="!!errors.fullName" />
            <small v-if="errors.fullName" class="text-red-500">{{ errors.fullName }}</small>
          </div>

          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <InputText id="email" name="email" type="email" autocomplete="email" :invalid="!!errors.email" />
            <small v-if="errors.email" class="text-red-500">{{ errors.email }}</small>
          </div>

          <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <Password id="password" name="password" autocomplete="new-password" :invalid="!!errors.password" toggleMask
              class="w-full" inputClass="w-full" />
            <small v-if="errors.password" class="text-red-500">{{ errors.password }}</small>
          </div>

          <div class="flex flex-col gap-2">
            <label for="passwordConfirmation">Confirm password</label>
            <Password id="passwordConfirmation" name="passwordConfirmation" autocomplete="new-password"
              :invalid="!!errors.passwordConfirmation" :feedback="false" toggleMask class="w-full"
              inputClass="w-full" />
            <small v-if="errors.passwordConfirmation" class="text-red-500">{{ errors.passwordConfirmation }}</small>
          </div>

          <Button type="submit" label="Sign up" :loading="processing" class="mt-2" />
        </Form>
      </template>
    </Card>
  </div>
</template>
