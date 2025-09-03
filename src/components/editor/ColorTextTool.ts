export default class ColorTextTool {
  data: { text: string; color: string };
  wrapper: HTMLElement | undefined;

  constructor({ data }) {
    this.data = data || { text: '', color: '#000000' }
    this.wrapper = undefined
  }

  render() {
    this.wrapper = document.createElement('div')
    this.wrapper.style.display = 'flex'
    this.wrapper.style.gap = '8px'
    this.wrapper.style.alignItems = 'center'

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Nhập nội dung...'
    input.value = this.data.text
    input.style.color = this.data.color
    input.style.flex = '1'
    input.addEventListener('input', () => {
      this.data.text = input.value
    })

    const colorPicker = document.createElement('input')
    colorPicker.type = 'color'
    colorPicker.value = this.data.color
    colorPicker.addEventListener('input', () => {
      input.style.color = colorPicker.value
      this.data.color = colorPicker.value
    })

    this.wrapper.appendChild(colorPicker)
    this.wrapper.appendChild(input)

    return this.wrapper
  }

  save() {
    return this.data
  }
}
