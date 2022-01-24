<template>
  <div class="wrapper">
    <div class="item-detail-show">
      <!-- 详情左侧展示数据、图片，收藏、举报 -->
      <div class="item-detail-left">
        <!-- 大图、放大镜 -->
        <div class="item-detail-big-img">
          <pic-zoom :url="imgList[imgIndex].url" :scale="2"></pic-zoom>
        </div>
        <div v-if="skuDetail.goodsType !== 'VIRTUAL_GOODS'" style="margin-top:10px;rgb(153, 149, 149);">实物商品</div>
        <div v-else-if="skuDetail.goodsType == 'VIRTUAL_GOODS'" style="margin-top:10px;rgb(153, 149, 149);">虚拟商品</div>
        <div class="item-detail-img-row">
          <div
            class="item-detail-img-small"
            @mouseover="imgIndex = index"
            v-for="(item, index) in imgList"
            :key="index"
          >
            <img :src="item.url" />
          </div>
        </div>

        <div class="goodsConfig mt_10">
          <span @click="collect"
            ><Icon type="ios-heart" :color="isCollected ? '#ed3f14' : '#666'" />{{
              isCollected ? "已收藏" : "收藏"
            }}</span
          >
        </div>
      </div>

      <!-- 右侧商品信息、活动信息、操作展示 -->
      <div class="item-detail-right">
        <div class="item-detail-title">
          <div class="item-detail-title-left">
            {{ skuDetail.goodsName }}
          </div>

          <div class="item-detail-title-right">淘宝链接</div>
        </div>
       <!--  <div class="sell-point">
          {{ skuDetail.sellingPoint }}
        </div> -->

        <!-- 限时秒杀 -->
        <Promotion
          v-if="promotionMap['SECKILL']"
          :time="promotionMap['SECKILL'].endTime"
        ></Promotion>

        <div class="item-detail-banner">
          <img src="https://src.vvic.com/statics/v2/css/img/detail-active-banner-slzz.png" />
        </div>
        <!-- 商品详细 价格、优惠券、促销 -->
        <div class="item-detail-price-row">
          <div class="item-price-left">

            <!-- 秒杀价格 -->
            <div class="item-price-row" v-if="skuDetail.promotionPrice && promotionMap['SECKILL']">
              <p>
                <span class="item-price-title" v-if="promotionMap['SECKILL']"
                  >秒 &nbsp;杀&nbsp;价</span
                >
                <span class="item-price">{{
                  skuDetail.promotionPrice | unitPrice("￥")
                }}</span>
                <span class="item-price-old">{{
                  skuDetail.price | unitPrice("￥")
                }}</span>
              </p>
            </div>
            <!-- 商品原价 -->
            <div class="item-price-row" v-else>
              <p>
                <span class="item-price-title">批发价</span>
                <span class="item-price">{{ skuDetail.price | unitPrice("￥") }}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">淘宝价</span>
                <span class="item-price-sub">{{ skuDetail.price | unitPrice("￥") }}</span>
              </p>
            </div>
            <!-- 优惠券展示 -->
            <!-- <div class="item-price-row" v-if="promotionMap['COUPON'].length">
              <p>
                <span class="item-price-title">优 惠 券</span>
                <span
                  class="item-coupon"
                  v-for="(item, index) in promotionMap['COUPON']"
                  :key="index"
                  @click="receiveCoupon(item.id)"
                >
                  <span v-if="item.couponType == 'PRICE'"
                    >满{{ item.consumeThreshold }}减{{ item.price }}</span
                  >
                  <span v-if="item.couponType == 'DISCOUNT'"
                    >满{{ item.consumeThreshold }}打{{ item.couponDiscount }}折</span
                  >
                </span>
              </p>
            </div> -->
            <!-- 满减展示 -->
            <div class="item-price-row" v-if="promotionMap['FULL_DISCOUNT']">
              <p>
                <span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <span class="item-promotion">满减</span>
                <span
                  class="item-desc-pintuan"
                  v-if="promotionMap['FULL_DISCOUNT'].fullMinus"
                  >满{{ promotionMap["FULL_DISCOUNT"].fullMoney }}元，立减现金{{
                    promotionMap["FULL_DISCOUNT"].fullMinus
                  }}元</span
                >
                <span
                  class="item-desc-pintuan"
                  v-if="promotionMap['FULL_DISCOUNT'].fullRate"
                  >满{{ promotionMap["FULL_DISCOUNT"].fullMoney }}元，立享{{
                    promotionMap["FULL_DISCOUNT"].fullRate
                  }}折</span
                >
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计评价</p>
              <p>
                <span class="item-remarks-num">{{ skuDetail.commentNum || 0 }} 条</span>
              </p>
            </div>
          </div>
        </div>

        <div class="detail-info-line">
          <dl>
            <dt>货号</dt>
            <dd>9836#</dd>
          </dl>
          <dl>
            <dt>上新时间</dt>
            <dd>2021-11-02 00:13:06</dd>
          </dl>

          <div class="samestyle-box">
            <Button shape="circle" icon="ios-search" size="small">搜同款</Button>
          </div>
        </div>

        <div class="detail-info-line">
          <ul class="detail-amount">
            <li>销量：15</li>
            <li>上款量：64</li>
            <li>收藏量：23</li>
          </ul>
        </div>

        <!-- 选择颜色 -->
        <div class="detail-info-line item-select" v-for="(sku, index) in formatList" :key="sku.name">
          <div class="item-select-title">
            {{ sku.name }}
          </div>
          <div class="item-select-column">
            <div class="item-select-row" v-for="item in sku.values" :key="item.value">
              <div
                class="item-select-box"
                @click="select(index, item.value)"
                :class="{
                  'item-select-box-active': item.value === currentSelceted[index],
                }"
              >
                <div class="item-select-intro">
                  <p>{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-info-row item-select">
          <div class="item-select-title">尺码</div>
          <div class="item-select-column">
            <div class="size-select">
              <div class="size-select-label">XS</div>
              <div class="size-select-label2">150</div>
              <div class="size-select-input">
                <InputNumber
                  :value="0"
                  controls-outside
                ></InputNumber>
              </div>
            </div>
            <div class="size-select">
              <div class="size-select-label">S</div>
              <div class="size-select-label2">155</div>
              <div class="size-select-input">
                <InputNumber
                  :value="0"
                  controls-outside
                ></InputNumber>
              </div>
            </div>
            <div class="size-select">
              <div class="size-select-label">M</div>
              <div class="size-select-label2">160</div>
              <div class="size-select-input">
                <InputNumber
                  :value="0"
                  controls-outside
                ></InputNumber>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-info-row item-select">
          <div class="item-select-title">上款</div>
          <div class="item-select-column item-select-btn">
            <Button type="primary" ghost>一键上传</Button>
            <Button type="primary" ghost>数据包</Button>
            <Button type="primary" ghost>图片下载</Button>
          </div>
        </div>

        <div class="detail-info-row item-select">
          <div class="item-select-title">进货</div>
          <div class="item-select-column item-select-btn">
            <Button type="primary">加入进货车</Button>
          </div>
        </div>

        <div class="detail-info-row item-select">
          <div class="item-select-title">发货</div>
          <div class="item-select-column">
            代发
          </div>
        </div>

        <div class="detail-info-row item-select">
          <div class="item-select-title">服务</div>
          <div class="item-select-column service-icon">
            <div class="service-icon-item sp">
              <i></i>
              <span>实拍</span>
            </div>
            <div class="service-icon-item tx">
              <i></i>
              <span>退现</span>
            </div>
            <div class="service-icon-item fahuo">
              <i></i>
              <span>48小时内发货</span>
            </div>
          </div>
        </div>

        <!-- <div class="add-buy-car-box">
          <div class="item-select">
            <div class="item-select-title">
              <p>数量</p>
            </div>
            <div class="item-select-row">
              <InputNumber
                :min="1"
                :max="skuDetail.quantity"
                :disabled="skuDetail.quantity === 0"
                v-model="count"
                :precision="0.1"
              ></InputNumber>
              <span class="inventory"> 库存{{ skuDetail.quantity }}</span>
            </div>
          </div>
          <div
            class="item-select"
            v-if="skuDetail.goodsType !== 'VIRTUAL_GOODS' && skuDetail.weight !== 0"
          >
            <div class="item-select-title">
              <p>重量</p>
            </div>
            <div class="item-select-row">
              <span class="inventory"> {{ skuDetail.weight }}kg</span>
            </div>
          </div>
          <div
            class="add-buy-car"
            v-if="$route.query.way === 'POINT' && skuDetail.authFlag === 'PASS'"
          >
            <Button
              type="error"
              :loading="loading"
              :disabled="skuDetail.quantity === 0"
              @click="pointPay"
              >积分购买</Button
            >
          </div>
          <div
            class="add-buy-car"
            v-if="$route.query.way !== 'POINT' && skuDetail.authFlag === 'PASS'"
          >
            <Button
              type="error"
              v-if="skuDetail.goodsType !== 'VIRTUAL_GOODS'"
              :loading="loading"
              :disabled="skuDetail.quantity === 0"
              @click="addShoppingCartBtn"
              >加入购物车</Button
            >
            <Button
              type="warning"
              :loading="loading1"
              :disabled="skuDetail.quantity === 0"
              @click="buyNow"
              >立即购买</Button
            >
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Promotion from "./Promotion.vue";
import PicZoom from "vue-piczoom"; // 图片放大
import {
  collectGoods,
  isCollection,
  receiveCoupon,
  cancelCollect,
} from "@/api/member.js";
import { addCartGoods } from "@/api/cart.js";
export default {
  name: "ShowGoods",
  props: {
    // 商品数据
    detail: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      count: 1, // 商品数量
      imgIndex: 0, // 展示图片下标
      currentSelceted: [], // 当前商品sku
      imgList: [{ url: "" }], // 商品图片列表
      skuDetail: this.detail.data, // sku详情
      goodsSpecList: this.detail.specs, // 商品spec
      promotionMap: {
        // 活动状态
        SECKILL: null,
        FULL_DISCOUNT: null,
        COUPON: [],
      }, // 促销活动
      formatList: [], // 选择商品品类的数组
      loading: false, // 立即购买loading
      loading1: false, // 加入购物车loading
      isCollected: false, // 是否收藏
    };
  },
  components: { PicZoom, Promotion },
  methods: {
    select(index, value) {
      // 选择规格
      this.$set(this.currentSelceted, index, value);
      let selectedSkuId = this.goodsSpecList.find((i) => {
        let matched = true;
        let specValues = i.specValues.filter((j) => j.specName !== "images");
        for (let n = 0; n < specValues.length; n++) {
          if (specValues[n].specValue !== this.currentSelceted[n]) {
            matched = false;
            return;
          }
        }
        if (matched) {
          return i;
        }
      });
      this.$router.push({
        path: "/goodsDetail",
        query: { skuId: selectedSkuId.skuId, goodsId: this.skuDetail.goodsId },
      });
    },

    addShoppingCartBtn() {
      // 添加购物车
      const params = {
        num: this.count,
        skuId: this.skuDetail.id,
      };
      this.loading = true;
      addCartGoods(params)
        .then((res) => {
          this.loading = false;
          if (res.success) {
            this.$router.push({
              path: "/shoppingCart",
              query: { detail: this.skuDetail, count: this.count },
            });
          } else {
            this.$Message.warning(res.message);
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    buyNow() {
      // 立即购买
      const params = {
        num: this.count,
        skuId: this.skuDetail.id,
        cartType: "BUY_NOW",
      };
      // 虚拟商品购买
      if (this.skuDetail.goodsType === "VIRTUAL_GOODS") {
        params.cartType = "VIRTUAL";
      }
      this.loading1 = true;
      addCartGoods(params)
        .then((res) => {
          this.loading1 = false;
          if (res.success) {
            this.$router.push({ path: "/pay", query: { way: params.cartType } });
          } else {
            this.$Message.warning(res.message);
          }
        })
        .catch(() => {
          this.loading1 = false;
        });
    },
    async collect() {
      // 收藏商品
      if (this.isCollected) {
        let cancel = await cancelCollect("GOODS", this.skuDetail.id);
        if (cancel.success) {
          this.$Message.success("取消收藏成功");
          this.isCollected = false;
        }
      } else {
        let collect = await collectGoods("GOODS", this.skuDetail.id);
        if (collect.code === 200) {
          this.isCollected = true;
          this.$Message.success("收藏商品成功,可以前往个人中心我的收藏查看");
        }
      }
    },
    // 格式化数据
    formatSku(list) {
      let arr = [{}];
      list.forEach((item, index) => {
        item.specValues.forEach((spec, specIndex) => {
          let name = spec.specName;
          let values = {
            value: spec.specValue,
            quantity: item.quantity,
          };
          if (name === "images") {
            return;
          }

          arr.forEach((arrItem, arrIndex) => {
            if (
              arrItem.name === name &&
              arrItem.values &&
              !arrItem.values.find((i) => i.value === values.value)
            ) {
              arrItem.values.push(values);
            }

            let keys = arr.map((key) => {
              return key.name;
            });
            if (!keys.includes(name)) {
              arr.push({
                name: name,
                values: [values],
              });
            }
          });
        });
      });
      arr.shift();
      this.formatList = arr;

      let cur = list.filter((i) => i.skuId === this.$route.query.skuId)[0];
      if (cur) {
        cur.specValues
          .filter((i) => i.specName !== "images")
          .forEach((value, _index) => {
            this.currentSelceted[_index] = value.specValue;
          });
      }
      this.skuList = list;
    },
    receiveCoupon(id) {
      // 领取优惠券
      receiveCoupon(id).then((res) => {
        if (res.success) {
          this.$Message.success("优惠券领取成功");
        } else {
          this.$Message.warning(res.message);
        }
      });
    },
    promotion() {
      // 格式化促销活动，返回当前促销的对象
      if (!this.detail.promotionMap) return false;
      let keysArr = Object.keys(this.detail.promotionMap);
      if (keysArr.length === 0) return false;

      for (let i = 0; i < keysArr.length; i++) {
        let key = keysArr[i].split("-")[0];
        if (key === "COUPON") {
          this.promotionMap[key].push(this.detail.promotionMap[keysArr[i]]);
        } else {
          this.promotionMap[key] = this.detail.promotionMap[keysArr[i]];
        }
      }
    },
  },
  mounted() {
    // 用户登录才会判断是否收藏
    if (this.Cookies.getItem("userInfo")) {
      isCollection("GOODS", this.skuDetail.id).then((res) => {
        if (res.success && res.result) {
          this.isCollected = true;
        }
      });
    }
    this.detail.data.specList.forEach((e) => {
      if (e.specName === "images") {
        this.imgList = e.specImage;
      }
    });
    this.formatSku(this.goodsSpecList);
    this.promotion();
    document.title = this.skuDetail.goodsName;
  },
};
</script>

<style scoped lang="scss">
/******************商品图片及购买详情开始******************/
.item-detail-see {
  width: 175px;
  margin-left: 30px;
}
.inventory {
  padding-left: 4px;
}

.global_color {
  text-align: center;
}

.see-Img {
  width: 100%;
  height: 175px;
}

.see-Item {
  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.Report {
  color: $theme_color !important;
}

.wrapper {
  @include white_background_color();
}
.item-sale-flex {
  width: 29%;
  padding: 0 3%;
}
.item-sale {
  margin: 10px 0;
  > h3 {
    width: 13%;
    text-align: center;
    font-size: 20px;
    line-height: 60px;
    box-sizing: border-box;
    border-right: 1px solid $border_color;
  }
  height: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  // width: 1200px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid $border_color;
  background: #f7f7f7;
}

.item-detail-show {
  // width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: row;
}

.item-detail-left {
  width: 350px;
  margin-right: 30px;
}

.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px $border_color;
  cursor: pointer;
}

.item-detail-big-img img {
  width: 100%;
}

.item-detail-img-row {
  margin-top: 15px;
  display: flex;
}

.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  margin-left: 5px;
}

.item-detail-img-small img {
  height: 100%;
  width: 100%;
}

/*商品选购详情*/
.item-detail-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-detail-title {
  display: flex;
  align-items: center;

  .item-detail-title-left {
    flex: 1 1 auto;
    // @include content_color($light_content_color);
    color: #333;
    font-size: 18px;
    font-weight: 400;
    padding: 8px 0;
  }

  .item-detail-title-right {
    flex: 0 0 auto;
    margin-left: 20px;
    width: 24px;
    line-height: 14px;
    cursor: pointer;
  }


}

.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: $theme_color;
  color: #fff;
}

/*商品标签*/
.item-detail-tag {
  padding: 8px 0;
  font-size: 12px;
  color: $theme_color;
}

.item-detail-banner {
  position: relative;
  width: 100%;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
}

/*价格详情等*/
.item-detail-price-row {
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbf1f0;
  // background: url("../../assets/images/goodsDetail/price-bg.png");
}

.item-price-left {
  display: flex;
  flex-direction: column;
}

.item-price-title {
  color: #6c6c6c;
  font-size: 14px;
  margin-right: 20px;
}

.item-price-row {
  margin: 5px 0px;
}

.item-price {
  // color: $theme_color;
  // font-size: 20px;
  color: #ff4640;
  font-size: 28px;
  font-weight: bold;
  // cursor: pointer;
}
.item-price-sub {
  color: #999;
  font-size: 14px;
}
.item-price-old {
  color: gray;
  text-decoration: line-through;
  font-size: 14px;
  margin-left: 5px;
}

.item-coupon {
  margin-right: 5px;
  padding: 3px;
  color: $theme_color;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted $theme_color;
  cursor: pointer;
}
.item-promotion {
  margin-right: 5px;
  padding: 3px;
  color: $theme_color;
  font-size: 12px;
  border: 1px solid $theme_color;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid $border_color;
}

.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}

.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}

