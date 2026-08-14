$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 700) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.top').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.top').fadeOut();//나타날 아이콘 클래스 수정!
    }
});


/* -----------------------------
   STORY
------------------------------ */

const storySwiper = new Swiper(".mySwiper", {
    
    loop: true,

    // 버튼이 있으면 사용
    navigation: {
        nextEl: ".mySwiper4 .swiper-button-next",
        prevEl: ".mySwiper4 .swiper-button-prev",
    },
});

/* -----------------------------
   ECOSYSTEMS
------------------------------ */
const ecotabs = document.querySelectorAll("#ECOSYSTEMS .tab");

const ecoswiper = new Swiper(".ecoSwiper", {

    spaceBetween: 30,

    /* Fade 효과 */
    effect: "fade",

    fadeEffect: {
        crossFade: true
    },

    /* 화살표 */
    navigation: {
        nextEl: "#ECOSYSTEMS .swiper-button-next",
        prevEl: "#ECOSYSTEMS .swiper-button-prev",
    },

    /* 페이지네이션 */
    pagination: {
        el: "#ECOSYSTEMS .swiper-pagination",
        clickable: true,
    },

    /* 이벤트 */
    on: {

        /* 처음 실행 */
        init: function () {

            ecotabs.forEach(tab => {
                tab.classList.remove("active");
            });

            ecotabs[this.realIndex].classList.add("active");
        },


        /* 슬라이드 변경 */
        slideChange: function () {

            ecotabs.forEach(tab => {
                tab.classList.remove("active");
            });

            ecotabs[this.realIndex].classList.add("active");
        }
    }
});


/* =========================
   탭 클릭 → 슬라이드 이동
========================= */

ecotabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        ecoswiper.slideTo(index);

    });

});


/* -----------------------------
   WEAPONS
------------------------------ */
const wetabs = document.querySelectorAll("#WEAPONS .tab");

const weswiper = new Swiper(".weSwiper", {
    spaceBetween: 30,
        effect: 'fade',

        fadeEffect: {
        crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

    on: {
        init: function () {
            wetabs[this.realIndex].classList.add("active");
        },

        slideChange: function () {
            wetabs.forEach(tab => tab.classList.remove("active"));
            wetabs[this.realIndex].classList.add("active");
        }
    }
});

wetabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        weswiper.slideToLoop(index);
    });
});

/* -----------------------------
   SYSTEM
------------------------------ */
const syswiper = new Swiper(".sySwiper", {

    // 슬라이드 사이 간격
    spaceBetween: 30,

    // Fade 효과
    effect: "fade",

    fadeEffect: {
        crossFade: true
    },

    // 좌우 화살표
    navigation: {
        nextEl: "#SYSTEM .swiper-button-next",
        prevEl: "#SYSTEM .swiper-button-prev",
    },

    // 슬라이드 이벤트
    on: {

        /* -----------------------------
           처음 페이지가 실행될 때
        ----------------------------- */
        init: function () {

            // 모든 영상 정지 + 처음으로 이동
            const videos = document.querySelectorAll(
                "#SYSTEM .sySwiper video"
            );

            videos.forEach(function (video) {
                video.pause();
                video.currentTime = 0;
            });

            // 현재 활성화된 슬라이드의 영상 찾기
            const currentSlide = this.slides[this.activeIndex];

            if (currentSlide) {

                const currentVideo =
                    currentSlide.querySelector("video");

                // 영상이 존재하면 재생
                if (currentVideo) {
                    currentVideo.currentTime = 0;
                    currentVideo.play().catch(function (error) {
                        console.log("영상 재생 실패:", error);
                    });
                }
            }
        },


        /* -----------------------------
           슬라이드가 바뀌기 시작할 때
        ----------------------------- */
        slideChangeTransitionStart: function () {

            // SYSTEM 안의 모든 영상 찾기
            const videos = document.querySelectorAll(
                "#SYSTEM .sySwiper video"
            );

            // 모든 영상 정지 + 초기화
            videos.forEach(function (video) {

                video.pause();
                video.currentTime = 0;

            });
        },


        /* -----------------------------
           Fade 전환이 끝났을 때
        ----------------------------- */
        slideChangeTransitionEnd: function () {

            // 현재 활성화된 슬라이드
            const currentSlide = this.slides[this.activeIndex];

            if (!currentSlide) {
                return;
            }

            // 현재 슬라이드 안에 video가 있는지 확인
            const currentVideo =
                currentSlide.querySelector("video");

            // video가 있는 슬라이드만 재생
            if (currentVideo) {

                currentVideo.currentTime = 0;

                currentVideo.play().catch(function (error) {
                    console.log("영상 재생 실패:", error);
                });

            }
        }
    }
});


/* ==============================
   CHARACTERS TAB
============================== */

const characterTabs =
    document.querySelectorAll("#CHARACTERS .character_tab-menu .tab");

const characterContents =
    document.querySelectorAll("#CHARACTERS .character_content");


characterTabs.forEach((tab, index) => {

    tab.addEventListener("click", function () {

        /* -------------------------
           모든 탭 비활성화
        ------------------------- */

        characterTabs.forEach(tab => {
            tab.classList.remove("active");
        });


        /* 클릭한 탭 활성화 */

        this.classList.add("active");


        /* -------------------------
           모든 캐릭터 영역 숨기기
        ------------------------- */

        characterContents.forEach(content => {
            content.classList.remove("active");
        });


        /* 이전 Swiper 초기화 */
        characterSwiper1.slideTo(0, 0);
        characterSwiper2.slideTo(0, 0);

        /* -------------------------
           선택한 캐릭터 영역 표시
        ------------------------- */

        characterContents[index].classList.add("active");


        /* -------------------------
           Swiper 크기 다시 계산
        ------------------------- */

        if (index === 0) {

            characterSwiper1.update();

        } else if (index === 1) {

            characterSwiper2.update();

        }

    });

});


/* ==============================
   주인공 일행 Swiper
============================== */

const characterSwiper1 = new Swiper(".chaSwiper1", {

    effect: "slide",

    spaceBetween: 30,

    slidesPerView: 1,

    navigation: {

        nextEl: ".chaSwiper1 .swiper-button-next",

        prevEl: ".chaSwiper1 .swiper-button-prev"

    }

});


/* ==============================
   중요인물 Swiper
============================== */

const characterSwiper2 = new Swiper(".chaSwiper2", {

    effect: "slide",

    spaceBetween: 30,

    slidesPerView: 1,

    navigation: {

        nextEl: ".cha-next2",

        prevEl: ".cha-prev2"

    }

});

/* -----------------------------
   #MONSTER
------------------------------ */
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