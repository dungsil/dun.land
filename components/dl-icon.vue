<script setup lang="ts">
type IconProps = {
  icon: string
}

defineProps<IconProps>()
</script>

<template>
  <Icon :name="icon" />
</template>