.item-select {
  display: flex;
  flex-direction: row;
}

.item-select-title {
  @include content_color($light_content_color);
  font-size: 12px;
  color: #6c6c6c;
  margin-right: 15px;
  width: 60px;
  display: flex;
  align-items: center;
}

.item-select-column {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

.item-select-row {
  // margin-bottom: 8px;
}

.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-select-box {
  padding: 5px;
  margin-right: 8px;
  @include background_color($light_background_color);
  border: 0.5px solid $border_color;
  cursor: pointer;
  @include content_color($light_content_color);
}

.item-select-box:hover {
  border: 0.5px solid $theme_color;
}

.item-select-box-active {
  border: 0.5px solid $theme_color;
}

.item-select-intro p {
  margin: 0px;
  padding: 5px;
}

.add-buy-car-box {
}

.add-buy-car {
  margin-top: 15px;
  > * {
    margin: 0 4px;
  }
}

.goodsConfig {
  display: flex;
  justify-content: space-between;
  > span {
    padding-right: 10px;
    &:hover {
      cursor: pointer;
      color: $theme_color;
    }
  }
}
.sell-point {
  font-size: 12px;
  color: red;
  margin-bottom: 5px;
}
/******************商品图片及购买详情结束******************/

// new
.detail-info-line {
  padding: 10px 0 10px 20px;
  position: relative;
  border-bottom: 1px #e5e5e5 dotted;

  /deep/ {
    dl {
      display: flex;
      align-items: center;
      height: 30px;
      line-height: 30px;

      dt {
        flex: 0 0 auto;
        width: 68px;

      }

      dd {
        flex: 1 1 auto;
        position: relative;
      }
    }
  }
}

.detail-info-row {
  padding: 10px 0 10px 20px;
  clear: both;
  position: relative;
}

.samestyle-box{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.detail-amount {
  display: flex;
  align-items: center;

  /deep/ {
    li {
      display: inline-flex;
      align-items: center;
      height: 58px;
      margin-right: 80px;
      color: #333;
      box-sizing: border-box;
    }
  }
}

.item-select-btn {
  .ivu-btn {
    width: 120px;
    height: 38px;
    border-radius: 0;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.size-select {
  display: flex;
  width: 100%;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  .size-select-label {
    width: 100px;
    padding-right: 10px;
    font-weight: 700;
  }
  .size-select-label2 {
    flex: 1;
    width: 100px;
    font-family: ArialMT;
    color: #6c6c6c;
  }
  .size-select-input {
    flex: 0 0 auto;

    .ivu-input-number {
      width: 120px;
    }

    /deep/ {

      .ivu-input-number-input {
        text-align: center;
      }
    }
  }
}

.service-icon {
  .service-icon-item {
    display: inline-flex;
    align-items: center;
    // width: 60px;
    margin-right: 15px;
    color: #6c6c6c;
    position: relative;

    i {
      width: 15px;
      height: 15px;
      margin: 0 5px 0 0;
    }

    &.sp i {
      background-image: url('https://src.vvic.com/statics/v2/css/img/sp_icon3.png');
      background-position: -207px -218px;
    }

    &.tx i {
      background-image: url('https://src.vvic.com/statics/v2/css/img/sp_icon3.png');
      background-position: -252px 0;
    }

    &.fahuo i {
      background-image: url('https://src.vvic.com/statics/v2/css/img/sp_icon3.png');
      background-position: -167px -218px;

    }
  }
}
</style>
