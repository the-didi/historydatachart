<template>
    <div class="dis-btn">
        <span>{{ title }}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.41659 6.41671V2.33337H7.58325V6.41671H11.6666V7.58337H7.58325V11.6667H6.41659V7.58337H2.33325V6.41671H6.41659Z"
                fill="#929AAB" />
        </svg>
    </div>
</template>
<script lang="ts" setup>
type Props = {
    title: any
}
const props = defineProps<Props>()
</script>
<style lang="scss" scoped>
.dis-btn {
    width: 70px;
    height: 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border: 1px solid #eee;

    span {
        color: #929AAB;
        font-size: 1em;
        font-weight: 400;
        line-height: 15px;
    }

    svg {
        cursor: pointer;
    }
}</style>