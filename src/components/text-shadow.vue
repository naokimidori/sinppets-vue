<template>
  <div class="wrapper">
    <h1>
      shadow
      <br />
      text
      <br />
      effect
    </h1>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

  .wrapper {
    height: 100vh;
    background: linear-gradient(45deg, #bfbfbf, #e6e6e6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: "Luckiest Guy", cursive;
    font-size: 20vmin;
    line-height: 1;
    margin: 0;
    letter-spacing: 5px;
    color: #e6e6e6;
    text-align: center;
    text-shadow: 1px -1px #fff, -1px 1px #999, -10px 10px 5px #80808080;
    user-select: none;
  }
</style>
