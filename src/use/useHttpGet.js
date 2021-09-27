import { toRefs, reactive } from 'vue'
import api from '../services/api'

export const useHttpGet = (endpoint) => {
  const state = reactive({ 
    data: [],
    loading: true,
    error: null,
  })

  api.get(endpoint).then(response => {
    state.data = response.data.fruits
  }).catch(error => {
    state.error = error
  }).finally(() => {
    state.loading = false
  })

  return toRefs(state)
} 