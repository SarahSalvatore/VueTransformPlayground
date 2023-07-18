Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    box() {
      return {
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        `,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    async copy() {
      const text = `transform: ${this.box.transform};`;
      // clipboard api - does not work on older browsers
      // copies text to the users' clipboard
      await navigator.clipboard.writeText(text);
      alert("Copied to Clipboard");
    },
  },
}).mount("#app");
