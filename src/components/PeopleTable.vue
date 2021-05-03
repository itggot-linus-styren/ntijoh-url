!<template>
  <table>
  </table>
</template>


<script>
import db from '@/db'

export default {
  data() {
    return {
      people: []
    }
  },
  firebase: {
    people: db.ref('people')
  }
}
</script>

<style>

</style>