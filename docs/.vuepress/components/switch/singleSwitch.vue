<template>
  <div>
    <div class="switch-wrap">
      <input type="checkbox" id="checkbox" name="" />
      <label for="checkbox">
        <span></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleSwitch',
};
</script>

<style lang="scss" scoped>
.switch-wrap {
  width: 42px;
  height: 20px;
  margin: 10px auto;
}
input {
  display: none;
}
label {
  display: block;
  border: 1px solid #888;
  height: 20px;
  border-radius: 15px;
  transition: all 0.5s ease;
}

label span {
  display: block;
  width: 20px;
  height: 20px;
  box-shadow: 1px 1px 1px #ccc;
  border-radius: 50%;
  background: #fff;
  transition: all 0.5s ease;
  cursor: pointer;
}
input:checked + label {
  background: #42b983;
}
input:checked + label span {
  transform: translateX(20px);
  box-shadow: none;
}
</style>
