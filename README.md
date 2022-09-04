## **一、实验目的**

1. 浪漫的形式有很多种，有相爱的情侣在月光下许下誓言时的浪漫，也有为生活中的小事充满仪式感时的浪漫，更有“杨柳岸，晓风残月”一般跨越岁月来自诗句的浪漫。这个小程序便是以诗句为主，可以判断当前的季节与季节标识物，如：夏天-荷花，来给你推荐诗句，此功能主要来自 [今日诗词API](https://www.jinrishici.com/doc/)，以触及人心的句子为辅，感受文字带来的浪漫；句子上方会有一些唯美风景图来自[unsplash](https://unsplash.com/)
2. 浪漫不必太复杂，现在越来越多的程序臃肿不堪，界面杂乱，主要功能找不到，让人使用不便，心烦，如很多音乐播放器，不只播音乐，还有直播，卖货。所以此小程序也已简约为主，从图标的选取，文字布局，都是简约的，让人专注于文字本身。

## 二、实验步骤

### tabBar图标选取

使用[iconfont图片库](https://www.iconfont.cn/)选择简约图片

![image-20220904223552182](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220904223552182.png)

### 界面设计：

底部一个tabBar作为读诗还是阅读文章的选择器

![image-20220904225049295](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220904225049295.png)

tabBar上方主要为文字与图片区域，看完了句子可以通过下拉刷新句子与图片；

文章部分中底部有一个换一篇按钮，可以实现文章的更换。

### 遇到的问题：

1. 句子的刷新：主要在app.json中开启enablePullDownRefresh，支持下拉刷新，然后重写onPullDownRefresh函数监听用户下拉动作。
2. 图片无法刷新问题：主要通过API文档的阅读解决，起先是直接访问网站得到随机照片，重写之后得到JSON格式的数据即可。

## 三、程序运行结果

### 诗句页面：

![image-20220904230238047](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220904230238047.png)



![image-20220904230258845](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220904230258845.png)

### 文章页面：

![image-20220904230323253](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220904230323253.png)

![image-20220904230335368](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220904230335368.png)

## 四、心得体会：

通过小学期的学习，了解到了小程序的编写，尤其加深了我对前端编写的知识。诸如image、text、view等组件使用。也明白了一个程序中逻辑的写法，动态内容等。也知道了前端编写有很多很好用的网站，如我图标来源的[iconfont](https://www.iconfont.cn/)，以及诗词来源的[今日诗词](https://www.jinrishici.com/doc/)，向开源工作者表示敬意。同时为了上传到GitHub我也了解到了git的使用，感觉还有很多很强大的功能没用，但也为未来打下了基础。

最后感谢高老师三个星期的教导，这门课很有意思，不同于离散数学等理论课程，这门课的收获是实打实能看到的，让人成就感爆棚，看到自己的程序能够运行，自己的代码没白敲这也是一种浪漫呀，属于计算机学子的浪漫。谢谢高老师的教导，祝高老师工作顺利，万事顺心，天天开心。我们软件工程再见。:sunglasses:

