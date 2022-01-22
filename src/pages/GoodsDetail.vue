<template>
  <div style="background:#fff;">
    <BaseHeader></BaseHeader>
    <Search></Search>
    <drawer></drawer>

    <!-- 店铺title -->
    <ShopHeader :detail="storeMsg"></ShopHeader>

    <!-- 面包屑导航，收藏店铺，联系客服 -->
    <div class="shop-item-path">
      <div class="shop-nav-container">
        <Breadcrumb>
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem v-for="(item, index) in categoryBar" :to="goGoodsList(index)" target="_blank" :key="index">
            {{ item.name }}
          </BreadcrumbItem>
        </Breadcrumb>
        <div class="store-collect">
          <span class="mr_10" v-if="goodsMsg.data">

            <router-link :to="'Merchant?id=' + goodsMsg.data.storeId">{{ storeMsg.storeName }}</router-link>
          </span>
          <span @click="collect">
            <Icon type="ios-heart" :color="storeCollected ? '#ed3f14' : '#666'" />
            {{storeCollected ? '已收藏店铺' : '收藏店铺'}}
          </span>
          <!--
               先看下udesk merchantEuid 是否有值
               有的话 链接udesk
               没有的话 显示云智服
           -->
          <span class="ml_10" v-if="storeMsg.merchantEuid" @click="IMService()">联系客服</span>

          <span v-else @click="connectCs(storeMsg.yzfSign)" class="ml_10">
            <Icon custom="icomoon icon-customer-service" />联系客服
          </span>
        </div>
      </div>
    </div>

    <article v-if="goodsMsg.data" class="goods-content">
      <main class="goods-main">
        <section class="goods-section">
          <!-- 商品信息展示 -->
          <ShowGoods v-if="goodsMsg.data" :detail="goodsMsg"></ShowGoods>
        </section>

        <!-- TODO -->
        <section class="goods-section"></section>

        <section class="goods-section detail-content">
          <div class="detail-content-left">
            <FxhhBox title="发现好物"></FxhhBox>
          </div>
          <div class="detail-content-right">
            <!-- 商品详细展示 -->
            <ShowGoodsDetail v-if="goodsMsg.data" :detail="goodsMsg"></ShowGoodsDetail>
          </div>

        </section>
      </main>
      <aside class="goods-aside">
        <div class="shop-card">
          <img :src="shopImg" />
        </div>
        <div class="others-card" style="margin-top: 20px">
          <FxhhBox :round="1" title="推荐商品"></FxhhBox>
        </div>
      </aside>
    </article>

    <Spin size="large" fix v-if="isLoading"></Spin>

    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import Search from "@/components/Search";
