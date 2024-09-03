<script>
import TopLogo from '@/assets/icons/TopLogo.vue';
import RightArrow from '@/assets/icons/RightArrow.vue';
import Mail from '@/assets/icons/Mail.vue';
import Reset from '@/assets/icons/Reset.vue';
import Delete from '@/assets/icons/Delete.vue';
import SmallLogo from '@/assets/icons/SmallLogo.vue';
import SmallCheck from '@/assets/icons/SmallCheck.vue';

export default {
    components: {
        TopLogo,
        RightArrow,
        Mail,
        Reset,
        Delete,
        SmallLogo,
        SmallCheck,
    },
    data() {
        return {
            passcode: Array(6).fill(""),
            openKeypad: false,
            isSubmit: false,
            focusIndex: 0,
            isAuthorize: false,
        }
    },
    methods: {
        onKeypress(event) { // 숫자만
            if (event.key.match(/[0-9]/)) {
                return;
            }
            event.preventDefault();
        },
        onInput(event, idx) {
            if (event.target.value.match(/[^0-9]/g)) {
                event.target.value = event.target.value.replace(/[^0-9]/g, '');
            }

            this.passcode[idx] = event.target.value;

            if (event.target.value.length === 1 && idx < this.passcode.length - 1) {
                const nextInput = this.$refs[`input-${idx + 1}`][0]
                this.$nextTick(() => {
                    nextInput.focus(); // Focus the next input
                });
            }
        },
        onSubmit(event) {
            event.preventDefault();
            this.isSubmit = true;
            this.openKeypad = false;
            if (!this.validation) {
                return;
            }
        },
        onFocus(idx) {
            this.openKeypad = true
            this.focusIndex = idx
            this.isSubmit = false
        },
        onClick(value) {
            if (value === 'reset') {
                this.passcode = Array(6).fill("")
                return;
            }

            const currentIndex = this.passcode.findIndex((code) => code === ''); // 빈 칸의 첫 번째 인덱스 찾기
            const lastIndex = currentIndex === -1 ? this.passcode.length : currentIndex; // 빈 칸이 없으면 마지막 인덱스 설정

            if (value === 'back') {
                // back일 경우 마지막 입력된 값을 지움
                const deleteIndex = lastIndex - 1;
                if (deleteIndex >= 0) {
                    this.passcode[deleteIndex] = '';
                }
                return;
            }

            // 그 외의 값을 입력할 경우, 현재 빈 칸에 값 입력
            if (lastIndex < this.passcode.length) {
                this.passcode[lastIndex] = value;
            }
        }
    },
    computed: {
        validation() {
            return !this.isSubmit || this.passcode.filter((code) => code !== '').length === 6
        }
    }
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
        <section
          class="px-6 pt-8 bg-white sms-auth__wrapper"
          :class="openKeypad ? 'h-[calc(100vh-56px-340px)]' : 'h-[calc(100vh-56px)]'"
        >
            <h1 class="text-3xl leading-[38px] font-bold text-blue-05 w-[342px] mx-auto sm:text-center">Enter the
                passcode</h1>
            <p class="text-gray-09 text-[13px] font-medium leading-5 mt-6 max-w-[342px] mx-auto sm:text-center">
                We have sent you an SMS or/and Email with a
                Password. Enter the authentication Password below
            </p>
            <form @submit="onSubmit">
                <div class="flex items-center justify-center gap-2 my-8">
                    <label
                      v-for="(_, idx) in passcode"
                      :key="idx"
                      class="relative block w-full h-12 rounded-lg max-w-12 before:rounded-lg before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-blue-03"
                      :class="{
                        'before:border-blue-06 before:border-2': passcode[idx] !== '',
                        'before:!border-error before:border-2': !validation
                      }"
                    >
                        <input
                          type="text"
                          v-model="passcode[idx]"
                          maxlength="1"
                          pattern="[0-9]+"
                          inputmode="numeric"
                          :ref="`input-${idx}`"
                          @keypress="onKeypress"
                          @input="(e) => onInput(e, idx)"
                          @focus="() => onFocus(idx)"
                          class="w-full h-full text-center text-xl leading-[30px] font-semibold text-navy-01 border-0 rounded-lg shadow-none ring-0 bg-blue-02 focus:ring-0 focus:border-0 focus:outline-0 focus:shadow-none"
                        />
                    </label>
                </div>
                <aside v-if="!isAuthorize" class="px-5 py-[14px] border border-gray-05 rounded-xl bg-gray-01">
                    <div class="inline-flex gap-2 text-gray-10 font-semibold text-xs leading-[18px] mb-2">
                        <SmallCheck />
                        Alert
                    </div>
                    <p class="font-medium text-xs leading-[18px] text-gray-07">
                        This menu is for store personnel only. <br>
                        Please ask for assistance to claim the treats.
                    </p>
                </aside>
                <button
                  class="mt-8 max-w-[342px] block mx-auto w-full h-12 text-sm font-semibold text-white bg-blue-04 rounded-xl"
                >Submit</button>
            </form>
            <div class="mt-8 mb-6 max-w-[342px] flex flex-col mx-auto justify-center items-center">
                <p class="text-center text-gray-09 text-xs leading-[18px] font-semibold mb-1">If you have inquiries,
                    Please send
                    email
                    below</p>
                <p class="text-center text-gray-08 text-xs leading-[18px] font-medium mb-6">Business Hours: 10AM - 5PM
                    (Monday-Friday)
                </p>
                <a
                  href="mailto:biztreats@sharetreats.com"
                  class="bg-blue-01 border border-blue-02 rounded-[53px] px-4 py-2 text-blue-05 inline-flex gap-2 items-center"
                >
                    <Mail />biztreats@sharetreats.com
                </a>
            </div>
            <SmallLogo class="mx-auto" />
        </section>
        <footer
          v-if="openKeypad"
          class="p-6 h-[340px] z-10 absolute left-0 bottom-0 w-full sms-auth__footer grid grid-cols-3 justify-items-center items-center bg-blue-04 text-white text-3xl leading-[38px] font-semibold"
        >
            <div
              v-for="number in 9"
              :key="number"
              class="cursor-pointer"
              @click="() => onClick(number)"
            >{{ number }}</div>
            <div
              class="cursor-pointer"
              @click="() => onClick('reset')"
            >
                <Reset />
            </div>
            <div
              class="cursor-pointer"
              @click="() => onClick(0)"
            >0</div>
            <div
              class="cursor-pointer"
              @click="() => onClick('back')"
            >
                <Delete />
            </div>
        </footer>
    </main>
</template>
