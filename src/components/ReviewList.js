app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br/>
                {{ review.review }}
                <br/>
                <div v-if="review.recommend">{{ review.name }} would recommend this product!</div>
                <div v-if="!review.recommend">{{ review.name }} would not recommend this product.</div>
            </li>
        </ul>
    </div>
    `

})