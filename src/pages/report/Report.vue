<script>
import DownloadIcon from '@/assets/icons/Download.vue';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export default {
    components: {
        DownloadIcon
    },
    data() {
        return {
            MONTHS,
            typeSelect: '',
            month: '',
            openedSelects: {
                typeSelect: false,
                month: false,
            },
            selectPositions: {
                typeSelect: { top: 0, left: 0, width: 0 },
                month: { top: 0, left: 0, width: 0 },
            }
        }
    },
    methods: {
        handleClickOutside(event) {
            const openRefName = Object.keys(this.openedSelects).find(key => this.openedSelects[key]);
            if (
                this.$refs[openRefName] && !this.$refs[openRefName].contains(event.target)
                && !this.$refs[`${openRefName}Dropdown`].contains(event.target)
            ) {
                this.openedSelects[openRefName] = false;
                document.removeEventListener('click', this.handleClickOutside);
            }
        },
        toggleSelect(refName) {
            this.openedSelects[refName] = !this.openedSelects[refName];
            if (this.openedSelects[refName]) {
                this.$nextTick(() => {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

                    const rect = this.$refs[refName].getBoundingClientRect();
                    this.selectPositions[refName].top = rect.bottom + scrollTop
                    this.selectPositions[refName].left = rect.x + scrollLeft
                    this.selectPositions[refName].width = rect.width
                    document.addEventListener('click', this.handleClickOutside);
                });
                return
            }
            document.removeEventListener('click', this.handleClickOutside);
        },
        selectValue(refName, val) {
            this[refName] = val
            this.openedSelects[refName] = false;
            document.removeEventListener('click', this.handleClickOutside);
        },
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}
</script>
<template>
    <main class="ml-[257px] mt-[82px] px-[60px] bg-gray-01 min-h-screen font-manrope">
        <div>
            <p class="text-sm font-medium text-gray-13">Payroll / Report</p>
            <h1 class="text-[32px] leading-10 text-gray-13 font-bold mt-3">Report</h1>
        </div>
        <ul class="px-6 mt-8 border-b mb-11 border-b-gray-07">
            <li class="inline-flex flex-col items-center gap-1">
                <span class="inline-block text-base font-semibold font-epilogue">Report</span>
                <span class="inline-block w-[87px] h-1 bg-main-dark rounded-t-lg"></span>
            </li>
        </ul>
        <section>
            <label>
                <strong class="mr-4 text-sm text-gray-11">Type</strong>
                <div
                  class="font-bold select w-[376px]"
                  ref="typeSelect"
                  :class="[!typeSelect ? 'text-gray-08' : 'text-[#151515]', openedSelects.typeSelect && 'rounded-b-none']"
                  @click="() => toggleSelect('typeSelect')"
                >{{ typeSelect || 'Select Report Type' }}</div>
                <Teleport
                  to="body"
                  v-if="openedSelects.typeSelect"
                >
                    <ul
                      class="select-options text-[#151515]"
                      ref="typeSelectDropdown"
                      :style="{
                        top: selectPositions.typeSelect.top + 'px',
                        left: selectPositions.typeSelect.left + 'px',
                        width: selectPositions.typeSelect.width + 'px',
                    }"
                    >
                        <li @click="() => selectValue('typeSelect', 'BIR Form No,1604-C January 2018 (ENCS)')">BIR Form
                            No,1604-C January 2018 (ENCS)</li>
                    </ul>
                </Teleport>
            </label>
        </section>
        <section class="pt-2">
            <form>
                <div class="flex justify-end mb-5">
                    <button
                      class="inline-flex items-center justify-center py-3 gap-2 w-[246px] border border-gray-07 rounded-lg text-black text-sm leading-[26px] tracking-[0.5px]"
                    >
                        <DownloadIcon /> Download
                    </button>
                </div>
                <div class="border rounded border-gray-07">
                    <ul>
                        <li>
                            <strong>1) For the Month (MM/YYYY)</strong>
                            <label>
                                <div
                                  class="font-bold select w-[376px]"
                                  ref="month"
                                  :class="[!month ? 'text-gray-08' : 'text-[#151515]', openedSelects.month && 'rounded-b-none']"
                                  @click="() => toggleSelect('month')"
                                >{{ month || 'Select Report Type' }}</div>
                                <Teleport
                                  to="body"
                                  v-if="openedSelects.month"
                                >
                                    <ul
                                      class="select-options text-[#151515]"
                                      ref="monthDropdown"
                                      :style="{
                                        top: selectPositions.month.top + 'px',
                                        left: selectPositions.month.left + 'px',
                                        width: selectPositions.month.width + 'px',
                                    }"
                                    >
                                        <li
                                          v-for="month in MONTHS"
                                          :key="month"
                                          @click="() => selectValue('month', month)"
                                        >{{ month }}</li>
                                    </ul>
                                </Teleport>
                            </label>
                            <input />
                        </li>
                    </ul>
                </div>
            </form>
        </section>
    </main>
</template>
