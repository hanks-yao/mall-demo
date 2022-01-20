import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
const Login = () => import('@/pages/Login');
const SignUp = () => import('@/pages/SignUp');
const ForgetPassword = () => import('@/pages/ForgetPassword');
const GoodsList = () => import('@/pages/GoodsList');
const GoodsDetail = () => import('@/pages/GoodsDetail');
const PointGoodsDetail = () => import('@/pages/promotion/PointGoodsDetail');
const ShoppingCart = () => import('@/pages/ShoppingCart');
const Cart = () => import('@/pages/Cart');
const Pay = () => import('@/pages/payment/Pay');
const PayDone = () => import('@/pages/payment/PayDone');
const PayMent = () => import('@/pages/payment/PayMent');
const ThirdPay = () => import('@/pages/payment/ThirdPay');
const Coupon = () => import('@/pages/CouponCenter');
const seckill = () => import('@/pages/promotion/seckill');
const article = () => import('@/pages/article/index');
const PointMall = () => import('@/pages/promotion/PointMall');

/*
 * 会员中心
 * 订单列表
 */
const MyOrder = () => import(`@/pages/home/orderCenter/MyOrder`);
const OrderDetail = () => import(`@/pages/home/orderCenter/OrderDetail`);
const MyAddress = () => import('@/pages/home/orderCenter/MyAddress');
const AddAddress = () => import('@/pages/home/orderCenter/AddAddress');
const Complain = () => import('@/pages/home/orderCenter/Complain');
const AfterSale = () => import('@/pages/home/orderCenter/AfterSale');
const AfterSaleDetail = () => import('@/pages/home/orderCenter/AfterSaleDetail');
const ApplyAfterSale = () => import('@/pages/home/orderCenter/ApplyAfterSale');

/*
 * 会员中心
 */
const Profile = () => import('@/pages/home/memberCenter/Profile');
const AccountSafe = () => import('@/pages/home/memberCenter/AccountSafe');
const ModifyPwd = () => import('@/pages/home/memberCenter/ModifyPwd');
const Favorites = () => import('@/pages/home/memberCenter/Favorites');
const Distribution = () => import('@/pages/home/memberCenter/Distribution');
const CommentList = () => import('@/pages/home/memberCenter/CommentList'); // 评价列表
const AddEval = () => import('@/pages/home/memberCenter/evaluation/AddEval'); // 添加评价
const EvalDetail = () => import('@/pages/home/memberCenter/evaluation/EvalDetail');
const ComplainList = () => import('@/pages/home/memberCenter/ComplainList');
const ComplainDetail = () => import('@/pages/home/memberCenter/ComplainDetail');
const Point = () => import('@/pages/home/memberCenter/Point');
const MsgList = () => import('@/pages/home/memberCenter/memberMsg/MsgList');
const MsgDetail = () => import('@/pages/home/memberCenter/memberMsg/MsgDetail');

/*
 * 会员中心
 * 账户中心
 * */
const Coupons = () => import('@/pages/home/userCenter/Coupons');
const MyTracks = () => import('@/pages/home/userCenter/MyTracks');
const MoneyManagement = () => import('@/pages/home/userCenter/MoneyManagement');

const Home = () => import('@/pages/user/Home');

const Merchant = () => import('@/pages/Merchant');
const UserMain = () => import('@/pages/home/Main');

/**
 * 店铺入驻
 */
