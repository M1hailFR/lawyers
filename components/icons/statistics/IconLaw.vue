<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width || size"
    :height="height || size"
    :transform="`rotate(${getIconRotate(rotate)})`"
    viewBox="0 0 50 50"
    fill="none">
    <rect
      width="50"
      height="50"
      fill="url(#pattern0_4_99)" />
    <defs>
      <pattern
        id="pattern0_4_99"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_99"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_99"
        width="64"
        height="64"
        preserveAspectRatio="none"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfUlEQVR4nO2YTWsTQRyH59TP4aFYagIe+mZfLBJNbVbbajG0KVajFmu1ULGHQj30INgX0YMHIWrBix68GGihgh4Ev0mW9Gs88kcWypLFfZndSc088Bx+Yf6/mQzsZZSyWCwWi8VisVi0ceYJiKpT6V4BUXUqPcsgqk4l9xBE1amcXwJRdQp990EMyv89Q/dADMotZ6o4Q1Vcb21i/3aVMvnDI3dBDJsDOlxvnS6H79BQWTC+CGLYHKZD95lSpXAbxLA5TIfuM6XKxAKIYXMrihVcb50uiwspfQLOPIhxcytKc5SceRreWg1K12QqFzA1B2LcHKU76dlS4WYZxLg5SnfSs6VC+RaIcXOUbv/vYVWnhcoszvwsbmUWTtpiHVFUp4XFGdzFG+A3dl/C+UDKZbqq0+xWpzmuzoBuvX38OSpJ5wN5cJ2dpSlIS28ffw4ibJ82lh2aj67BisOIzl7pFIPyv+aCVLpZLdFcdeDxJGNaex0Qg3LSPm2sXWX76SSkpbePP0cl6XwgW2W61otsP5uguT4BuvX28eeoJJ3PnI0ruBtF8Bu7L+F85mwWKG0WaDy/DCeN25d03jhbBRBNzRvnxSUQTc0b5+U4iKbmjbE7jrM3hrt3EbQ4hvtqNKNXYR28HsV9MwpaHcnoVVgHb4dBbNe+1Hl3AcR27Uud2gDu+0HQaW3wFH0C+/2UPvbR2O8HHUrXh4GUXoUtFoslLl/P0VXPs1vPc1zPQ5Z+y9Os59iRMyhTHObYOcyBSQ9ybBu7gKNemt974UsNPv3I1s81kL3lDMYu4GcPiAdHZvT2N3YBv85CO2jsAn53Qzto7AIsFovFYrFYLKo9+QNzEWc50errZwAAAABJRU5ErkJggg==" />
    </defs>
  </svg>
</template>

<script setup>
import getIconRotate from '../shared/getIconRotate'
defineOptions({
  name: 'IconLaw',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
