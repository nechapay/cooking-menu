document.addEventListener('load', function () {
  start()
})

function start() {

}

const app = new Vue({
  el: '#app',
  data() {
    return {
      dinner: [
        'dinner 1',
        'dinner 2',
        'dinner 3',
        'dinner 4',
        'dinner 5',
        'dinner 6',
        'dinner 7'
      ],
      lunch: [
        'lunch 1',
        'lunch 2',
        'lunch 3',
        'lunch 4',
        'lunch 5',
        'lunch 6',
        'lunch 7'
      ],
      breakfast: [
        'breakfast 1',
        'breakfast 2',
        'breakfast 3',
        'breakfast 4',
        'breakfast 5',
        'breakfast 6',
        'breakfast 7'
      ],
      breakfastValue: ''
    }
  },
  methods: {
    breakfastClick: function () {
      this.breakfast = _.shuffle(this.breakfast)
    },
    lunchClick: function () {
      this.lunch = _.shuffle(this.lunch)
    },
    dinnerClick: function () {
      this.dinner = _.shuffle(this.dinner)
    }
  }
})
