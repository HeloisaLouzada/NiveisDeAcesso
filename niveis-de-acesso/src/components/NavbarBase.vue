<template>
  <v-app-bar :elevation="24">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Application Bar</v-app-bar-title>
</v-app-bar>

</template>

<script lang="ts">
export default {
  name: 'NavbarBase',
}
</script>
