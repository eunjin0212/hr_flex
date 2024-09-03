<template>
    <div>
        <div class="container mx-auto lg:py-[77px] pb-[50px] max-w-[600px] bg-[#F6F6F6]">
            <div>
                <h1>Main Home</h1>
                <loadingSpinner />
            </div>
        </div>
    </div>
    <Teleport to="body">
    </Teleport>
</template>
<script>
import loadingSpinner from '@/components/elements/loading-spinner.vue'

export default {
    components: {
        loadingSpinner
    },
    mounted() {
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>
<style
  lang="scss"
  scoped
></style>
