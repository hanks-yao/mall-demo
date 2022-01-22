<!--
 * @Description:
 * @Author: yuanyao7
 * @Date: 2022-01-22 22:37:47
 * @LastEditors: yuanyao7
 * @LastEditTime: 2022-01-22 23:24:19
-->
<template>
  <div class="box-container">
    <div class="box-head">{{title}}</div>
    <div class="box-body">
      <div class="goods-card-list">
        <div v-for="item in roundGoods" :key="item.img" class="goods-item">
          <div class="goods-img">
            <img :src="item.img" />
          </div>
          <div class="goods-desc">
            <div class="goods-price">¥ {{item.price}}</div>
            <div class="goods-store">{{item.store}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '发现好物',
      type: String
    },
    round: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      goods: [
        {
          img: "https://img.vvic.com/1639102593060_276068.jpg?x-os…cess=image/resize,w_300,h_300,limit_0/format,webp",
          price: "41",
          store: "依依服饰",
        },
        {
          img: "https://img.vvic.com/1639102757805_567691.jpg?x-os…cess=image/resize,w_300,h_300,limit_0/format,webp",
          price: "86",
          store: "依依服饰",
        },
        {
          img: "https://img.vvic.com/1637225340325_193609.jpg?x-os…cess=image/resize,w_300,h_300,limit_0/format,webp",
          price: "89",
          store: "依依服饰",
        },
        {
          img: "https://img.vvic.com/1640177932618_248086.jpg?x-os…cess=image/resize,w_300,h_300,limit_0/format,webp",
          price: "56",
          store: "依依服饰",
        },
        {
          img: "https://img.vvic.com/1641371286725_478577.jpg?x-os…cess=image/resize,w_300,h_300,limit_0/format,webp",
          price: "78",
          store: "依依服饰",
        },
        {
          img: "https://img.vvic.com/1635151807598_443230.jpg?x-os…cess=image/resize,w_300,h_300,limit_0/format,webp",
          price: "98",
          store: "依依服饰",
        }
      ],
    };
  },
  computed: {
    roundGoods() {
      if (this.round === 0) {
        return [...this.goods].slice(0, 3);
      }

      return [...this.goods].slice(3);
    },
  },
}
</script>

<style lang="scss" scoped>
.box-container {
  .box-head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    padding: 0 10px 0 20px;
    height: 34px;
    background-color: #f5f5f5;
    margin-bottom: 10px;
  }

  .box-body {}
}

.goods-card-list {
  .goods-item {}
}

.goods-item {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border: 1px #f5f5f5 solid;

  .goods-img {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .goods-desc {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding: 0 8px;

    .goods-price {
      width: 90px;
      color: #ef3664;
      font-size: 14px;
      font-weight: bold;
    }

    .goods-store {
      flex: 1;
      margin-left: 5px;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
