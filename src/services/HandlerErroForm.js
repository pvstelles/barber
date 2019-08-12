
class HandlerErroForm {
  constructor (errors, element) {
    this.errors = errors
    this.element = element
    this.response = {}
  }

  handle () {
    for (let error in this.errors.errors) {
      this.response[error] = this.errors.errors[error][0]
    }
    return this.response
  }
}

export default HandlerErroForm
