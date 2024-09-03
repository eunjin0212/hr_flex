<script>
import TopLogo from '@/assets/icons/TopLogo.vue';
import BigCheck from '@/assets/icons/BigCheck.vue'

export default {
    components: {
        TopLogo,
        BigCheck,
    },
}
</script>
<template>
    <main class="w-full sms-auth__page bg-gray-04">
        <header
          class="sms-auth__header w-full h-14 py-[14px] px-4 flex items-center justify-center relative border-b border-gray-05 bg-white"
        >
            <span class="absolute w-6 h-6 back-icon top-4 left-4 ">
                <RightArrow />
            </span>
            <span class="home-logo">
                <TopLogo />
            </span>
        </header>
        <section class="px-6 pt-8 bg-white sms-auth__wrapper h-[calc(100vh-56px)]">
            <BigCheck class="mx-auto text-blue-04" />
            <h1 class="mt-12 text-lg font-bold text-center text-blue-05">Successfully Claimed!</h1>
            <p class="mt-3 text-sm font-medium text-center text-gray-07">Pleas give this item to the customer.</p>
            <div class="p-6 mt-12 border border-gray-05 bg-gray-01 rounded-xl">
                <h6 class="mb-2 text-sm font-bold text-gray-10">Detail</h6>
                <div class="grid grid-cols-2 gap-y-2">
                    <span class="text-sm font-medium text-gray-07">Code:</span>
                    <span class="text-sm font-medium text-right text-gray-09 text-nowrap">685385484</span>
                    <span class="text-sm font-medium text-gray-07">Date & Time:</span>
                    <span class="text-sm font-medium text-right text-gray-09 text-nowrap">08/01/24, 16:01</span>
                    <span class="text-sm font-medium text-gray-07">Store:</span>
                    <span class="text-sm font-medium text-right text-gray-09 text-nowrap">Sm Baguio</span>
                    <span class="text-sm font-medium text-gray-07">Item:</span>
                    <span class="text-sm font-medium text-right text-gray-09 text-nowrap">Pre-Assorted Box of 4</span>
                </div>
            </div>
            <a href="/smsAuth" class="mt-8 main-button max-w-[342px] h-12 text-sm leading-[48px]">Back to Main</a>
        </section>
    </main>
</template>
