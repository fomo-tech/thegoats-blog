export default class ColorTextTool {
  static get toolbox() {
    return {
      title: "Text màu",
      icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zM12 3L2 19h20L12 3z"/></svg>',
    };
  }

  data: { text: string; color: string };
  wrapper: HTMLElement | null = null;
  inputEl: HTMLInputElement | null = null;
  colorEl: HTMLInputElement | null = null;

  constructor({ data }: { data?: { text?: string; color?: string } }) {
    this.data = {
      text: data?.text || "",
      color: data?.color || "#000000",
    };
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.style.display = "flex";
    this.wrapper.style.gap = "8px";
    this.wrapper.style.alignItems = "center";

    // Color picker
    this.colorEl = document.createElement("input");
    this.colorEl.type = "color";
    this.colorEl.value = this.data.color;
    this.colorEl.addEventListener("input", () => {
      const color = this.colorEl ? this.colorEl.value : "#000000";
      if (this.inputEl) {
        this.inputEl.style.color = color;
      }
      this.data.color = color;
    });

    // Text input
    this.inputEl = document.createElement("input");
    this.inputEl.type = "text";
    this.inputEl.placeholder = "Nhập nội dung...";
    this.inputEl.value = this.data.text;
    this.inputEl.style.color = this.data.color;
    this.inputEl.style.flex = "1";
    this.inputEl.addEventListener("input", () => {
      this.data.text = this.inputEl!.value;
    });

    this.wrapper.appendChild(this.colorEl);
    this.wrapper.appendChild(this.inputEl);
    return this.wrapper;
  }

  save() {
    return {
      text: this.inputEl?.value || "",
      color: this.colorEl?.value || "#000000",
    };
  }

  // render lại ở chế độ read-only (view)
  renderReadOnly({ text, color }: { text: string; color: string }) {
    const div = document.createElement("div");
    div.textContent = text;
    div.style.color = color;
    return div;
  }
}
