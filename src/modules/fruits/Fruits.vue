<template>
  <div>
    <h2 class="title">Fruits</h2>

    <ul>
      <span v-if="!data.length">No results.</span>

      <li v-for="fruit in data" :key="fruit.id">
        <div class="list-item">
          {{fruit.name}} - {{fruit.color}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useHttpGet } from '../../use/useHttpGet'

export default {
  name: 'Fruits',

  props: {
    user: {
      type: Object,
      default: () => ({})
    },
  },

  setup() {
    const { loading, error, data } = useHttpGet('/fruits')

    return { loading, error, data }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  margin-top: 8px;
}

.title {
  margin-left: 18px;
}

button {
  margin-left: 18px; 
  background-color: #ca0e0e;
  color: #fff;    
  border: none;
  border-radius: 3px;
  height: 24px;
  width: 80px;
  cursor: pointer;
}
</style>
