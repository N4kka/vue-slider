Vue.config.devtools

const app = new Vue(
    {
        el: '#root',
        data: {
            cities: [
                {
                    name: 'Svezia',
                    image:  './img/01.jpg',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis, veritatis minus rerum expedita voluptatum id. Quas tenetur, a laborum facere aliquid rem quia, porro, sapiente aliquam voluptatum qui voluptatem!'
                },
                {
                    name: 'Svizzera', 
                    image: './img/02.jpg',
                    text: 'Lorem ipsum'
                },
                {
                    name: 'Gran Bretagna', 
                    image: './img/03.jpg',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    name: 'Germania', 
                    image: './img/04.jpg',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    name: 'Paradise', 
                    image: './img/05.jpg',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ],
            currentSlide: 0
        },
        methods: {
            handler(event) {
                if(currentSlide === 0) {
                    currentSlide = citien.length - 1;
                } else {
                    currentSlide--;
                }
                console.log('Prev', currentSlide);
            },
            nextHandler(event) {
                if(currentSlide == cities.length -1) {
                    currentSlide = 0;
                } else {
                    currentSlide++;
                }
                console.log('Next', currentSlide);
            }
        }
    }
);