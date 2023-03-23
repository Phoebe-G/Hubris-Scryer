app.component('lesson-menu', {
    props: {
        course: {
            required: true
        },
        lessons:
        {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            expanded: false
        }
    },
    template:
    /*html*/
    `
    <img @click="onClick" class="burger-menu-button" src="./assets/images/Hamburger_icon.svg">
    <div v-if="expanded" class="burger-menu-contents">
        <h4>{{ course.title }}</h4>
        <ul>            
            <li @click="onLessonSelect(lesson)" v-for="(lesson, index) in lessons" :key="index">
                {{ lesson.name }}
            </li>
        </ul>
        <h5>Course content <br/> Ⓒ <a :href="course.website" target="_blank">{{ course.provider }}</a></h5>
    </div>
    `,
    emits: ["lesson-select"],
    methods: {
        onClick() {
            this.expanded = !this.expanded
        },
        onLessonSelect(lesson) {
            this.$emit("lesson-select", lesson)
            this.expanded = false;
        }
    }
})