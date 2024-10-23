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

const OPTIONS = [{ label: 'Yes', value: true }, { label: 'No', value: false }]

export default {
    components: {
        DownloadIcon
    },
    data() {
        const taxReturnSurvey = [
            {
                title: 'For the Year (20YY)',
                type: 'select',
                options: MONTHS,
            },
            {
                title: 'Amended Return?',
                type: 'radio',
                options: OPTIONS
            },
            {
                title: 'Number of Sheet/s Attached',
                type: 'input',
            },
        ]
        return {
            OPTIONS,
            formSelectValue: {
                month: '',
                typeSelect: '',
                amendedReturn: false,
                numberOfSheetAttached: '',
                tin: '',
                rdoCode: '',
                agentName: '',
                address: '',
                zipCode: '',
                categoryOfWithholdingAgent: 'private',
                ifPrivate: ''
            },
            openedSelects: {
                typeSelect: false,
                month: false,
            },
            selectPositions: {
                typeSelect: { top: 0, left: 0, width: 0 },
                month: { top: 0, left: 0, width: 0 },
            },
            taxReturnSurvey,
        }
    },
    methods: {
        handleClickOutside(event) {
            const openRefName = Object.keys(this.openedSelects).find(key => this.openedSelects[key]);
            const isRef = (Array.isArray(this.$refs[openRefName]) ? this.$refs[openRefName][0] : this.$refs[openRefName])
            const isDropdownRef = (Array.isArray(this.$refs[openRefName]) ? this.$refs[`${openRefName}Dropdown`][0] : this.$refs[`${openRefName}Dropdown`])
            if (
                isRef && !isRef.contains(event.target)
                && !isDropdownRef.contains(event.target)
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

                    const isRef = Array.isArray(this.$refs[refName]) ? this.$refs[refName][0] : this.$refs[refName]
                    const rect = isRef.getBoundingClientRect();
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
            this.formSelectValue[refName] = val
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
                  :class="[!formSelectValue.typeSelect ? 'text-gray-08' : 'text-[#151515]', openedSelects.typeSelect && 'rounded-b-none']"
                  @click="() => toggleSelect('typeSelect')"
                >{{ formSelectValue.typeSelect || 'Select Report Type' }}</div>
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
                    <ul class="grid grid-cols-3">
                        <li
                          v-for="(survey, idx) in taxReturnSurvey"
                          :key="idx"
                          class="inline-flex flex-col items-center gap-4 px-3 py-3 border-r last-of-type:border-r-0"
                        >
                            <div class="inline-flex items-center w-full">
                                <strong>{{ idx + 1 }}. {{ survey.title }} </strong>
                                <button
                                  v-if="survey.type === 'select'"
                                  class="px-3 py-1 ml-4 border rounded-lg border-main-dark text-main-dark"
                                >Load</button>
                            </div>
                            <fieldset
                              v-if="survey.type === 'select'"
                              class="inline-flex flex-col w-full gap-3"
                            >
                                <label>
                                    <div
                                      class="w-full font-bold select"
                                      ref="month"
                                      :class="[!formSelectValue.month ? 'text-gray-08' : 'text-[#151515]', openedSelects.month && 'rounded-b-none']"
                                      @click="() => toggleSelect('month')"
                                    >{{ formSelectValue.month || 'Select Report Type' }}</div>
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
                                              v-for="item in survey.options"
                                              :key="item"
                                              @click="() => selectValue('month', item)"
                                            >{{ item }}</li>
                                        </ul>
                                    </Teleport>
                                </label>
                                <input
                                  class="w-full input-field"
                                  type="text"
                                />
                            </fieldset>

                            <fieldset
                              v-if="survey.type === 'radio'"
                              class="inline-flex items-center w-full gap-6 mt-3"
                            >
                                <label
                                  v-for="check in survey.options"
                                  :key="check.label"
                                  class="inline-flex items-center mr-4 cursor-pointer last-of-type:mr-0"
                                >
                                    <input
                                      type="radio"
                                      class="mr-4 radio"
                                      :value="check.value"
                                      v-model="formSelectValue.amendedReturn"
                                    >
                                    {{ check.label }}
                                </label>
                            </fieldset>

                            <fieldset
                              v-if="survey.type === 'input'"
                              class="inline-flex items-center w-full gap-6 mt-3"
                            >
                                <input
                                  class="w-full input-field"
                                  v-model="formSelectValue.numberOfSheetAttached"
                                />
                            </fieldset>
                        </li>
                    </ul>
                    <h3 class="title">
                        Part I - Background Information
                    </h3>
                    <ul class="px-3">
                        <li class="inline-flex items-center flex-1 w-full gap-4 py-3">
                            <div class="inline-flex items-center">
                                <strong class="whitespace-nowrap">4. Taxpayer Identification Number (TIN)</strong>
                            </div>
                            <fieldset class="w-full">
                                <input
                                  class="w-full input-field"
                                  v-model="formSelectValue.tin"
                                />
                            </fieldset>
                            <div class="inline-flex items-center">
                                <strong class="whitespace-nowrap">5. RDO Code</strong>
                            </div>
                            <fieldset class="w-28">
                                <input
                                  class="w-28 input-field"
                                  v-model="formSelectValue.rdoCode"
                                />
                            </fieldset>
                        </li>
                        <li class="inline-flex flex-col flex-1 w-full gap-4 py-3">
                            <div class="inline-flex items-center">
                                <strong>6. Withholding Agent’s Name (Last Name, First Name, Middle Name for Individual
                                    OR
                                    Registered Name for Non-Individual)</strong>
                            </div>
                            <fieldset class="w-full">
                                <input
                                  class="w-full input-field"
                                  v-model="formSelectValue.agentName"
                                />
                            </fieldset>
                        </li>
                        <li class="inline-flex items-center flex-1 w-full gap-4 py-3">
                            <div class="inline-flex items-center">
                                <strong class="whitespace-nowrap">7. Registered Address</strong>
                            </div>
                            <fieldset class="w-full">
                                <input
                                  class="w-full input-field"
                                  v-model="formSelectValue.address"
                                />
                            </fieldset>
                            <div class="inline-flex items-center">
                                <strong class="whitespace-nowrap">7-A. ZIP Code</strong>
                            </div>
                            <fieldset class="w-28">
                                <input
                                  class="w-28 input-field"
                                  v-model="formSelectValue.zipCode"
                                />
                            </fieldset>
                        </li>
                        <li class="inline-flex items-center flex-1 w-full gap-4 py-3">
                            <div class="inline-flex items-center">
                                <strong class="whitespace-nowrap">8. Category of Withholding Agent </strong>
                            </div>
                            <fieldset class="inline-flex items-center w-full">
                                <label
                                  v-for="check in [{ label: 'Private', value: 'private' }, { label: 'Government', value: 'government' }]"
                                  :key="check.label"
                                  class="inline-flex items-center mr-4 cursor-pointer flex-nowrap last-of-type:mr-0"
                                >
                                    <input
                                      type="radio"
                                      class="mr-2 radio"
                                      :value="check.value"
                                      v-model="formSelectValue.categoryOfWithholdingAgent"
                                    >
                                    {{ check.label }}
                                </label>
                            </fieldset>
                            <div class="inline-flex items-center">
                                <strong class="whitespace-nowrap">8-A. If private, top withholding agent?</strong>
                            </div>
                            <fieldset class="inline-flex items-center text-nowrap">
                                <label
                                  v-for="check in OPTIONS"
                                  :key="check.label"
                                  class="inline-flex items-center mr-4 cursor-pointer last-of-type:mr-0"
                                >
                                    <input
                                      type="radio"
                                      class="mr-2 radio"
                                      :value="check.value"
                                      v-model="formSelectValue.ifPrivate"
                                    >
                                    {{ check.label }}
                                </label>
                            </fieldset>
                        </li>
                    </ul>
                    <h3 class="title">
                        Part II - Summary of Remittances per BIR Form No. 1601-C
                    </h3>
                    <h3 class="title">
                        Continuation of Part II
                    </h3>
                </div>
            </form>
        </section>
    </main>
</template>
