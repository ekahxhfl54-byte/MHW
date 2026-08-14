const monsterTabs = document.querySelectorAll(".monster_tab");


/* =====================================
   몬스터 이미지 Swiper
===================================== */

const monsterSwiper = new Swiper(".monSwiper", {

    slidesPerView: 1,

    spaceBetween: 0,

    effect: "fade",

    fadeEffect: {
        crossFade: true
    },

    on: {

        init: function () {

            monsterTabs.forEach(tab => {
                tab.classList.remove("active");
            });

            monsterTabs[this.realIndex].classList.add("active");

        },

        slideChange: function () {

            const index = this.realIndex;

            monsterTabs.forEach(tab => {
                tab.classList.remove("active");
            });

            monsterTabs[index].classList.add("active");

        }

    }

});


/* =====================================
   몬스터 버튼 Swiper
===================================== */

const monsterTabSwiper = new Swiper(".monsterTabSwiper", {

    /* 한 화면에 5개 */
    slidesPerView: 5,

    spaceBetween: 10,

    centeredSlides: false,

    slidesPerGroup: 1,

    speed: 500,

    watchOverflow: true,

    navigation: {

        nextEl: ".monster_tab_next",

        prevEl: ".monster_tab_prev"

    }

});


/* =====================================
   몬스터 버튼 클릭
===================================== */

monsterTabs.forEach((tab, index) => {

    tab.addEventListener("click", function () {

        /* -----------------------------
           몬스터 이미지 변경
        ----------------------------- */

        monsterSwiper.slideTo(index);


        /* -----------------------------
           active 변경
        ----------------------------- */

        monsterTabs.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");


        /* -----------------------------
           현재 버튼 Swiper 위치
        ----------------------------- */

        const startIndex =
            monsterTabSwiper.activeIndex;


        /* 한 화면에 보이는 버튼 수 */
        const visibleCount = 5;


        /* 현재 화면의 가장 왼쪽 버튼 */
        const firstIndex =
            startIndex;


        /* 현재 화면의 가장 오른쪽 버튼 */
        const lastIndex =
            startIndex + visibleCount - 1;


        /* =============================
           가장 오른쪽 버튼 클릭
           → 오른쪽으로 1칸
        ============================= */

        if (index === lastIndex) {

            /* 마지막 위치가 아니면 이동 */

            if (
                startIndex <
                monsterTabs.length - visibleCount
            ) {

                monsterTabSwiper.slideTo(
                    startIndex + 1
                );

            }

        }


        /* =============================
           가장 왼쪽 버튼 클릭
           → 왼쪽으로 1칸
        ============================= */

        else if (index === firstIndex) {

            /* 처음 위치가 아니면 이동 */

            if (startIndex > 0) {

                monsterTabSwiper.slideTo(
                    startIndex - 1
                );

            }

        }

    });

});