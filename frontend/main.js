'use strict';

const callApi = (url) => {
  fetch(url)
    .then(async (res) => ({
      status: res.status,
      json: await res.json(),
    }))
    .then(console.log);
};

callApi('https://www.jma.go.jp/bosai/forecast/data/overview_week/130000.json');
/**
{status: 200, json: {…}}
json:
headTitle: "関東甲信地方週間天気予報"
publishingOffice: "気象庁"
reportDatetime: "2021-03-08T10:35:00+09:00"
text: "予報期間　３月９日から３月１５日まで↵　向こう一週間は、期間のはじめと終わりに晴れる日もありますが、期間の中頃は気圧の谷や湿った空気の影響で雲が広がりやすく、雨の降る日があるでしょう。↵　最高気温は、平年より高い日が多く、期間のはじめと終わりは平年よりかなり高い日もある見込みです。最低気温は、平年より高い日が多く、期間の後半は平年よりかなり高い日もあるでしょう。↵　降水量は、平年並か平年より多い見込みです。"
__proto__: Object
status: 200
__proto__: Object
 */
