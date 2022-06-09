<template>
    <div>
        <Homiylar :homiylar="homiy" />
    </div>
</template>

<script>
import Homiylar from '@/components/Homiylar.vue'
    export default {
        components: {
            Homiylar
        },
        data() {
            return {
                homiy: [
                    {id: 1, name: 'Alimov Abror Xabibullayevich', tel: '+99899 973-72-60', sponsorship: '30 000 000', spend: '0', date: '15.01.2021', condition: 'Yangi'},
                    {id: 2, name: 'Saimov Rustam Saimjonovich', tel: '+99899 973-72-60', sponsorship: '1 000 000', spend: '0', date: '15.01.2021', condition: 'Moderatsiyada'},
                    {id: 3, name: 'Sanginov Otabek Muratovich', tel: '+99899 973-72-60', sponsorship: '5 000 000', spend: '5 000 000', date: '15.01.2021', condition: 'Tasdiqlangan'},
                    {id: 4, name: 'Nazarov Sanjar Olimovich', tel: '+99899 973-72-60', sponsorship: '7 000 000', spend: '7 000 000', date: '15.01.2021', condition: 'Bekor qilingan'},
                    {id: 5, name: 'Ibragimov Sohib Mirfayozovich', tel: '+99899 973-72-60', sponsorship: '10 000 000', spend: '0', date: '15.01.2021', condition: 'Moderatsiyada'},
                    {id: 6, name: 'Ishmuhammedov Aziz Ishqobilovich', tel: '+99899 973-72-60', sponsorship: '30 000 000', spend: '1 000 000', date: '15.01.2021', condition: 'Bekor qilingan'},
                    {id: 7, name: 'Qosimov Furqat Xabibullayevich', tel: '+99899 973-72-60', sponsorship: '50 000 000', spend: '0', date: '15.01.2021', condition: 'Yangi'},
                    {id: 8, name: 'Ortiqov Abror Bahodirovich', tel: '+99899 973-72-60', sponsorship: '70 000 000', spend: '0', date: '15.01.2021', condition: 'Yangi'},
                    {id: 9, name: 'Rustamov Oybek  Tajiddinovich', tel: '+99899 973-72-60', sponsorship: '50 000 000', spend: '2 000 000', date: '15.01.2021', condition: 'Tasdiqlangan'},
                    {id: 10, name: 'Isfandiyorov  Iqbol Bobomirzayevich', tel: '+99899 973-72-60', sponsorship: '1 000 000', spend: '0', date: '15.01.2021', condition: 'Moderatsiyada'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>