import { useAnimation} from 'framer-motion';
import {useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';//framer motionではないことに注意



const Animating_nums=()=>{
    const initialCounters=[
        { id: 1, count: 0, maxCount: 50, style: { top: '10%', left: '10%' } },
        { id: 2, count: 0, maxCount: 120, style: { top: '20%', left: '20%' } },
        { id: 3, count: 0, maxCount: 135, style: { top: '30%', left: '30%' } },
        { id: 4, count: 0, maxCount: 100, style: { top: '10%', left: '20%' } },
        { id: 5, count: 0, maxCount: 345, style: { top: '20%', left: '40%' } },
        { id: 6, count: 0, maxCount: 135, style: { top: '30%', left: '50%' } },
        //{id:2,count:0,maxCount:153},
    ];
    const [counters,setCounters]=useState(initialCounters);
    const [ref,isInView]=useInView();
    
    

    useEffect(()=>{
        if(isInView){
        setCounters(initialCounters) 
        const timerId=setInterval(()=>{
            console.log('setinterval実行中')

            setCounters(currentCounters=>
                currentCounters.map(counter=>{
                    if(counter.count<counter.maxCount){
                        return{...counter,count:counter.count+1};
                    } else{
                        return counter;
                    }
                }))
        },40)
        return ()=> clearInterval(timerId);
    }else{
        console.log('hiddenが実行')
    }}
//maxcountの数字に達するまで加算され続けるアニメーション。mapを使うことでそれぞれのidに対して一括して処理を実装
 ,[isInView]);

 useEffect(() => {
    console.log(counters.map(counter => counter.count));
  }, [counters]); 
//countersの値はmax.countまで更新されている

//isInviewを消すとアニメーションが一回のみ発生してその後に消える
//why?初回のマウント時にのみuseeffectのvisibleが実行されるってことか
//それがどうして消えることにつながるのか？hiddenになるのはisinviewが
//false,つまり要素が画面外に消えた時。
//また、どうして、isInviewをuseEffectの第二引数にとると要素が
//消えないで残るのか？
//もしかして、isInviewがtrueの状態の限りにおいて、 controls.start('visible')
//が実行され続けるからか.いや、repeatinfinityをやってもくりかえされない
//ということは？もしかして、.start('visible')は、規定のアニメーションを
//終えたら、そのまま表示され続けるようになっているのか？
//isInviewがtrueの状態の限りにおいて、 controls.start('visible')は
//繰り返され続けるんだ。初期状態がそれだとかわらないからアニメーションがされていない
//ように見えるだけでしょ？ 


    return(
        <div style={{height: '200vh'}}>
          <div style={{height: '100vh'}} className="bg-gray-20 bg-[url('/images/pexels-jopwell-2422294.jpg')] relative bg-cover bg-no-repeat bg-center">
            {/*画像の白横線はcanvaだと画質低下の原因になるのでjsx内で記述する こちらの方が柔軟に扱いやすい*/}
             {/*親要素をrelativeに設定し、子要素をabsoluteにすれば、親要素に合わせた構成になるので、他のコンポーネントと組み合わせた時の調整も容易*/}
            <div style={{position: 'absolute', top: '20%', left: '50%', width: '60%', height: '2px',transform: 'translateX(-50%)', backgroundColor: 'white'}}></div>
            <div style={{position: 'absolute', top: '50%', left: '50%', width: '60%', height: '2px',transform: 'translateX(-50%)', backgroundColor: 'white'}}></div>
            <div style={{position: 'absolute', top: '80%', left: '50%', width: '60%', height: '2px',transform: 'translateX(-50%)', backgroundColor: 'white'}}></div>
            <div style={{position: 'absolute', top: '40%', left: '50%', fontFamily: "'Garamond', 'Times New Roman', serif",fontSize: '20px' }} className="text-white">平均年齢</div>
            <div style={{position: 'absolute', top: '30%', left: '50%', fontFamily: "'Garamond', 'Times New Roman', serif",fontSize: '20px' }} className="text-white">平均年齢</div>
            <div style={{position: 'absolute', top: '90%', left: '50%', fontFamily: "'Garamond', 'Times New Roman', serif",fontSize: '20px' }} className="text-white">平均年齢</div>
            <div style={{position: 'absolute', top: '80%', left: '50%', fontFamily: "'Garamond', 'Times New Roman', serif",fontSize: '20px' }} className="text-white">平均年齢</div>

            <motion.div ref={ref} >
                {counters.map((counter) => (
                    <motion.div
                        key={counter.id}
                        style={{
                            position: 'absolute',
                            ...counter.style,
                            fontFamily: "'Garamond', 'Times New Roman', serif",
                            fontSize: '60px',
                            color: 'white', // 例として白色を指定
                        }}
                        
                    >
                        {counter.count}
                    </motion.div>
                ))}
            </motion.div>
            

          </div>
        </div>
    )                               
}


export default Animating_nums;

/*
事前構想：
スクロールする前から背景画像と数字は表示
スクロールすると数字が動き出し、0から順に高速に足されていき表示される

使用技術:
refで対象要素を特定
useeffectでuseinviewが対象ref要素の出現を検知した場合に実行するcallback関数を定義
実行する関数にuseanimateのanimate関数を定義。
animateで実行するその内容はconst variantsで定義された内容にする

*/

/*
なぜかsetinterval関数をuseeffect内に配置するとgetstaticpathエラーが生じる。原因不明
あれ、消した後にもう一度記述したら治った。どういうわけだ。レンダリングに関連しているのかもしれない。
ビルドプロセスに関するエラーだったら再読み込みで治る？
関数の引数の中でif構文使っていいのか
なぜそうなるのか？を考える時に、候補となる要因はいくつもある。それらのなかからどれを考えるべきなんだろう。
それがわかるのが、直感力か。
コーディングが果てしなく感じられるのは、なんらかの学習初期の段階にありがちな「考えることが無限にあると感じる」
状態だからだ。実際に学習が進むにつれて実はいくつかの基本的な要素のみが大事であり、それらさえを使いこなしさえば
いいということにきづく。プログラミングもそうだ。

*/

/*
最初にメインとなる骨格（これだけは最低限はずせないというもの）をコーディングして、それに関する細かい修飾はあとから実装していく
という方針でいい。

*/

/*

謎に数字のアニメーションがガクガクしてる
なぜこのエラーがでるのか？
リストの数字が多すぎることが原因？←違う。数字を消去してもガクガク
setintervalの呼び出しの感覚が早すぎる？←違う、おそくしても同じ いや？治った？これは何でだろう　
しかし途中で集計の数値がとまるという問題が解決されていない。これは何でだろう？
おそらく要素の範囲に関わっているのかな？
問題の原因はcounter.mapなのか？それとも、{c}ounter}にまつわるレンダリングなのか？
これを特定するためにcounter.mapありのものとなしのもので対象実験するのがええんちゃうかな
いや、しかしmapを使わなければ、オブジェクトを
jsx内に表示できない。もしmap自体が原因だとすると詰んでる
あれ？なぜか正常に表示されるようになったぞ？どうしてだ？本当に謎だ  
時間が経つとレンダリングの問題は治る？そんなことあるのか？
数字の表記もちゃんとしたものになっている。カクカクしていない
コードを書いてしばらくすると治る？記述して初期段階だと理ローディングに不備？    
つーかこれそうじゃん、採用課題のhtml構造パクればいいんじゃん。

*/