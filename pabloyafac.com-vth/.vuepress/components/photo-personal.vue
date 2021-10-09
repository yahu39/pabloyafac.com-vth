<template>
    <div class="circular--landscape">
      <img src="../public/pablo.png" />
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
  .circular--landscape {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #f16b2f;
  }

  .circular--landscape img {
    width: 140px;
    height: auto;
    margin-top: 15px;
    margin-right: 8px;
   /*  border: 1px solid red; */

  }
</style>