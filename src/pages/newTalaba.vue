<template>
  <div class="max-w-[1160px] h-[872px] flex justify-center m-auto mt-[40px]">
    <form class="w-[790px] h-[466px] bg-[#fff] p-[28px] rounded-[12px]">
      <div class="flex items-center justify-between">
        <div class="w-[353px]">
          <label for="fullName" class="font-[500] text-[#1D1D1F]"
            >F.I.Sh. (Familiya Ism Sharif)</label
          >
          <input
            type="text"
            id="fullName"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
            class="w-full mt-[8px] bg-[#E0E7FF] text-[#2E384D59] rounded-[6px] outline-none px-[16px] py-[12px] border border-[#E0E7FF]"
          />
        </div>
        <div class="w-[353px]">
          <label for="telNum" class="font-[500] text-[#1D1D1F]"
            >Telefon raqam</label
          >
          <input
            type="text"
            id="telNum"
            placeholder="+998 00 000-00-00"
            class="w-full mt-[8px] bg-[#E0E7FF] text-[#2E384D59] outline-none rounded-[6px] px-[16px] py-[12px] border border-[#E0E7FF]"
          />
        </div>
      </div>
      <div class="mt-[28px]">
        <label for="university" class="font-[500] text-[#1D1D1F]">OTM</label>
        <select
          name=""
          id="university"
          class="w-full border border-[#E0E7FF] px-[16px] py-[12px] bg-[#e9edfb] mt-[8px] text-[#2E384D] outline-none rounded-[6px]"
        >
          <option value="default">OTM ni tanlang</option>
          <option v-for="item in universities" value="item" :key="item.id">
            {{ item.place }}
          </option>
        </select>
      </div>
      <div class="mt-[28px] flex items-center justify-between border-b-2 border-[#F5F5F7] pb-[28px]">
          <div class="w-[353px] flex flex-col">
            <label for="degree" class="font-[500] text-[#1D1D1F]"
                >F.I.Sh. (Familiya Ism Sharif)</label
            >
            <select id="degree" class="border border-[#E0E7FF] px-[16px] py-[12px] bg-[#e9edfb] mt-[8px] text-[#2E384D] outline-none rounded-[6px]">
                <option value="default">Barchasi</option>
                <option v-for="item in degree" value="item" :key="item.id">
                    {{ item.degree }}
                </option>
            </select>
        </div>
        <div class="w-[353px]">
          <label for="contractPrice" class="font-[500] text-[#1D1D1F]"
            >Kontrakt summa</label
          >
          <input
            type="text"
            id="contractPrice"
            placeholder="Summani kiriting"
            class="w-full mt-[8px] bg-[#E0E7FF] text-[#2E384D59] outline-none rounded-[6px] px-[16px] py-[12px] border border-[#E0E7FF]"
          />
        </div>
      </div>
      <button class="px-[32px] py-[13px] bg-[#3366FF] text-white rounded-[5px] flex items-center mt-[28px] float-right">
          <Plus />
          <p class="font-[500] ml-[14px]">Qo‘shish</p>
      </button>
    </form>
  </div>
</template>

<script>
import Plus from '../components/icons/Plus.vue';
export default {
  data() {
    return {
      studyPlace: "",
      degree: [
          {
              id: 1,
              degree: 'Bakalavr'
          },
          {
              id: 2,
              degree: 'Magistratura'
          }
      ],
      universities: [
        {
          id: 1,
          place: "Toshkent shahridagi INHA Universiteti",
        },
        {
          id: 2,
          place: "O’zbekiston milliy universiteti",
        },
        {
          id: 3,
          place: "Toshkent davlat texnika universiteti",
        },
        {
          id: 4,
          place: "Toshkent davlat iqtisodiyot universiteti",
        },
        {
          id: 5,
          place: "O’zbekiston davlat jahon tillari universiteti",
        },
        {
          id: 6,
          place: "Toshkent davlat sharqshunoslik instituti",
        },
        {
          id: 7,
          place: "Toshkent arxitektura-qurilish instituti",
        },
        {
          id: 8,
          place: "Toshkent to’qimachilik va нngil sanoat istituti",
        },
        {
          id: 9,
          place: "Toshkent avtomobil-yo’llari instituti",
        },
        {
          id: 10,
          place: "Toshkent moliya instituti",
        },
      ],
    };
  },
  components: {
      Plus
  }
};
</script>

<style lang="scss" scoped></style>
