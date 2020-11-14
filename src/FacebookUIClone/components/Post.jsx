import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 

const postList = [
    {
        caption: '2018  2月 1号 我们的一次见面',
        desc: '说真的这是我最开心的一天 因为谈了那么久 每天视频 。现在总有有机会去看你。 我虽然每天喝你视频 但是我还是害怕我长得不好看 害怕你会跑掉。<br><br>我们第一天我非常紧张以为第一天为了一个心爱的女孩 特地一个人冲外地飞过来。 我自己我自己做的决定不会错的。 还记得你那时候在上班。 我和你说慢慢来 不要匆忙。 你说 你冲ASOK 那边过来。 现在塞车 会有点久 我说没关系 我可以等你。<br>然后我们就像电影一样。 第一次见面 一直好紧张。 在车站上面人很多 人来人往。 我就一直看一直看。 你知道是谁先见到对方么。 是我  我就叫着你。 你虽然长不高。 但是我还是能找到你。第一次见面的时候就别你的笑容打动了。 笑得很可爱。 <br>然后我们就一起去了Neon Night Market. 我们一路上虽然话不多 但是我还是对你有情趣的。 因为 你太可爱了。 我们边走边聊天。<br><br>我知道你想要钻饰你的房间不好看 想买东西。我们就买了一些灯泡。问问呢晚餐想吃什么 想吃鱼就点鱼。吃完付钱后 你问多少钱 我说我请你吧。 虽然知道我不会要你付钱的 但是你还是很有礼貌问了一下。<br><br>吃完后 我们就在漂亮的这里拍照。 我一开始有点尴尬 不敢和你拍。 一直说 我给你拍照吧。 你怕把。 到最后我们还是拍了几张合照。<br>然后最后我们就一起走了搭地铁回酒店。 其实这是我的第一次。 可能是我们聊了很久 知道对方不是玩玩的 是认真的。 所以我们就很自然的一起睡觉。 我这次旅行其实我也准备了一些礼物给你。 我觉得钱 能买到很好的礼物。 但是我觉得最好礼物就是出之于对方的手做出来的。<br>我给你做了个视频 。 里面都是我们还没在一起见面的回忆。 我把它做成了一个视频。 即使以后也可以回放 。 你也被我感动了。 就这样我们就在一起睡。 <br><br><br>第二天<br><br>隔天起来 我们就一起做床去 王宫。 你去不用付钱 我去要付钱 。 我还傻傻说 你叫我泰语我就能假装泰国人进去不用付钱了。就这样我们又在王宫 过了半天。 一路上很热。 我还一直叫你喝水 就怕担心你。去了王宫 我们也一起去了 China Town 。<br>到了晚上。 我就和你回你的家。 回家路上我看到路上那么黑 我还真担心你一个女孩 在这里生活。 好像可以一直陪着你 在你身边。<br>我还和你说 那么晚 以后不要以个人在外面走 危险。 晚上肚子而来 你带我到你第一个家的 附近吃晚饭。 我就点了我喜欢的Padthai。 而你就对了类似Salad 木瓜的食物。<br>吃完了到你就 我就给你布置你家 。给你安装小灯笼 然你会有家的感觉。 不会害怕在这里一个人。<br><br><br>第三天<br><br><br>这是我的最后第二天了。 我们就去拜拜四面佛。 我也是第一次。 我也不知道求什么的。 我只说了一些 我们的事情。 希望可以好好在一起到。  也算是有实现了一些。  我们就去了Lumphini 公园走走 看看风景 好好陪对方 。什么也不做。 我记得我们那天坐在椅子上说了很多 我们的东西。 你靠在我肩膀上 。 我看不到你有没有哭。 但是我知道你眼睛红红的。你告诉我 我不想你离开。 其实我也是 我不想我们离开。 我想可以一直在这里陪着你。<br><br>差不多要晚上了。我就带你去 酒吧。 因为前几天我们都是简单的旅程 所以想在最后一天前 带你去逛逛好玩的 好看的地方. <br>我们也未各自拍照发照片。 回家路上 竟然遇到 姐姐上班的朋友。 一路上 回家了 。 我们什么也没做就抱着一起睡。<br><br><br>最后一天了。<br><br><br>你需要上班。 没办法送我。 我其实特别想你送我 但是想到你一会哭 我就直接去。 我们还在要走之前 在床上好好休息 你看我 我看你。 什么也不能做 只能看着和对方 离开。你要上班了 我也要走了。 我们就抱着一起。 好想我们可以再包在一起。我送你去Town in Town 上班。 我就去MCD 等一会去机场 。 在MCD里面 我真的很想你。 但没有办法我就得回去了。 每次我都在飞机上翻开我们在这次旅程中拍过的照片 回忆过去。 我每次想了 眼睛就红红的。 我不想和你离开。',
        img1: 'https://lh3.googleusercontent.com/pw/ACtC-3fIFVJXKU6bJZ5LXPFmrJH1om7KWLtRwNBmIAdvecVv53hpVtFbvKUk6rdzh5TUw7HuTdlIB3yAUpnTfX9kBXVEHwNC3WLC-8rggQ-lDtatZPUFmsZyCmtMiW-DHvv3nKuUysqAL-WTZfCIVqpV0_Rkqg=w1820-h1364-no?authuser=0',
        img2: 'https://lh3.googleusercontent.com/pw/ACtC-3dqiboBlCA38EDlF2KpNQluuAii0KlXdzPZINHTNSpkqb5QwIYvp-oIt2ZdzkQhsdSfW-quDqAN_88eUmssTTlxamAq3z7anfHYaO3xrF7fObvoe1Ia1kZfrEcbwdvPMcpx0-u9K8ktTMyqansAbOUeDg=w1820-h1364-no?authuser=0',
        img3: 'https://lh3.googleusercontent.com/pw/ACtC-3fWRUEEauChT4ek0V1pWRqSqXm35HcfkXqtdbGm451esMwiCAabblgvX7fL6E4Kwvh6OrOyNhtUOQtIC4ttJyq8gd4RatSAzEmbA4SRYIqXpwy70X7YQwB7MN2LlAHGfh543aEBwRtS50uQvilyedHVUA=w1820-h1364-no?authuser=0',
        img4: 'https://lh3.googleusercontent.com/pw/ACtC-3c2uL2X5HAf9e284rcXRz8bphwjJHU160kmLKh2IEuqJK6MjDIQyc4vynsaKVWSdR-Y13aLRVA8bvFRa0dcml3iWHGBKAPubKpx0t1wAmHAmouErVRQs0A_-c-20KlQp_BF_AtsbnYlq3BVFPCFOnb48w=w1820-h1364-no?authuser=0'

    },
    {
        caption: 'Second Post',
        desc: '',
        img1: 'https://photos.app.goo.gl/MFTH9hPMo1biizSbA',
        img2: 'https://photos.app.goo.gl/8ZFq1FAwVgHvm7NU7',
        img3: 'https://photos.app.goo.gl/nqByLVb1LKFGdrNN6',
        img4: 'https://photos.app.goo.gl/RFNgvGZ7cLYJmxP36'
    }
]

