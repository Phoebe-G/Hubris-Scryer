app.component('lesson-display', {
  props: {
    course: {
      type: Object,
      required: true
    },
    lesson: {
      type: undefined,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="lesson-container">
    <h5>{{this.course.provider}}</h5>
    <h3>{{this.course.title}} - {{this.lesson.name}}</h3>
    <h5>My summary:</h5>
    <p>{{this.lesson.summary}}</p>
    <p v-if="this.lesson.code">My solution files on the left and the official solution files on the right</p>

  <!--
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>
    -->
  </div>`,
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return `<h5>{{this.course.provider}}</h5>` +
            `<h3>{{this.course.title}}`
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
})