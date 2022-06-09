<template>
  <div class="max-w-[1160px] m-auto">
    <table class="table w-[100%] mt-[48px]">
      <thead class="bot">
        <tr>
          <th class="text-[#B1B1B8] font-[500] bot">#</th>
          <th class="text-[#B1B1B8] font-[500] text-left bot">f.i.sh.</th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">Tel.Raqami</th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">
            Homiylik summasi
          </th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">
            Sarflangan summa
          </th>
          <th class="text-[#B1B1B8] font-[500] pl-[13px] bot">Sana</th>
          <th class="text-[#B1B1B8] font-[500] pl-[14px] bot">Holati</th>
          <th class="text-[#B1B1B8] font-[500] pl-[16px] bot">Amallar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in homiylar"
          class="bg-[#fff] rounded-[8px] mt-[12px] space-y-[15px]"
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
            :class="
              [item.condition == 'Yangi' ? 'text-[#5BABF2]' : '',
              item.condition == 'Moderatsiyada' ? 'text-[#FFA445]' : '',
              item.condition == 'Tasdiqlangan' ? 'text-[#00CF83]' : '',
              item.condition == 'Bekor qilingan' ? 'text-[#979797]' : '']
            "
          >
            {{ item.condition }}
          </td>
          <td class="pr-[16px] py-[25px] float-right">
            <img src="../assets/images/eye.png" alt="" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

    export default {
        props: {
            homiylar: Array
        },
        mounted() {
          console.log(this.homiylar);
        },
    }
</script>

<style lang="scss" scoped>

.table {
    border-spacing: 0 10px;
}
.bot {
  padding-bottom: 12px;
}
</style>
