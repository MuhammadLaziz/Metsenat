<template>
    <table class="table-wrapper w-[100%] mt-[48px] ">
      <thead class="bot">
        <tr>
          <th v-for="h in header" :key="h.id" class="th text-[#B1B1B8] font-[500] bot"> {{ h.head }}</th>
          <!-- <th class="text-[#B1B1B8] font-[500] text-left bot">f.i.sh.</th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">Tel.Raqami</th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">
            Homiylik summasi
          </th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">
            Sarflangan summa
          </th>
          <th class="text-[#B1B1B8] font-[500] pl-[13px] bot">Sana</th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">Holati</th>
          <th class="text-[#B1B1B8] font-[500] pl-[16px] bot">Amallar</th> -->
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in homiy"
          class="bg-[#fff] mt-[12px] hover:-translate-y-2 hover:bg-[#e5e3e3] transition-all"
        >
          <td class="pl-[16px] px-[25px] text-left">{{ item.id }}</td>
          <td class="pl-[13px] font-[500] text-[#1D1D1F] py-[25px]">
            {{ item.name }}
          </td>
          <td class="pl-[14px] font-[400] text-[#1D1D1F] py-[25px] text-center">
            {{ item.tel }}
          </td>
          <td class="pl-[14px] font-[500] py-[25px] text-center">
            {{ item.sponsorship }}<span class="text-[#B1B1B8]">UZS</span>
          </td>
          <td class="pl-[14px] py-[25px] text-center font-[500]">
            {{ item.spend }}<span class="text-[#B1B1B8]">UZS</span>
          </td>
          <td class="pl-[13px] py-[25px] text-center">{{ item.date }}</td>
          <td
            class="pl-[14px] py-[25px] text-center"
            :class="[
              item.condition == 'Yangi' ? 'text-[#5BABF2]' : '',
              item.condition == 'Moderatsiyada' ? 'text-[#FFA445]' : '',
              item.condition == 'Tasdiqlangan' ? 'text-[#00CF83]' : '',
              item.condition == 'Bekor qilingan' ? 'text-[#979797]' : '',
            ]"
          >
            {{ item.condition }}
          </td>
          <td @click="getHomiy(item.id)" class="pr-[16px] py-[25px] float-right cursor-pointer">
            <img src="../assets/images/eye.png" alt="" />
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
// import SingleHomiy from './SingleHomiy.vue'

    export default {
        props: {
            header: Array,
            homiy: Array
        },
        methods: {
          getHomiy(itemID) {
            this.homiy.filter(item => {
              if(item.id === itemID) {
                this.$store.commit('GetSingleHomiy', item)
                this.$router.push('/singleHomiy')
                // <SingleHomiy :item="item" :key="item.id" />
              }
            })
          }
        },
        // components: { SingleHomiy }
    }
</script>

<style lang="scss">
.table-wrapper {
  border-spacing: 0 15px;
  border-collapse: separate;
}
.bot {
   padding-bottom: 12px;
}
.th:first-child{
    text-align: left;
    padding-left: 16px;
}
.th:nth-child(2){
    text-align: left;
}
td:first-child{
    border-radius: 8px 0 0 8px;
}
td:last-child{
    border-radius: 0 8px 8px 0;
}
</style>