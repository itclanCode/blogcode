<template>
  <div>
    <div class="switch-wrap">
      <input id="checkboxword" type="checkbox" />
      <label for="checkboxword">
        <span class="move">
          <span>
            <em>开</em>
            <em>关</em>
          </span>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singSwitchWord',
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

label .move {
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  box-shadow: 1px 1px 1px #ccc;
  border-radius: 50%;
  background: #fff;
  transition: 0.3s;
  overflow: hidden;
  cursor: pointer;
}

input:checked + label {
  background: #42b983;
  cursor: pointer;
}

input:checked + label .move {
  transform: translateX(20px);
  box-shadow: none;
  cursor: pointer;
}

.move span {
  width: 40px;
  display: block;
  height: 20px;
  line-height: 20px;
  transition: 0.3s;
  cursor: pointer;
}
input:checked + label .move span {
  transform: translateX(-20px);
}
em {
  text-align: center;
  width: 50%;
  font-size: 12px;
  font-style: normal;
  float: left;
}
</style>
