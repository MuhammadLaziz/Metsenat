<template>
    <table class="table-wrapper table w-full  m-auto mt-[48px] ">
      <thead class="bot">
        <tr>
          <th v-for="h in header" :key="h.id" class="th text-[#B1B1B8] font-[500] bot"> {{ h.head }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in homiy"
          class="bg-[#fff] mt-[12px] hover:-translate-y-2 hover:bg-[#e5e3e3] transition-all duration-300 overflow-hidden"
        >
          <td class="pl-[16px] px-[25px] text-left text-[15px] font-[400]">{{ item.id }}</td>
          <td class="pl-[13px] font-[500] text-[#1D1D1F] py-[25px]">
            {{ item.name }}
          </td>
          <td class="pl-[14px] font-[400] text-[#1D1D1F] py-[25px] text-center">
            {{ item.tel }}
          </td>
          <td class="pl-[14px] font-[500] py-[25px] text-center">
            {{ item.sponsorship }}<span class="text-[#B1B1B8] ml-[5px]">UZS</span>
          </td>
          <td class="pl-[14px] py-[25px] text-center font-[500]">
            {{ item.spend }}<span class="text-[#B1B1B8] ml-[5px]">UZS</span>
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
  width: 100%;
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
    background-color: rgb(68, 218, 218);
    padding-left: 10px;
}
</style>

<style scoped>
  @media (max-width: 700px) {
  .table thead {
    display: none;
  }
  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  .table tr {
    margin-top: 15px;
  }
  .table td {
    text-align: left;
    position: relative;
  }
  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
  
  td:last-child{
      width: 100%;
      padding-left: 40px;
  }
  td:first-child{
    padding-top: 15px;
}
}


</style>
