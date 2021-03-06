export const routes = [
    {
      path: "/auth",
      component: () => import("@/pages/Login.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("@/pages/dashboard.vue"),
    },
    {
      path: "/homiylar",
      component: () => import("@/pages/homiylar.vue"),
    },
    {
      path: "/",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/talabalar",
      meta: {title: "talabalar"},
      component: () => import("@/pages/talabalar.vue"),
    },
    {
      path: "/newStudent",
      name: 'newStudents',
      component: () => import("@/pages/newTalaba.vue"),
    },
    {
      path: '/singleHomiy',
      component: () => import("@/pages/SingleHomiy.vue")
    },
    {
      path: '/singleTalaba',
      name: 'singleTalaba',
      component: () => import("@/pages/singleTalaba.vue")
    }
]