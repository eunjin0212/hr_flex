<template>
    <div>
        <button 
            type="button" 
            class="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white  hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            @click="onMoveToExample('/home')">
            <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            home
        </button>
        <button 
            type="button" 
            class="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white  hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            @click="startLoadingSpinner">
            <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
            test loading-spinner elements
        </button>
        <button
            type="button"
            class="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white  hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            @click="signOut">
            <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
            sign out
        </button>
    </div>
    <Teleport to="body">
        <loadingSpinner />
    </Teleport>
</template>
<script>
    
import { PlusIcon } from '@heroicons/vue/solid';
import loadingSpinner from '@/components/elements/loading-spinner.vue'

export default {
    components:{
        PlusIcon,
        loadingSpinner
    },
    mounted() {
        const isPrd = process.env.VUE_APP_SERVER_MODE === 'prd'; // production
        if(isPrd){
            location.href = '/home';
        }
    },
    data(){
        return {
        }
    },
    methods : {
        onMoveToExample(url){
            location.href = url;
        },
        startLoadingSpinner(){
            const self = this;
            self.$emitter.$emit("UI_EVENT_USE_LOADING_BACKGROUND", true);

            //5초뒤 종료
            setTimeout(() => self.$emitter.$emit("UI_EVENT_USE_LOADING_BACKGROUND", false), 5000);
        },
        signOut(){
            const self = this;

            const url = self.$api("uri", "post-sign-out");

            self.$axios.post(url)
                .then((res) => {
                    alert("signOut")
                })
                .catch((err) => {
                    alert("error");
                });
        }
    }
};
</script>