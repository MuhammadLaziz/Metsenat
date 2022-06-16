<template>
  <div class="max-w-[1160px] m-auto">
    <button @click="this.$router.push('/newStudent')" class="px-[36px] fixed sm:static z-50 md:initial top-[35%] py-[13px] bg-[#3366FF] flex items-center float-right rounded-[5px] text-white my-[28px] hover:bg-[#0139e0] transition-all">
      <Plus />
      <p  class="ml-[14px] text-[14px] font-[500] hidden md:block">Talaba qo‘shish</p>
    </button>
    <table class=" table-wrapper m-auto table">
      <thead>
        <tr>
          <th class="text-[#B1B1B8] font-[500]  pl-[16px] text-left">#</th>
          <th class="text-[#B1B1B8] font-[500]  text-left">f.i.sh.</th>
          <th class="text-[#B1B1B8] font-[500] ">Talabalik turi</th>
          <th class="text-[#B1B1B8] font-[500] ">OTM</th>
          <th class="text-[#B1B1B8] font-[500] ">Ajratilingan summa</th>
          <th class="text-[#B1B1B8] font-[500] ">Kontrakt miqdori</th>
          <th class="text-[#B1B1B8] font-[500] ">Amallar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in infos" class="bg-[#fff] rounded-[8px] mt-[12px] py-[25px] hover:-translate-y-2 duration-300 hover:bg-[#e5e3e3] transition-all">
          <td class="pl-[16px] px-[25px] text-left">{{ item.id }}</td>
          <td class="pl-[13px] font-[500] text-[#1D1D1F]">{{ item.name}}</td>
          <td class="pl-[14px] font-[400] text-[#1D1D1F] text-center">{{ item.degree}}</td>
          <td class="w-[200px] pl-[14px] font-[500] text-center">{{ item.university}}</td>
          <td class="pl-[14px] text-center font-[500]">{{ item.spreatedCost}} <span class="text-[#B1B1B8] font-[500]">UZS</span> </td>
          <td class="pl-[14px] text-center font-[500]">{{ item.amoutContract}}</td>
            <td @click="getTalaba(item.id)" class="pr-[16px] py-[25px] float-right cursor-pointer">
              <img src="../assets/images/eye.png" alt="" />
            </td>
        </tr>
      </tbody>
    </table>
    <PaginationFooter class="py-[30px]"/>
  </div>
</template>

<script>
import Plus from '../components/icons/Plus.vue'
import PaginationFooter from '../components/PaginationFooter.vue'
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
  methods: {
    getTalaba(itemID) {
      this.infos.filter(item => {
        if(item.id === itemID) {
          this.$store.commit('GetSinleTalaba', item)
          this.$router.push('/singleTalaba')
        }
      })
    }
  },
  components: {
    Plus,
    PaginationFooter
}
}
</script>

<style lang="scss" scoped>
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
    margin: 15px auto;
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
