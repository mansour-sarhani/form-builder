export const formReducer = (state, action) => {
  switch (action.type) {
      case 'INITIALIZE_FORMS': {
          return action.payload
      }
      case 'CREATE_NEW_FORM': {
          const newForm = action.payload
          const updatedState = [
              ...state,
              newForm
          ]
          localStorage.setItem('forms', JSON.stringify(updatedState))
          return [
              ...state,
              newForm
          ]
      }
      case 'UPDATE_FORM': {
          const payloadId = action.payload.formId
          const updatedForm = action.payload

          const index = state.findIndex(f => f.formId === payloadId)
          const updatedForms = [...state]

          updatedForms[index] = {
              ...updatedForm
          }
          localStorage.setItem('forms', JSON.stringify(updatedForms))
          return updatedForms
      }
      case 'DELETE_FORM': {
          const filteredForms = state.filter(form => form.formId !== action.payload)
          localStorage.setItem('forms', JSON.stringify(filteredForms))
          return [
              ...filteredForms
          ]
      }
      default: {
          return state
      }
  }
}