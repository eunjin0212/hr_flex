<script>
import HRnFlexLogo from '@/assets/icons/HRnFlexLogo.vue';
import RightArrow from '@/assets/icons/RightArrow.vue';
import TopLogo from '@/assets/icons/TopLogo.vue';
import Gift from '@/assets/icons/Gift.vue';
import UpArrow from '@/assets/icons/UpArrow.vue';
import Search from '@/assets/icons/Search.vue';
import SwipeArrow from '@/assets/icons/SwipeArrow.vue';

export default {
    components: {
        HRnFlexLogo,
        RightArrow,
        TopLogo,
        Gift,
        UpArrow,
        Search,
        SwipeArrow,
    },
    data() {
        return {
            color: '#0CB3EB',
            openRedeem: false,
            activeTab: true,
            searchData: [
                {
                    title: 'Abra',
                    id: 0,
                    contents: [
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                    ]
                },
                {
                    title: 'Agusan del Sur',
                    id: 1,
                    contents: [
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                    ]
                },
                {
                    title: 'B',
                    id: 2,
                    contents: [
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                    ]
                },
                {
                    title: 'B',
                    id: 3,
                    contents: [
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                        {
                            title: 'BANGUED',
                            text: 'JB 0837 Taft Ave., Corner Burgos And Rizal Streets Poblacion Zone 5 Bangued'
                        },
                    ]
                },
            ],
            openAddress: {},
            hover: {},
            isToggled: false,
        }
    },
    methods: {
        onAccordionClick() {
            this.openRedeem = !this.openRedeem
        },
        onSearch(event) {
            event.preventDefault();
        },
        onAddressClick(id) {
            this.openAddress[id] = !this.openAddress[id];
        },
        closeAddress() {
            Object.keys(this.openAddress).forEach((key) => {
                this.openAddress[key] = false
            })
        },
        getAccordionStyle(id) {
            return {
                height: this.openAddress[id] ? `${this.$refs.accordionContent[id].scrollHeight}px` : '0px',
                opacity: this.openAddress[id] ? 1 : 0,
            };
        },
        getToggleChipWith() {
            if (!this.$refs.toggleRef) return '0px';
            return this.$refs.toggleRef.offsetWidth;
        },
    },
    mounted() {
        this.searchData.forEach((item) => {
            this.openAddress[item.id] = false
            this.hover[item.id] = {}
            item.contents.forEach((_, idx) => {
                this.hover[item.id][idx] = false
            })
        })
    },
}
</script>
<template>
    <main class="relative w-full h-auto min-h-screen pb-[calc(112px+32px)] bg-white coupon__page">
        <header
          class="coupon__header w-full h-14 py-[14px] px-4 flex items-center justify-center relative border-b border-gray-05 bg-white"
        >
            <span class="absolute w-6 h-6 back-icon top-4 left-4 ">
                <RightArrow />
            </span>
            <span class="home-logo">
                <HRnFlexLogo />
            </span>
        </header>
        <section class="h-[calc(100%-56px)] px-6 pt-8 mx-auto bg-white coupon__wrapper">
            <div
              class="coupon__component coupon__component--with-title"
              :style="{ backgroundColor: color }"
            >
                <div
                  class="title"
                  :style="{ backgroundColor: color }"
                >
                    <span>Company</span>
                    <h3>HRnFLEX</h3>
                </div>
                <div class="coupon__component--content">
                    <img src="/images/coupon_2.png" />
                    <p class="coupon-info">
                        <span>DUNKIN</span>
                        <span>Assorted Munchkins Bucket 40pcs</span>
                    </p>
                </div>
                <!-- <div class="coupon__component--content coupon__component--barcode">
                    <img src="/images/barcode.png" />
                </div> -->
            </div>
            <div class="share-treats-logo">
                <TopLogo />
            </div>
            <aside class="h-auto p-6 accordion-wrapper bg-gray-05 rounded-3xl shadow-[0px_2px_12px_0px_#00000014]">
                <div
                  class="relative flex items-center cursor-pointer accordion-header"
                  @click="onAccordionClick"
                >
                    <Gift />
                    <span class="ml-3 text-sm font-bold text-gray-10">How to Redeem</span>
                    <UpArrow
                      :style="{ color: color }"
                      class="absolute transition-transform duration-300 top-2 right-2"
                      :class="openRedeem ? 'rotate-0' : 'rotate-180'"
                    />
                </div>
                <ul
                  class="bg-gray-05 font-medium text-xs leading-[18px] overflow-hidden text-gray-09 transition-all duration-300"
                  :class="openRedeem ? 'max-h-[258px] pt-6' : 'max-h-0'"
                >
                    <li>1. Click the link provided in the SMS or Email, then click the ‘Add to My Rewards’, button to be
                        redirected to your Grab App.</li>
                    <li>2. Confirm the Code and Redeem your gift.</li>
                    <li>3. Choose from GrabTransport, GrabMart, GrabFood, GrabExpress you want to redeem.</li>
                    <li>4. Once Selected, GrabGifts voucher will be stored in ‘My Rewards’.</li>
                    <li>5. Once saved to My Rewards, you will not be able to change the service and gift voucher
                        breakdown you have selected. <br />
                        Note: Make sure you have the updated version of the Grab App installed.</li>
                </ul>
            </aside>
            <aside class="mt-4 pt-6 contents-wrapper bg-gray-05 rounded-3xl shadow-[0px_2px_12px_0px_#00000014]">
                <div class="mx-6 chip-wrapper">
                    <div
                      class="h-10 absolute w-[calc(50%-8px)] transition-transform duration-300 rounded-[999px] top-1 bottom-1"
                      :style="{ backgroundColor: color }"
                      :class="!activeTab ? ' translate-x-0' : 'translate-x-[calc(100%+8px)]'"
                    ></div>
                    <span
                      class="font-semibold text-xs leading-[18px] flex-1 relative text-center transition-colors duration-300 cursor-pointer"
                      :class="!activeTab ? 'text-white' : 'text-gray-09'"
                      @click="() => activeTab = false"
                    >
                        Terms and Conditions
                    </span>
                    <span
                      class="font-semibold text-xs leading-[18px] flex-1 relative text-center transition-colors duration-300 cursor-pointer"
                      :class="activeTab ? 'text-white' : 'text-gray-09'"
                      @click="() => activeTab = true"
                    >
                        Participating Stores
                    </span>
                </div>
                <ul
                  v-if="!activeTab"
                  class="py-6 px-6 text-xs leading-[18px] font-medium text-gray-09"
                >
                    <li>- eVoucher code is valid immediately after receiving it and until the valid period. (Please
                        refer to SMS or Email received)</li>
                    <li>- It can be redeemed only in participating Merchant branches.</li>
                    <li>- For Voucher Code: One time use and unused amounts will be forfeited.</li>
                    <li>- For Voucher Code: eVoucher are only valid for regular priced products. Not applicable for
                        seasonal products.</li>
                    <li>- For Voucher Code: Extra charges will apply to items purchased in excess value of the eVoucher.
                        Additional amount shall be paid thru cash basis ONLY.</li>
                    <li>- eVoucher are valid for dine in and take out transactions only. Not valid for delivery.</li>
                    <li>- Order cannot be cancelled once processed. No refunds and cancellation will be entertained.
                    </li>
                    <li>- eVoucher may not be redeemed when the store is offline or out of stock.</li>
                    <li>- A maximum limit of three (3) redemptions per transaction, per customer, per store visit, per
                        day.</li>
                    <li>- eVoucher is not exchangeable for cash or credit and can’t be used in conjunction with any
                        other promo or discount.</li>
                    <li>- The recipient is responsible for the safekeeping of the eVoucher code. This should only be
                        presented to the branch/store crew. Share treats is not liable for any misused codes.</li>
                    <li>- The Merchant is responsible for the quality of their products and/or services.</li>
                </ul>
                <form
                  v-else
                  @submit="onSearch"
                  class="pt-6"
                >
                    <h5 class="px-6 text-sm font-bold text-gray-10">Quick Search</h5>
                    <label
                      @click.stop="closeAddress"
                      class="mx-6 my-3 flex items-center gap-2 bg-gray-03 border border-gray-05 rounded-[10px] py-[10px] px-3"
                    >
                        <Search />
                        <input
                          placeholder="Province"
                          class="w-full h-5 p-0 text-sm font-medium bg-transparent border-0 ring-0 outline-0 focus:ring-0 focus:shadow-none focus:border-none focus:outline-none focus:ring-offset-0"
                        />
                    </label>
                    <div
                      v-for="item in searchData"
                      :key="item.id"
                      @click="() => onAddressClick(item.id)"
                      class="overflow-hidden bg-white border-t border-t-gray-05 first-of-type::border-b-0 last-of-type:rounded-b-3xl"
                    >
                        <div class="flex items-center justify-between px-3 py-2 cursor-pointer bg-gray-03">
                            {{ item.title }}
                            <UpArrow
                              :style="{ color: color }"
                              class="transition-transform duration-300 top-2 right-2"
                              :class="openAddress[item.id] ? 'rotate-0' : 'rotate-180'"
                            />
                        </div>
                        <ul
                          :style="getAccordionStyle(item.id)"
                          class="overflow-hidden transition-all duration-300"
                          ref="accordionContent"
                        >
                            <li
                              v-for="(address, idx) in item.contents"
                              :key="idx"
                              :style="hover[item.id]?.[idx] && `background-color: ${color}30`"
                              @mouseover="() => hover[item.id][idx] = true"
                              @mouseleave="() => hover[item.id][idx] = false"
                              class="flex flex-col gap-2 px-3 py-4 border-t border-t-gray-05"
                            >
                                <span class="font-semibold text-xs leading-[18px] text-gray-10">{{ address.title
                                    }}</span>
                                <span class="font-medium text-xs leading-[18px] text-gray-07">{{ address.text }}</span>
                            </li>
                        </ul>
                    </div>
                </form>
            </aside>
        </section>
        <footer
          class="fixed bottom-0 px-4 left-0 z-10 bg-white coupon__footer w-full shadow-[0px_0px_12px_0px_#0000001F] py-6"
        >
            <div class="w-full max-w-[418px] mx-auto h-16">
                <div
                  class="relative w-full h-full p-2 rounded-full"
                  :style="{ backgroundColor: color }"
                >
                    <span
                      @click="() => isToggled = !isToggled"
                      :style="{ left: isToggled ? `calc(100% - ${getToggleChipWith() + 8}px)` : '8px' }"
                      ref="toggleRef"
                      class="absolute flex items-center justify-center px-5 py-3 transition-all duration-300 ease-in-out bg-white rounded-full cursor-pointer w-fit"
                    >
                        <SwipeArrow :style="{ color: color }" />
                    </span>
                    <p class="flex flex-col items-center py-[3px]">
                        <span class="text-base font-semibold text-white">Swipe to Claim</span>
                        <span class="text-xs leading-[18px] text-white opacity-60 font-medium">For store personnel
                            use</span>
                    </p>
                </div>
            </div>
        </footer>
    </main>
</template>