import ShopHeader from "@/components/header/ShopHeader";
import ShowGoods from "@/components/goodsDetail/ShowGoods";
import ShowGoodsDetail from "@/components/goodsDetail/ShowGoodsDetail";
import FxhhBox from "@/components/goodsDetail/FxhhBox";
import { goodsSkuDetail } from "@/api/goods";
import {
  cancelCollect,
  collectGoods,
  isCollection,
  getGoodsDistribution,
} from "@/api/member";
import { getDetailById } from "@/api/shopentry";
import { getIMDetail } from "@/api/common";
import shopInfoImg from "@/assets/images/mock/shop-info.png";
export default {
  name: "GoodsDetail",
  beforeRouteEnter(to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created() {
    this.getGoodsDetail();
    // this.getIMDetailMethods();
  },
  data() {
    return {
      shopImg: shopInfoImg,
      goodsMsg: {}, // 商品信息
      isLoading: false, // 加载状态
      categoryBar: [], // 分类
      storeCollected: false, // 商品收藏
      storeMsg: {}, // 店铺信息
      IMLink: "",
    };
  },
  methods: {
    // 跳转im客服
    IMService() {
      window.open(this.IM);
    },
    // 获取im信息
    async getIMDetailMethods() {
      let res = await getIMDetail();
      if (res.success) {
        this.IMLink = res.result;
      }
    },
    // 获取商品详情
    async getGoodsDetail() {
      this.isLoading = true;
      const params = this.$route.query;
      // 分销员id
      let distributionId =
        params && params.distributionId
          ? params.distributionId
          : this.Cookies.getItem("distributionId");
      // 如果有分销信息
      if (distributionId) {
        console.log(distributionId);
        // 先存储
        this.Cookies.setItem("distributionId", params.distributionId);
        let _this = this;
        // 绑定关系
        const res = await getGoodsDistribution(params.distributionId)
        // 绑定成功，则清除关系
        if (res.success) {
          _this.Cookies.removeItem("distributionId");
        }
      }

      const res = await goodsSkuDetail(params);
      this.isLoading = false;

      if (res.success) {
        const result = res.result;
        const cateName = result.categoryName;
        const cateId = result.data.categoryPath.split(",");
        const cateArr = [];
        cateId.forEach((e, index) => {
          // 插入分类id和name
          cateArr.push({
            id: e,
            name: cateName[index],
          });
        });
        this.categoryBar = cateArr;
        this.goodsMsg = res.result;
        // 判断是否收藏
        if (this.Cookies.getItem("userInfo")) {
          isCollection("STORE", this.goodsMsg.data.storeId).then((res) => {
            if (res.success && res.result) {
              this.storeCollected = true;
            }
          });
        }
        // 获取店铺信息
        this.getStoreDetail(this.goodsMsg.data.storeId);
      } else {
        this.$Message.error(res.message);
        this.$router.push("/");
      }
    },
    // 获取店铺信息
    async getStoreDetail(id) {
      const res = await getDetailById(id);
      if (res.success) {
        this.storeMsg = res.result;
      }
    },
    goGoodsList(currIndex) {
      // 跳转商品列表
      const arr = [];
      this.categoryBar.forEach((e, index) => {
        if (index <= currIndex) {
          arr.push(e.id);
        }
      });
      return "/goodsList?categoryId=" + arr.toString();
    },
    async collect() {
      // 收藏店铺
      if (this.storeCollected) {
        let cancel = await cancelCollect("STORE", this.goodsMsg.data.storeId);
        if (cancel.success) {
          this.$Message.success("已取消收藏");
          this.storeCollected = false;
        }
      } else {
        let collect = await collectGoods("STORE", this.goodsMsg.data.storeId);
        if (collect.code === 200) {
          this.storeCollected = true;
          this.$Message.success("收藏店铺成功,可以前往个人中心我的收藏查看");
        }
      }
    },
  },
  watch: {
    "$route.query.skuId": function (val) {
      location.reload();
    },
  },
  computed: {
    IM() {
      return this.IMLink + this.storeMsg.merchantEuid;
    },
  },
  components: {
    Search,
    ShopHeader,
    ShowGoods,
    ShowGoodsDetail,
    FxhhBox,
  },
};
</script>
<style scoped lang="scss">
.shop-item-path {
  height: 38px;
  @include background_color($light_background_color);
  line-height: 38px;
  color: #2c2c2c;
}

.shop-nav-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;

  .store-collect {
    position: absolute;
    right: 20px;
    top: 0;
    color: #999;

    span {
      &:hover {
        cursor: pointer;
        color: $theme_color;
      }
    }
  }
}

.goods-content {
  display: block;
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;

  .goods-main {
    float: left;
    display: block;
    width: 980px;
    // margin-right: 20px;

    .goods-section {
      clear: both;
      // position: relative;
    }
  }

  .goods-aside {
    padding: 30px 0;
    float: right;
    display: block;
    width: 200px;
  }
}

.detail-content {
  .detail-content-left {
    float: left;
    width: 200px;
  }

  .detail-content-right {
    float: right;
    width: 750px;
  }

}

.shop-card {
  width: 100%;
  border: 1px solid #f54874 !important;

  img {
    width: 100%;
  }
}
</style>
