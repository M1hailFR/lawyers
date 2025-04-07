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
      fill="url(#pattern0_4_54)" />
    <defs>
      <pattern
        id="pattern0_4_54"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_54"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_54"
        width="64"
        height="64"
        preserveAspectRatio="none"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAALFklEQVR4nO2aeXAUZRrGB9cVrVXURf9YoFYl95CZSTKZIxcTQkggFwnJ5JrcCSEhqIRa5HCVXeSUSDgSDkEQXEISQhIDBhACSkBL3bVqLf5CEMRjucI/opzWb+vratyeIRzpSUC38lS9VZ3nfb/nfbqnj6+/jkbTj370ox/96EefYsiL+AydwqRhU1g9rIKOoRUcGzqFC0OncFWOC4KTclNYJWqHVOCt+S3juXL0z07mjWcm882zFaAmnqng1LMVVAktzW8DDBheTvzwMg57lIMiTnuUs3V4OS96lBH7XAXefy7nSa2dh0SIbcGJ3PAypg4vo14eo9Q4NHwScaKH5tcI33KM3mV84l0GIrzK6PIuY6XXJMzqFBngVYrFaxI1spak6z2Jjz1KCdL8WvBMPg9rS1mmLeW6thS0pXynnUilPoc/9FYPoaUtZZq2lO/lHte1E6n2fJ6BmvsJbTGe/hP5XDcR/Eu46j+R13tzx2/qN5lHdSUsEb3knv8aUYqH5n4gsIiQgCK6AorBUMxRfRGBtyyewwNBJVgDipgdUMT2gCKOBBRxwVDEVRFiW3CGYpoCipmlL8QixtxKTldAkKGIL+Xe56X6ewljETHGIi4aiyCoiFazg0Hd1ZlLGGYsYqGxiG9FbU8iqJBvjIUsMOQxtFttB4OMhbTJ9ReNxYzR3AtYizFbCrloKQRLIW/b5vCga40pl8GWAlZbCrki12Eu5Ji5kFpzIVkhRQSKGmMpvxchtiWugGxzAassBRz/ZVwBl8U4azF/dO1jt/M7SwFrpdoCfgwpILRvdz4Hz9A8ukLzISSfdd09kkLyyQzN57xccz00n7qeG2OANZ+w0Dy2yhpC61xYHund1Ybksf5GTXghwzV9AVs+D4fn8XlEHoTn0SqOvlPexoPheawWeakmlz2hDnzc7TsyF7+IXPb9optHjejl2jsijza55rOxffF0sOWwLDIHInM4OtblmrfaeSQyhx1y/idbNhN7vX8uZZEOLkk9HLSJnsp8tJ3HbQ6Oibwth6pebR6TjXG0g+vR2Vwdnel8txdHP9rBjmgHjHZwNjqXYE0fISoLc7SDc3KvNtczQfiMdnBNxJhsAnqpLQNis/kkNhtisnndNRuTxWo5dzYmC19NHyM6A7+YbM6JnrHZrHTNx2axVMplcahXGsZlEh+XCeMy+G6MyyQnPp1MKZfJT+My++6X78aTJS6DS6L32EzSlLmkJB4bl8l/RC4+i1i3myWkczgxAxIyqVTyyckMTsjgvMjF23v/mr8TEjMoF70TMzgbn82TTp4zmC7l0jnoVpOUdAwpdki20+X666eksVrkUuzsUaM99SMOV34EIqYeplONRrKdDtmD06Vgt/NoShoXpFw6/hq1SE3ljbQ0SE11bpCSwrDUVK6kpnLdblf3qJtxGJShRsNuRys8pKVxOTOTIS7eV8neF2vUIj2VbzJSIT0Fkwu/UPAZE6hTq/1KJyhDrU7GBBokjxOY7+QxBavEp3JSlbAjCR9HCmQnc0Y545szhwccKZwSuaxkQtQaf+0gKEOtjmM8EbLPb50nZwxwpHBa5HIS8eyxcG4yZXnJkDeerUo+PwWr4HPHc8yd1ZnFH4Iy1OoID7nJnJC8JjsvvuSOp0Hw+cmU9li2IIlVhUlQkMSLSr4wiZcFX5hErXrTGs3SA6AMd7QKE1kjeU1khovXSpmv6bFoSQL7SxKhJN75WVqSwHaJTyTLHdM1+0EZ7miVxOMQnooT2abki+OJk/gE9vZYtCyeE2UJUDrWecVlUjxHBF+WdJsFkLvAmx2gDHe0yuMxSp4S+MLFq5fgJyVwvMeik+PoqoiDyhjn9/AbfEUyg283/u33Ofz2XuiN2Lj39vOE58fytORpHOeUfGkCT3XH3xWeH8uVF8bBHDsP3Q3virr3oTfjDl4HCk8vjOPy3fB3hakxXKmMvXlHb8W7omkP9Gbc6QAIT5UxNx+A7vi7wvQxdE2PufkSuMHPHH37S6B1F53v7oJeifbbz+lnjeVp4Wl6jPOpPs3GU93xd4UZ0Xw1cwzMjHGeRMyM5ojgZ4x27ya4qx2U4Y7WzBiMktcxzjfB6dF4yfyxHou+PJr9L4+G2dHOj8HZUWwX/Kxost0x3bETlOGO1qwociSvo50fg38dRZzER6l4DL4SxapXo+DVKOeJ0CtRzBa8yLtjunMHKMMdrVejWCt7esmJH0WlxI9SMRF6LZJJcyNhro16Jf/3SCwyfxw3psKftIEy1OoID3+3cVJ4mmdzXpSZG0mj4P9mU7FeMXcUPvNtMN/GGeWOztHwwHwbp6RcJGFqjX/eCspQq/NaBCOFl3k2vhbebvDC8zwbZ0XutVEqP58tCufUoghYEO786WlhOAsEvzDC+UWpJzjSAspQq7MogkbZyzwlv2AkITKv7nVYoCqcqqpwqAp3XhB5w8rQJWFcXhLG9eqR+GlU4GgzKEONxpIQ/KvC+bkqjEuLQ50XRKrCWS17X6RRi2Xh6KvDoDqMriVjnJfEqkOplXKhKu6wGo3mRBOdJ5tAxImmnq/diVN8aSgHhIelYSxX5haH8tjSUC6I3LIQN5bEBJaHcGhFCCy3ME2jwEoTg1eEcE7kVlop09xjrLAyRfJl5cyqcOdF0RVWXpJz7i2KCtRYiKu1Qo2V72tsPKpRoMZKupSzcGm1Ve1/gvQcK0MJqbVwWfSutTBBmVtuZlCtldNSzkyM283QMGCNiY/XmmGNiSWu+bUmakRurZlz6yzq7gc9wZsmRqw1c172s6wbP9WSH5O6leZuscFI0Lpgrq83cVVsK3NzbDy43kTbehOsN3HuLWPf/bPCehMh64I5L/dqbXT5QLs2GNP6YK6JeMuMoVebbzBSvTEYNgbz5Ttm54+jjVYe2WikTeQ3GLn0lpHy3uwtzsINRqZsDOay7KFV9FTWbDTwxEYjx6W88eYz1W0s92Tg5iD+uTkINgXRdsDlw6T4e1MQK0Veqgmk450AtO723RyM/6ZADih0l7v+8lLvQHbK3j5t1N7+VV01thrxqAvgfF0g1AWyvrupcF0AaXWBnJFrft4SQP0WI+E9mTaL2q1BRNQF0ig0hNaWQE7/I9D5hnejti6ADXLN2c16ntP0JeoDMNUb+KHBAA0GNrmeCQJbdDxZr2dlvYHLch31Br5q0LOm3oCjUYex2cRg8UuJ2GLkKcE1GMip17O2Qc+JG+MaDFyqN7C8xcATrn3EmVCv501JX8+PjYHqv1P0CNv9GdOk42KTHrbpaGs08nh3da2BDGnSM3+bnlOitofx9TY987Yb+VN32qLnNh075dofmnREa+4lWvVYmv0516KDFh3HWv1v/XlcvKQ0GzA3+zOz2Z9tzf580aKjq0XHFTm6mnX8W+RadMzYPgKT8sXGFSLfouO41Nufs0Jbcz+wU8fwNi2f7RgBbVqu7RjB0lYfHuurfu2eDGrTUi33YoeWT9/t62v+Tmj3ZGC7H1Xv+XGtXQvtfpxu9+MvB7TOs0Z3ILR2+TH9PT/OiB6i13talvTZ3V4N9mgJ2O3LoT2+IIUPF3b7UPu+L1Y1CydizC5fQvb4skpo3dDd7Uvnbq9enuT0Jvb7ENvhw8EOH7gR+3w4u8+Hhg5vKvd5M67DB5+9vv97CohtwYncXm+mdfjQKMYoNSRN316Y298rHPDF/wNvXv/Ai5MfeIOq8OLkAS8WCy3NbxkfeeB50IOJnR7Udnqw96AnXx70oOugB1fk6Or05KjIiZoPPSgRY+637370ox/96Ifm/xz/BSpr7w8S56dDAAAAAElFTkSuQmCC" />
    </defs>
  </svg>
</template>

<script setup>
import getIconRotate from '../shared/getIconRotate'
defineOptions({
  name: 'IconPlus',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