const ShopEntry = () => import('@/pages/shopEntry/ShopEntry');

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/', // 首页
    name: 'Index',
    component: Index
  },
  {
    path: '/login', // 登陆
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/SignUp', // 注册
    name: 'SignUp',
    component: SignUp,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/forgetPassword', // 忘记密码
    name: 'forgetPassword',
    component: ForgetPassword,
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/goodsList', // 商品列表
    name: 'GoodsList',
    component: GoodsList
  },
  {
    path: '/goodsDetail', // 商品详情
    name: 'GoodsDetail',
    component: GoodsDetail,
    meta: {title: '商品详情'}
  },
  {
    path: '/pointGoodsDetail', // 商品详情
    name: 'PointGoodsDetail',
    component: PointGoodsDetail,
    meta: {title: '积分商品'}
  },
  {
    path: '/shoppingCart', // 头部购物车
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/cart', // 购物车
    name: 'Cart',
    component: Cart,
    meta: {title: '购物车'}
  },
  {
    path: '/pay', // 支付页面
    name: 'Pay',
    component: Pay,
    meta: {title: '订单结算'}
  },
  {
    path: '/payMent',
    name: 'PayMent',
    component: PayMent
  },
  {
    path: '/PointMall',
    name: 'PointMall',
    component: PointMall,
    meta: {title: '积分商城'}
  },
  {
    path: '/qrpay', // 三方支付
    name: 'qrpay',
    component: ThirdPay
  },
  {
    path: '/payDone', // 支付成功页面
    name: 'PayDone',
    component: PayDone
  },
  {
    path: '/article', // 文章页面
    name: 'article',
    component: article,
    meta: {
      title: '帮助中心'
    }
  },
  {
    path: '/shopEntry',
    name: 'shopEntry',
    component: ShopEntry,
    meta: {
      title: '店铺入驻'
    }
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: Coupon,
    meta: {
      title: '领券中心'
    }
  },
  {
    path: '/seckill',
    name: 'seckill',
    component: seckill,
    meta: {
      title: '限时秒杀'
    }
  },
  {
    path: '/home', // 主页
    component: Home,
    children: [{
      path: '/',
      name: 'Home',
      component: UserMain,
      meta: {
        title: '会员中心'
      }
    },
    {
      path: 'MyTracks',
      name: 'MyTracks',
      component: MyTracks,
      meta: {title: '我的足迹'}
    },
    {
      path: 'MoneyManagement',
      name: 'MoneyManagement',
      component: MoneyManagement
    },
    {
      path: 'Complain',
      name: 'Complain',
      component: Complain
    },
    {
      path: 'Coupons',
      name: 'Coupons',
      component: Coupons
    },
    {
      path: 'CommentList',
      name: 'CommentList',
      component: CommentList,
      mate: {title: '评价列表'}
    },
    {
      path: 'AddEval',
      name: 'AddEval',
      component: AddEval,
      mate: {title: '添加评价'}
    },
    {
      path: 'EvalDetail',
      name: 'EvalDetail',
      component: EvalDetail,
      mate: {title: '评价详情'}
    },
    {
      path: 'ComplainList',
      name: 'ComplainList',
      component: ComplainList
    },
    {
      path: 'ComplainDetail',
      name: 'ComplainDetail',
      component: ComplainDetail
    },
    {
      path: 'AccountSafe',
      name: 'AccountSafe',
      component: AccountSafe
    },
    {
      path: 'ModifyPwd',
      name: 'ModifyPwd',
      component: ModifyPwd
    },
    {
      path: 'Favorites',
      name: 'Favorites',
      component: Favorites,
      meta: {title: '我的收藏'}
    },
    {
      path: 'Distribution',
      name: 'Distribution',
      component: Distribution,
      meta: {title: '分销推荐'}
    },
    {
      path: 'Point',
      name: 'Point',
      component: Point,
      meta: {title: '我的积分'}
    },
    {
      path: 'Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: 'AfterSale',
      name: 'AfterSale',
      component: AfterSale,
      meta: {title: '售后'}
    },
    {
      path: 'ApplyAfterSale',
      name: 'ApplyAfterSale',
      component: ApplyAfterSale,
      meta: {title: '申请售后'}
    },
    {
      path: '/home/MyAddress',
      name: 'MyAddress',
      component: MyAddress,
      meta: {title: '收货地址'}
    },
    {
      path: 'AddAddress',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: 'MsgList',
      name: 'MsgList',
      component: MsgList,
      meta: {title: '我的消息'}
    },
    {
      path: 'MsgDetail',
      name: 'MsgDetail',
      component: MsgDetail,
      meta: {title: '我的消息'}
    },
    {
      path: 'MyOrder',
      name: 'MyOrder',
      component: MyOrder,
      meta: {title: '我的订单'}
    },
    {
      path: 'OrderDetail',
      name: 'OrderDetail',
      component: OrderDetail,
      meta: {title: '订单详情'}
    },
    {
      path: 'AfterSaleDetail',
      name: 'AfterSaleDetail',
      component: AfterSaleDetail,
      meta: {title: '售后详情'}
    }
    ]
  },
  {
    path: '/merchant',
    name: 'Merchant',
    component: Merchant,
    meta: {title: '店铺'}
  }
  ]
});
