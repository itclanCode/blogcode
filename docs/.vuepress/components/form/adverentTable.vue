<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column align="center" type="selection" width="55">
      </el-table-column>
      <el-table-column align="center" label="时间" prop="date" width="120">
      </el-table-column>
      <el-table-column align="center" prop="price" label="价格(￥)" width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="dayprice"
        label="RMB/天"
        width="120"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="desc"
        label="描述"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
    <div class="totalAccount">
      <div>
        合计<span>{{ totalPrice }}(元)</span>
      </div>
      <div v-show="totalPrice > 0 ? true : false">
        <el-button @click="handlePayBtn" type="danger">立即支付</el-button>
      </div>
    </div>
    <el-collapse-transition>
      <div class="pay-code-box" v-show="payCodeStatus">
        <div>
          <img
            width="200"
            height="200"
            class="medium-zoom lazy zhifuPay"
            loading="lazy"
            src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/adverent/1607580148128-zhifubao-code.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            width="200"
            height="200"
            class="medium-zoom lazy weXinPay"
            loading="lazy"
            src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/adverent/1607580233782-wexinpay.jpg"
            alt=""
          />
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: "adverentTable",
  data() {
    return {
      tableData: [
        {
          date: "1个月",
          step: 1,
          price: "599",
          dayprice: "19.9",
          max: 12,
          showTimeTxt: null,
          desc: "文章右下角区域",
        },
        {
          date: "6个月(半年)",
          step: 6,
          max: 36,
          price: "2699",
          dayprice: "14.9",
          showTimeTxt: null,
          desc: "文章尾部区域",
        },
        {
          date: "1年",
          step: 12,
          max: 60,
          price: "3649",
          dayprice: "9.9",
          showTimeTxt: null,
          desc: "文章顶部区域",
        },
      ],
      multipleSelection: [],
      totalPrice: 0,
      showTime: null,
      payCodeStatus: false,
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      var sum = 0;
      var totalSum = this.totalPrice;
      this.multipleSelection = val;
      const prices = val.map((item) => {
        return item.price;
      });
      prices.forEach((price) => {
        sum += parseInt(price);
      });
      this.totalPrice = sum;
      if (this.totalPrice == 0) {
        this.payCodeStatus = false;
      }
    },

    handleChange(value) {
      console.log(value);
    },

    // 支付
    handlePayBtn() {
      this.payCodeStatus = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.totalAccount {
  padding: 20px 0 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-left: 20px;
    margin-right: 20px;
  }
}

.pay-code-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  > :nth-child(1) {
    margin-right: 20px;
  }
}

@media screen and (min-width: 960px) {
  .zhifuPay,
  .weXinPay {
    width: 200px;
    height: 200px;
  }
}

@media screen and (max-width: 768px) {
  .zhifuPay,
  .weXinPay {
    width: 100px;
    height: 100px;
  }
}
</style>