import { RecommendCate, RecommendItem } from '../models/RecommendCate';

let webSiteNavigationlist = []; // 网址导航
const JsonRequestType = {
    WebSiteList: "0",
}




function fillList()
{
    // 小说
    const cateNovel = new RecommendCate();
    cateNovel.title = "小说";
    cateNovel.items = [];

    const itemLuoxia = new RecommendItem();
    itemLuoxia.title = "落霞小说";
    itemLuoxia.icon = "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1872851299,809440240&fm=58&s=16F2ED369D31480346D4F9FC02004031&bpow=121&bpoh=75";
    itemLuoxia.intro = "热门影视剧小说实时更新，免费阅读";
    itemLuoxia.url = "http://www.luoxia.com/";
    cateNovel.items.push(itemLuoxia);

    const item69 = new RecommendItem();
    item69.title = "69书吧";
    item69.icon = "https://www.69shu.org/templates/style/logo.png";
    item69.intro = "超全书库，免费阅读";
    item69.url = "https://m.69shu.org/";
    cateNovel.items.push(item69);

    const itemwxm = new RecommendItem();
    itemwxm.title = "文学迷";
    itemwxm.icon = "https://www.wenxuemi6.com/images/logo.gif";
    itemwxm.intro = "值得收藏，免费阅读";
    itemwxm.url = "https://m.wenxuemi6.com/";
    cateNovel.items.push(itemwxm);

    const itemkxs = new RecommendItem();
    itemkxs.title = "快小说";
    itemkxs.icon = "https://e12356.sm.cn.kukuv.com/mobile/templates/html5/images/qd_logo.png";
    itemkxs.intro = "实时更新各大小说最新章节，免费阅读";
    itemkxs.url = "http://www.kukuv.com/mobile/";
    cateNovel.items.push(itemkxs);

    webSiteNavigationlist.push(cateNovel);

    // 漫画
    const cateCommic = new RecommendCate();
    cateCommic.title = "漫画";
    cateCommic.items = [];

    const itemmhg = new RecommendItem();
    itemmhg.title = "漫画柜";
    itemmhg.icon = "https://cf.hamreus.com/images/mhg.png";
    itemmhg.intro = "超全资源，免费阅读";
    itemmhg.url = "https://m.manhuagui.com/";
    cateCommic.items.push(itemmhg);

    const itemlmh = new RecommendItem();
    itemlmh.title = "来漫画";
    itemlmh.icon = "https://www.laimanhua.com/template/skin4_20110501/images/logo.png";
    itemlmh.intro = "超全的漫画网站，免费阅读";
    itemlmh.url = "https://m.laimanhua.com/";
    cateCommic.items.push(itemlmh);

    const itemdmk = new RecommendItem();
    itemdmk.title = "動漫狂";
    itemdmk.icon = "https://www.cartoonmad.com/image/logo.gif";
    itemdmk.intro = "高清无码，免费阅读";
    itemdmk.url = "https://www.cartoonmad.com/";
    cateCommic.items.push(itemdmk);

    const itemth = new RecommendItem();
    itemth.title = "土豪漫画";
    itemth.icon = "https://mh1.xitangwenhua.com/muban/mh/images/header-logo.png";
    itemth.intro = "热门漫画都在了，免费阅读";
    itemth.url = "https://m.tohomh123.com/";
    cateCommic.items.push(itemth);

    webSiteNavigationlist.push(cateCommic);

    // 影视
    const cateVideo = new RecommendCate();
    cateVideo.title = "影视";
    cateVideo.items = [];

    const item52 = new RecommendItem();
    item52.title = "52电影院";
    item52.icon = "http://ws3.sinaimg.cn/large/0068bqkggy1fzel75z9o0j30ek050dfw.jpg";
    item52.intro = "免VIP看全网影视剧，免费观看";
    item52.url = "https://www.52dyy.vip/";
    cateVideo.items.push(item52);

    const itemlmtv = new RecommendItem();
    itemlmtv.title = "乐猫tv";
    itemlmtv.icon = "http://www.lemaotv.net/template/mobile_new_tpl/img/logo_min.png";
    itemlmtv.intro = "干净的页面，就是更新慢了点，免费观看";
    itemlmtv.url = "http://www.lemaotv.net/";
    cateVideo.items.push(itemlmtv);

    const itemhdm = new RecommendItem();
    itemhdm.title = "嗨哆咪影视";
    itemhdm.icon = "https://ae01.alicdn.com/kf/HTB139AiSAPoK1RjSZKbq6x1IXXa6.jpg";
    itemhdm.intro = "免VIP在线看会员电影,电视剧,综艺,动漫的网站，免费观看";
    itemhdm.url = "https://m.haiduomi.com/";
    cateVideo.items.push(itemhdm);

    const item4k = new RecommendItem();
    item4k.title = "4K屋";
    item4k.icon = "http://www.kkkkmao.com/Public/style/mianbao/images/logo.png";
    item4k.intro = "强烈推荐，免费观看";
    item4k.url = "http://m.kkkkmao.com/";
    cateVideo.items.push(item4k);

    const itemqiqi = new RecommendItem();
    itemqiqi.title = "琪琪高清";
    itemqiqi.icon = "https://www.163kp.com/template/abcde/images/logo_min.png";
    itemqiqi.intro = "手机端专享，免费观看";
    itemqiqi.url = "https://www.163kp.com/";
    cateVideo.items.push(itemqiqi);

    const itemhaitu = new RecommendItem();
    itemhaitu.title = "海兔影院";
    itemhaitu.icon = "http://www.haitum.cn/template/default/static/img/logo_2.png";
    itemhaitu.intro = "源多，但是没用的播放源过滤一下啊喂，免费观看";
    itemhaitu.url = "http://www.haitum.cn/";
    cateVideo.items.push(itemhaitu);

    const itemmjw = new RecommendItem();
    itemmjw.title = "91美剧网";
    itemmjw.icon = "https://91mjw.com/images/logo.jpg";
    itemmjw.intro = "在线美剧天堂，免费观看";
    itemmjw.url = "https://91mjw.com/";
    cateVideo.items.push(itemmjw);

    webSiteNavigationlist.push(cateVideo);


    // 新鲜事
    const cateJoke = new RecommendCate();
    cateJoke.title = "新鲜事";
    cateJoke.items = [];

    const itembdj = new RecommendItem();
    itembdj.title = "百思不得姐";
    itembdj.icon = "http://wimg.spriteapp.cn/huodong/logo_new.png";
    itembdj.intro = "不得姐分享社区";
    itembdj.url = "http://m.budejie.com/";
    cateJoke.items.push(itembdj);

    const itemqsbk = new RecommendItem();
    itemqsbk.title = "糗事百科";
    itemqsbk.icon = "https://static.qiushibaike.com/images/web/v4/index_logo.png?v=2019-2-15-1945";
    itemqsbk.intro = "原创的糗事笑话分享社区";
    itemqsbk.url = "https://www.qiushibaike.com/";
    cateJoke.items.push(itemqsbk);

    const itemwb = new RecommendItem();
    itemwb.title = "微博";
    itemwb.icon = "https://img.t.sinajs.cn/t6/style/images/global_nav/WB_logo.png";
    itemwb.intro = "随时随地发现新鲜事";
    itemwb.url = "https://m.weibo.cn/?category=10011";
    cateJoke.items.push(itemwb);

    const itemjmxw = new RecommendItem();
    itemjmxw.title = "界面新闻";
    itemjmxw.icon = "https://res.jiemian.com/assets/wap/common/img/jm-new-logo.png";
    itemjmxw.intro = "只服务于独立思考的人群";
    itemjmxw.url = "https://m.jiemian.com/";
    cateJoke.items.push(itemjmxw);

    const itemct = new RecommendItem();
    itemct.title = "抽屉新热榜";
    itemct.icon = "https://cloud.chouti.com/images/logo.png";
    itemct.intro = "汇聚每日搞笑段子、热门图片、有趣新闻。";
    itemct.url = "https://m.chouti.com/";
    cateJoke.items.push(itemct);

    webSiteNavigationlist.push(cateJoke);

    // 论坛
    const cateForum = new RecommendCate();
    cateForum.title = "论坛";
    cateForum.items = [];

    const itemty = new RecommendItem();
    itemty.title = "天涯社区";
    itemty.icon = "https://static.tianyaui.com/global/m/v3/static/images/logo-home_424a391.png";
    itemty.intro = "全球华人网上家园";
    itemty.url = "http://focus.tianya.cn/";
    cateForum.items.push(itemty);

    const itemmp = new RecommendItem();
    itemmp.title = "猫扑";
    itemmp.icon = "http://www.mop.com/images/LOGO.jpg";
    itemmp.intro = "网络流行文化发源地";
    itemmp.url = "http://m.mop.com/index.html";
    cateForum.items.push(itemmp);

    const itemdb = new RecommendItem();
    itemdb.title = "豆瓣";
    itemdb.icon = "https://img3.doubanio.com/f/sns/0f9e2dbca60b52f595ddbc02073cb4bb879ed1c9/pics/nav/logo_db@2x.png";
    itemdb.intro = "提供图书、电影、音乐唱片的推荐、评论和价格比较，以及城市独特的文化生活。";
    itemdb.url = "https://m.douban.com/";
    cateForum.items.push(itemdb);

    webSiteNavigationlist.push(cateForum);

}

fillList();

export { webSiteNavigationlist, JsonRequestType }; 