<template>
  <div class="max-w-[1160px] m-auto">
    <button class="px-[36px] py-[13px] bg-[#3366FF] flex items-center float-right rounded-[5px] text-white my-[28px] ">
      <Plus />
      <button @click="this.$router.push('/newStudent')" class="ml-[14px] text-[14px] font-[500]">Talaba qo‘shish</button>
    </button>
    <table class="w-full mt-[28px] space-y-5">
      <thead>
        <tr class="pb-[12px]">
          <th class="text-[#B1B1B8] font-[500]">#</th>
          <th class="text-[#B1B1B8] font-[500] text-left">f.i.sh.</th>
          <th class="text-[#B1B1B8] font-[500]">Talabalik turi</th>
          <th class="text-[#B1B1B8] font-[500]">OTM</th>
          <th class="text-[#B1B1B8] font-[500]">Ajratilingan summa</th>
          <th class="text-[#B1B1B8] font-[500]">Kontrakt miqdori</th>
          <th class="text-[#B1B1B8] font-[500]">Amallar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in infos" class="bg-[#fff] rounded-[8px] mt-[12px] py-[25px]">
          <td class="pl-[16px] px-[25px] text-left">{{ item.id }}</td>
          <td class="pl-[13px] font-[500] text-[#1D1D1F]">{{ item.name}}</td>
          <td class="pl-[14px] font-[400] text-[#1D1D1F] text-center">{{ item.degree}}</td>
          <td class="w-[200px] pl-[14px] font-[500] text-center">{{ item.university}}</td>
          <td class="pl-[14px] text-center font-[500]">{{ item.spreatedCost}} <span class="text-[#B1B1B8] font-[500]">UZS</span> </td>
          <td class="pl-[14px] text-center font-[500]">{{ item.amoutContract}}</td>
          <td class="pr-[16px] py-[25px] float-right">
            <img src="../assets/images/eye.png" alt="" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-[28px]">
      <div>
        <span class="text-[#1D1D1F] text-[15px] font-[400]">59 tadan  1-10 ko‘rsatilmoqda</span>
      </div>
    </div>
  </div>
</template>

<script>
import Plus from '../components/icons/Plus.vue'
export default {
  data() {
    return {
      infos: [
        { id: 1, name: 'Alimov Abror Xabibullayevich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 2, name: 'Saimov Rustam Saimjonovich', degree: 'Magistr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 3, name: 'Sanginov Otabek Muratovich', degree: 'Magistr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 4, name: 'Nazarov Sanjar Olimovich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 5, name: 'Ishmuhammedov Aziz Ishqobilovich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 6, name: 'Qosimov Furqat Xabibullayevich', degree: 'Magistr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 7, name: 'Ortiqov Abror Bahodirovich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 8, name: 'Rustamov Oybek  Tajiddinovich', degree: 'Magistr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 9, name: 'Isfandiyorov Iqbol Bobomirzayevich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'},
        { id: 10, name: 'Ibragimov Sohib Mirfayozovich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', spreatedCost: '14 000 000', amoutContract: '30 000 000'}
      ]
    }
  },
  components: {
    Plus
  }
}
</script>

<style lang="scss" scoped></style>
