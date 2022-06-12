<template>
  <div>
    <!-- <Homiylar :homiylar="homiy" /> -->
    <div class="max-w-[1160px] m-auto">
      <Table :header="header" :homiy="homiy" />
      <PaginationFooter class="py-[30px]" />
    </div>
  </div>
</template>

<script>
import Homiylar from "@/components/Homiylar.vue";
import PaginationFooter from "../components/PaginationFooter.vue";
import Table from "../components/Table.vue";
export default {
  components: {
    Homiylar,
    PaginationFooter,
    Table,
  },
  data() {
    return {
      header: [
        { id: 1, head: "#" },
        { id: 2, head: "f.i.sh." },
        { id: 3, head: "Tel.Raqami" },
        { id: 4, head: "Homiylik summasi" },
        { id: 5, head: "Sarflangan summa" },
        { id: 6, head: "Sana" },
        { id: 7, head: "Holati" },
        { id: 8, head: "Amallar" },
      ],
      homiy: [
        {
          id: 1,
          name: "Alimov Abror Xabibullayevich",
          tel: "+99899 973-72-60",
          sponsorship: "30 000 000",
          spend: "0",
          date: "15.01.2021",
          condition: "Yangi",
        },
        {
          id: 2,
          name: "Saimov Rustam Saimjonovich",
          tel: "+99899 973-72-60",
          sponsorship: "1 000 000",
          spend: "0",
          date: "15.01.2021",
          condition: "Moderatsiyada",
        },
        {
          id: 3,
          name: "Sanginov Otabek Muratovich",
          tel: "+99899 973-72-60",
          sponsorship: "5 000 000",
          spend: "5 000 000",
          date: "15.01.2021",
          condition: "Tasdiqlangan",
        },
        {
          id: 4,
          name: "Nazarov Sanjar Olimovich",
          tel: "+99899 973-72-60",
          sponsorship: "7 000 000",
          spend: "7 000 000",
          date: "15.01.2021",
          condition: "Bekor qilingan",
        },
        {
          id: 5,
          name: "Ibragimov Sohib Mirfayozovich",
          tel: "+99899 973-72-60",
          sponsorship: "10 000 000",
          spend: "0",
          date: "15.01.2021",
          condition: "Moderatsiyada",
        },
        {
          id: 6,
          name: "Ishmuhammedov Aziz Ishqobilovich",
          tel: "+99899 973-72-60",
          sponsorship: "30 000 000",
          spend: "1 000 000",
          date: "15.01.2021",
          condition: "Bekor qilingan",
        },
        {
          id: 7,
          name: "Qosimov Furqat Xabibullayevich",
          tel: "+99899 973-72-60",
          sponsorship: "50 000 000",
          spend: "0",
          date: "15.01.2021",
          condition: "Yangi",
        },
        {
          id: 8,
          name: "Ortiqov Abror Bahodirovich",
          tel: "+99899 973-72-60",
          sponsorship: "70 000 000",
          spend: "0",
          date: "15.01.2021",
          condition: "Yangi",
        },
        {
          id: 9,
          name: "Rustamov Oybek  Tajiddinovich",
          tel: "+99899 973-72-60",
          sponsorship: "50 000 000",
          spend: "2 000 000",
          date: "15.01.2021",
          condition: "Tasdiqlangan",
        },
        {
          id: 10,
          name: "Isfandiyorov  Iqbol Bobomirzayevich",
          tel: "+99899 973-72-60",
          sponsorship: "1 000 000",
          spend: "0",
          date: "15.01.2021",
          condition: "Moderatsiyada",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