const LittlePost = ({caption, desc, img1, img2, img3, img4}) => {
    return (
        
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-wrapper__top">
                    <div className="post-wrapper__top-left">
                        <div className="avatar-wrapper">
                        <img src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-1/p320x320/124354962_10218720359021816_6353348838620994993_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=6e6B7tHtFzoAX84aCz2&_nc_ht=scontent.fkul16-1.fna&tp=6&oh=6f4cbcbc701fb6a741aa08e7b5dc35fe&oe=5FD45B4F"
                            className="avatar-wrapper__avatar"
                            alt="avatar"
                        />
                        </div>
                        <div className="avatar-info-wrapper">
                            <div className="avatar-info-wrapper__name">Rong Zhao</div>
                            <div className="avatar-info-wrapper__info">
                                <div className="avatar-info-wrapper__info-time">15 mins</div>
                                <div className="avatar-info-wrapper__info-privacy">
                                    <div className="global"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-wrapper__top-right">
                        <div className="more-info-wrapper">
                            <div className="more-info"></div>
                        </div>
                    </div>
                </div>
                <div class="text-header">{caption}</div>
                <div className="post-wrapper__sec-top">
                    
                    <div className="text">{ ReactHtmlParser(desc)  }</div>
                    
                </div>
                <div className="post-wrapper__image-section">
                    <div className="gallery">
                        <div className="gallery__item gallery__item--1">
                        <img src={img1} className="gallery__img" alt=""/>
                        </div>
                        <div className="gallery__item gallery__item--2">
                            <img src={img2} className="gallery__img" alt="" />
                        </div>
                        <div className="gallery__item gallery__item--3">
                            <img src={img3} className="gallery__img" alt="" />
                        </div>
                        <div className="gallery__item gallery__item--4">
                            <img src={img4} className="gallery__img" alt="" />
                        </div>
                    </div>
                </div>
                <div className="post-wrapper__btm-section">
                    <div className="like-section">
                        {/* <div className="all-icon"> */}
                            <div className="icon-wrapper one"><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" className="icons"/></div>
                            <div className="icon-wrapper two"><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" className="icons"/></div>
                            <div className="icon-wrapper three"><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 180 180' %3e %3cdefs%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='50%25' id='c'%3e %3cstop stop-color='%23F08423' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23F08423' stop-opacity='.34' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='44.086%25' fx='50%25' fy='44.086%25' r='57.412%25' gradientTransform='matrix(-1 0 0 -.83877 1 .81)' id='d'%3e %3cstop stop-color='%23FFE874' offset='0%25'/%3e %3cstop stop-color='%23FFE368' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='10.82%25' cy='52.019%25' fx='10.82%25' fy='52.019%25' r='10.077%25' gradientTransform='matrix(.91249 .4091 -.31644 .7058 .174 .109)' id='e'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.131%25' cy='76.545%25' fx='74.131%25' fy='76.545%25' r='28.284%25' gradientTransform='rotate(-38.243 1.4 .537) scale(1 .40312)' id='f'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='31.849%25' cy='12.675%25' fx='31.849%25' fy='12.675%25' r='10.743%25' gradientTransform='matrix(.98371 -.17976 .03575 .19562 0 .16)' id='g'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='68.023%25' cy='12.637%25' fx='68.023%25' fy='12.637%25' r='12.093%25' gradientTransform='rotate(11.848 .192 .076) scale(1 .19886)' id='h'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.709%25' cy='66.964%25' fx='50.709%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.163 1.117)' id='j'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='49.239%25' cy='66.964%25' fx='49.239%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.177 1.104)' id='k'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='48.317%25' cy='42.726%25' fx='48.317%25' fy='42.726%25' r='29.766%25' gradientTransform='matrix(-.09519 -.96847 1.71516 -1.15488 -.204 1.389)' id='l'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='29.807%25' fx='50%25' fy='29.807%25' r='31.377%25' gradientTransform='matrix(.07236 -.9819 2.22613 1.12405 -.2 .454)' id='m'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='73.646%25' cy='44.274%25' fx='73.646%25' fy='44.274%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .764 .598)' id='p'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='26.749%25' cy='29.688%25' fx='26.749%25' fy='29.688%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .278 .353)' id='q'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='23.798%25' cy='53.35%25' fx='23.798%25' fy='53.35%25' r='24.89%25' gradientTransform='matrix(-.18738 .97947 -1.25372 -.27758 .951 .449)' id='r'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.94' offset='26.692%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='97.063%25' cy='54.555%25' fx='97.063%25' fy='54.555%25' r='15.021%25' gradientTransform='matrix(.8002 .50886 -.59365 1.08039 .518 -.538)' id='s'%3e %3cstop stop-color='%23C71C08' stop-opacity='.75' offset='0%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='.704' offset='53.056%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='4.056%25' cy='24.23%25' fx='4.056%25' fy='24.23%25' r='13.05%25' gradientTransform='matrix(.8728 -.3441 .41218 1.20997 -.095 -.037)' id='t'%3e %3cstop stop-color='%239C0600' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.473' offset='31.614%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.586%25' cy='77.013%25' fx='74.586%25' fy='77.013%25' r='17.563%25' gradientTransform='matrix(.77041 .55955 -.56333 .89765 .605 -.339)' id='u'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.934' offset='45.7%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.803' offset='59.211%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='51.087%25' gradientTransform='matrix(-.3809 .91219 -.97139 -.46943 1.176 .279)' id='v'%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23C71C08' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='2.243%25' cy='4.089%25' fx='2.243%25' fy='4.089%25' r='122.873%25' gradientTransform='scale(.78523 1) rotate(36.406 .025 .05)' id='x'%3e %3cstop stop-color='%23EDA83A' offset='0%25'/%3e %3cstop stop-color='%23FFDC5E' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='100%25' cy='7.011%25' fx='100%25' fy='7.011%25' r='105.039%25' gradientTransform='scale(-.90713 -1) rotate(-45.799 -.217 2.489)' id='z'%3e %3cstop stop-color='%23F4B248' offset='0%25'/%3e %3cstop stop-color='%23FFDD5F' offset='100%25'/%3e %3c/radialGradient%3e %3clinearGradient x1='50%25' y1='95.035%25' x2='50%25' y2='7.417%25' id='b'%3e %3cstop stop-color='%23F28A2D' offset='0%25'/%3e %3cstop stop-color='%23FDE86F' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='49.985%25' y1='-40.061%25' x2='49.985%25' y2='111.909%25' id='i'%3e %3cstop stop-color='%23482314' offset='0%25'/%3e %3cstop stop-color='%239A4111' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='52.727%25' y1='31.334%25' x2='28.964%25' y2='102.251%25' id='o'%3e %3cstop stop-color='%23F34462' offset='0%25'/%3e %3cstop stop-color='%23CC0820' offset='100%25'/%3e %3c/linearGradient%3e %3cpath d='M180 90c0 49.71-40.29 90-90 90S0 139.71 0 90 40.29 0 90 0s90 40.29 90 90z' id='a'/%3e %3cpath d='M108.947 95.828c-23.47-7.285-31.71 8.844-31.71 8.844s2.376-17.954-21.095-25.24c-22.57-7.004-36.253 13.757-37.307 26.812-2.264 28.103 22.134 59.996 31.26 70.86a8.062 8.062 0 008.34 2.584c13.697-3.777 51.904-16.242 66.009-40.667 6.54-11.328 7.06-36.188-15.497-43.193z' id='n'/%3e %3cpath d='M180.642 90c0 49.71-40.289 90-90 90-49.71 0-90-40.29-90-90s40.29-90 90-90c49.711 0 90 40.29 90 90z' id='w'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg fill-rule='nonzero'%3e %3cg transform='translate(.005 -.004)'%3e %3cuse fill='url(%23b)' xlink:href='%23a'/%3e %3cuse fill='url(%23c)' xlink:href='%23a'/%3e %3cuse fill='url(%23d)' xlink:href='%23a'/%3e %3cuse fill='url(%23e)' xlink:href='%23a'/%3e %3cuse fill='url(%23f)' xlink:href='%23a'/%3e %3cuse fill='url(%23g)' xlink:href='%23a'/%3e %3cuse fill='url(%23h)' xlink:href='%23a'/%3e %3c/g%3e %3cpath d='M109.013 66.234c-1.14-3.051-36.872-3.051-38.011 0-1.322 3.558 6.806 8.396 19.012 8.255 12.192.14 20.306-4.71 18.999-8.255z' fill='url(%23i)' transform='translate(.005 -.004)'/%3e %3cpath d='M68.006 46.125c.014 7.566-4.823 9.788-11.995 10.702-7.102 1.068-11.883-2.068-11.995-10.702-.099-7.256 3.81-16.116 11.995-16.284 8.17.168 11.981 9.028 11.995 16.284z' fill='url(%23j)' transform='translate(.005 -.004)'/%3e %3cpath d='M54.807 35.054c1.18 1.378.97 3.769-.479 5.358-1.448 1.575-3.571 1.744-4.753.366-1.181-1.378-.97-3.77.478-5.344 1.449-1.59 3.572-1.744 4.754-.38z' fill='%234E506A'/%3e %3cpath d='M112.022 46.125c-.014 7.566 4.823 9.788 11.995 10.702 7.102 1.068 11.883-2.068 11.995-10.702.099-7.256-3.81-16.116-11.995-16.284-8.184.168-11.995 9.028-11.995 16.284z' fill='url(%23k)' transform='translate(.005 -.004)'/%3e %3cpath d='M124.078 34.52c.957 1.547.38 3.881-1.293 5.217-1.674 1.336-3.797 1.181-4.753-.366-.957-1.546-.38-3.88 1.293-5.217 1.66-1.336 3.797-1.181 4.753.366z' fill='%234E506A'/%3e %3cpath d='M37.969 23.344c-2.349 1.983-.45 6.047 3.515 4.19 6.328-2.967 19.899-6.623 31.824-5.287 3.164.351 4.19-.113 3.487-4.022-.689-3.853-4.33-6.37-13.387-5.26-14.035 1.716-23.09 8.396-25.44 10.379z' fill='url(%23l)' transform='translate(.005 -.004)'/%3e %3cpath d='M116.592 12.952c-9.056-1.111-12.698 1.42-13.387 5.259-.703 3.91.323 4.373 3.487 4.022 11.925-1.336 25.481 2.32 31.824 5.287 3.965 1.857 5.864-2.207 3.515-4.19-2.348-1.97-11.404-8.649-25.439-10.378z' fill='url(%23m)' transform='translate(.005 -.004)'/%3e %3c/g%3e %3cg fill-rule='nonzero'%3e %3cuse fill='url(%23o)' xlink:href='%23n'/%3e %3cuse fill='url(%23p)' xlink:href='%23n'/%3e %3cuse fill='url(%23q)' xlink:href='%23n'/%3e %3cuse fill='url(%23r)' xlink:href='%23n'/%3e %3cuse fill='url(%23s)' xlink:href='%23n'/%3e %3cuse fill='url(%23t)' xlink:href='%23n'/%3e %3cuse fill='url(%23u)' xlink:href='%23n'/%3e %3cuse fill-opacity='.5' fill='url(%23v)' xlink:href='%23n'/%3e %3c/g%3e %3cg transform='translate(-.637 -.004)'%3e %3cmask id='y' fill='white'%3e %3cuse xlink:href='%23w'/%3e %3c/mask%3e %3cpath d='M15.52 86.231C9.642 80.508-.708 77.892-1.89 91.153c-.927 10.364 3.93 27.694 16.234 37.763C45.282 154.23 74.742 139.667 75.628 122c.699-13.932-15.502-12.327-20.648-12.045-.352.014-.507-.45-.197-.647a48.147 48.147 0 004.725-3.488c4.036-3.403 1.968-9.31-3.67-7.607-.858.253-14.583 4.359-23.288 1.068-9.872-3.726-11.053-7.214-17.03-13.05z' fill='url(%23x)' fill-rule='nonzero' mask='url(%23y)'/%3e %3cpath d='M161.081 88.2c3.502-6.778 9.066-4.401 12.194-3.359 4.61 1.537 7.353 4.4 7.353 11.572 0 17.001-2.812 32.765-17.002 48.6-25.987 28.982-69.935 25.143-73.675 6.862-3.094-15.16 13.066-16.678 18.34-17.381.365-.042.421-.605.098-.746a46.169 46.169 0 01-5.4-2.896c-5.444-3.403-3.989-10.051 2.405-9.07 6.806 1.012 15.23 2.924 22.486 2.207 21.009-2.11 24.975-19.87 33.201-35.789z' fill='url(%23z)' fill-rule='nonzero' mask='url(%23y)'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e" alt="" className="icons"/>
                            </div>
                        {/* </div> */}
                        <p>You and 520 others</p>
                    </div>
                    <div className="share-section">
                        <p>520 Comments</p>
                        <p>520 Share</p>
                    </div>
                </div>
                <div className="post-wrapper__sec-btm-section">
                    <div className="icon-wrapper">
                        <div className="like liked"></div>
                        <p class="liked">Like</p>
                    </div>
                    <div className="icon-wrapper">
                        <div className="comment"> </div>
                        <p>Comment</p>
                    </div>
                    <div className="icon-wrapper">
                        <div className="share"> </div>
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const listItems = postList.map((obj,desc, img1, img2, img3, img4) => (
    <LittlePost
      key={obj.name}
      caption={obj.caption}
      desc={obj.desc}
      img1={obj.img1}
      img2={obj.img2}
      img3={obj.img3}
      img4={obj.img4}
    />
  ));


export const Post = () => {
    return (
        <>
        {listItems}
        </>
    )
}

