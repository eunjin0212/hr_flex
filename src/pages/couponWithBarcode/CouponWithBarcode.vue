<script>
import RightArrow from '@/assets/icons/RightArrow.vue';
import TopLogo from '@/assets/icons/TopLogo.vue';
import Gift from '@/assets/icons/Gift.vue';
import UpArrow from '@/assets/icons/UpArrow.vue';
import Search from '@/assets/icons/Search.vue';
import HRnFlexLogo from '@/assets/icons/HRnFlexLogo.vue';

export default {
    components: {
        HRnFlexLogo,
        RightArrow,
        TopLogo,
        Gift,
        UpArrow,
        Search,
    },
    data() {
        return {
            color: '#0CB3EB',
            openRedeem: false,
            activeTab: false,
            code: 'Barcode', // FIXME: OR code 디자인을 위한 코드 입니다
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
        }
    },
    methods: {
        onSearch(event) {
            event.preventDefault();
        },
        adjustMargin() {
            const termsElement = this.$refs.termsRef;
            const participatingElement = this.$refs.participatingRef;

            if (termsElement && participatingElement) {
                // 숨겨진 요소의 높이를 계산하기 위해 일시적으로 보이게 설정
                const originalTermsDisplay = termsElement.style.display;
                const originalParticipatingDisplay = participatingElement.style.display;

                termsElement.style.display = 'block';
                participatingElement.style.display = 'block';

                // 높이 계산
                const termsHeight = termsElement.offsetHeight;
                const participatingHeight = participatingElement.offsetHeight;

                // 높이 차이에 따라 margin 추가
                if (termsHeight > participatingHeight) {
                    participatingElement.style.marginBottom = `${termsHeight - participatingHeight}px`;
                    termsElement.style.marginBottom = `0`; // 기존 margin 제거
                } else {
                    termsElement.style.marginBottom = `${participatingHeight - termsHeight}px`;
                    participatingElement.style.marginBottom = `0`; // 기존 margin 제거
                }

                // 원래 상태로 복구
                termsElement.style.display = originalTermsDisplay;
                participatingElement.style.display = originalParticipatingDisplay;
            }
        },
        onAddressClick(id) {
            this.openAddress[id] = !this.openAddress[id];
            this.$nextTick(() => {
                this.adjustMargin();
            });
        },
        closeAddress() {
            Object.keys(this.openAddress).forEach((key) => {
                this.openAddress[key] = false
            })
            this.$nextTick(() => {
                this.adjustMargin();
            });
        },
        onClickTab(val) {
            this.closeAddress()
            this.activeTab = val;
            this.$nextTick(() => {
                this.adjustMargin();
            });
        },
        getAddressAccordionStyle(id, index) {
            return {
                height: this.openAddress[id] ? `${this.$refs.addressAccordion?.[index].scrollHeight || 0}px` : '0px',
                opacity: this.openAddress[id] ? 1 : 0,
            };
        },
        onAccordionClick() {
            this.openRedeem = !this.openRedeem;
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
        this.adjustMargin()
    },
    computed: {
        contentHeight() {
            if (this.openRedeem && this.$refs.accordion) {
                return `${this.$refs.accordion.scrollHeight}px`;
            }
            return '0px';
        },
    },
}
</script>
<template>
    <main class="relative w-full h-auto min-h-screen pb-8 bg-white coupon__page">
        <header
          class="coupon__header w-full h-14 py-[14px] px-4 flex items-center justify-center relative border-b border-gray-05 bg-white"
        >
            <button class="absolute w-6 h-6 back-icon top-4 left-4">
                <RightArrow />
            </button>
            <a class="home-logo">
                <HRnFlexLogo />
            </a>
        </header>
        <section class="h-[calc(100%-56px)] px-4 pt-8 mx-auto bg-white coupon__wrapper">
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
                    <img src="/images/coupon_3.png" />
                    <p class="coupon-info">
                        <span>Robinsons Supermarket & Easymart</span>
                        <span>P100 eGift Certificate</span>
                    </p>
                </div>
                <div
                  class="coupon__component--content coupon__component--barcode"
                  @click="() => {
                code = code === 'Barcode' ? 'QR' : 'Barcode' // FIXME: OR code 디자인을 위한 코드 입니다
            }"
                >
                    <p class="mb-4 text-sm font-medium text-center text-gray-10">{{ code }}</p>
                    <!-- FIXME: OR code 디자인을 위한 코드 입니다 -->
                    <img
                      :class="{ '!max-w-40': code !== 'Barcode' }"
                      :src="`/images/${code}.png`"
                    />
                </div>
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
                  ref="accordion"
                  class="bg-gray-05 font-medium text-xs leading-[18px] overflow-hidden text-gray-09 transition-all duration-300"
                  :style="{ height: contentHeight }"
                  :class="{ 'mt-6': openRedeem }"
                >
                    <li class="break-words">1. Click the link provided in the SMS or Email, then click the ‘Add to My
                        Rewards’, button to be
                        redirected to your Grab App.
                        2. Confirm the Code and Redeem your gift.
                        3. Choose from GrabTransport, GrabMart, GrabFood, GrabExpress you want to redeem.
                        4. Once Selected, GrabGifts voucher will be stored in ‘My Rewards’.
                        5. Once saved to My Rewards, you will not be able to change the service and gift voucher
                        breakdown you have selected.
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
                      @click="() => onClickTab(false)"
                    >
                        Terms and Conditions
                    </span>
                    <span
                      class="font-semibold text-xs leading-[18px] flex-1 relative text-center transition-colors duration-300 cursor-pointer"
                      :class="activeTab ? 'text-white' : 'text-gray-09'"
                      @click="() => onClickTab(true)"
                    >
                        Participating Stores
                    </span>
                </div>
                <ul
                  v-show="!activeTab"
                  ref="termsRef"
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
                  v-show="activeTab"
                  ref="participatingRef"
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
                      v-for="(item, idx) in searchData"
                      :key="item.id"
                      class="overflow-hidden bg-white border-t border-t-gray-05 first-of-type::border-b-0 last-of-type:rounded-b-3xl"
                    >
                        <div
                          class="flex items-center justify-between px-3 py-2 cursor-pointer bg-gray-03 text-wrap"
                          @click="() => onAddressClick(item.id)"
                        >
                            {{ item.title }}
                            <UpArrow
                              :style="{ color: color }"
                              class="transition-transform duration-300 top-2 right-2"
                              :class="openAddress[item.id] ? 'rotate-0' : 'rotate-180'"
                            />
                        </div>
                        <ul
                          :style="getAddressAccordionStyle(item.id, idx)"
                          class="overflow-hidden transition-all duration-300"
                          ref="addressAccordion"
                        >
                            <li
                              v-for="(address, idx) in item.contents"
                              :key="idx"
                              :style="hover[item.id]?.[idx] && `background-color: ${color}30`"
                              @mouseover="() => hover[item.id][idx] = true"
                              @mouseleave="() => hover[item.id][idx] = false"
                              class="flex flex-col gap-2 px-3 py-4 border-t border-t-gray-05"
                            >
                                <span class="font-semibold text-xs leading-[18px] text-gray-10 text-wrap">{{
                address.title
            }}</span>
                                <span class="font-medium text-xs leading-[18px] text-gray-07">{{ address.text }}</span>
                            </li>
                        </ul>
                    </div>
                </form>
            </aside>
        </section>
    </main>
</template>
