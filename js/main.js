const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

const app = new Vue({
  el: "#main",
  data: {
    counter: 0,
    images,
  },
  methods: {
    forward() {
      if (this.counter == this.images.length - 1) {
        this.counter = 0;
      } else {
        this.counter++;
      }
    },
    backward() {
       if (this.counter == 0) {
         this.counter = this.images.length - 1;
       } else {
         this.counter--;
       }
    }

    

  }
});
