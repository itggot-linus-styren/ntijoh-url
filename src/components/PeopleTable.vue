<template>
  <div>
    <h1>People</h1>
    <form class="pure-form">
      <table class="pure-table">
        <thead>
          <th>firstname</th>
          <th>lastname</th>
          <th>age</th>
          <th>email</th>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" placeholder="firstname"></td>
            <td><input type="text" placeholder="lastname"></td>
            <td><input type="number" placeholder="age"></td>
            <td><input type="email" placeholder="email"></td>
          </tr>
        </tbody>
      </table>
    </form>
    <button class="pure-button">add person</button>
  </div>
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
table {
  margin: 16px auto;
}
</style>