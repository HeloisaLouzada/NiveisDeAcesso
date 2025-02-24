<script lang="ts">
export default {
  name: "LoginForm",
  data() {
    return {
      CPF: "",
      Password: "",
    };
  },
}
</script>

<template>
  <v-sheet class="mx-auto" width="300">
    <v-card-text>

      <p>Login</p>

      <v-form >

        <v-text-field
          label="CPF"
          v-model="CPF"
        ></v-text-field>

        <v-text-field
          label="Senha"
          v-model="Password"
        ></v-text-field>

      </v-form>

    </v-card-text>
    <v-btn class="mt-2" type="submit" color="primary">Submit</v-btn>

  </v-sheet>
</template>
