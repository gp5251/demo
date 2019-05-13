<template>
    <div class="diaocha">
        <button @click="set">set</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
    methods: {
        set () {
            axios({
                method: "post",
                url: encodeURI("https://www.wjx.cn/joinnew/processjq.ashx?submittype=1&curID=37723435&t=1556714482443&starttime=2019%2F5%2F1%2020%3A40%3A57&ktimes=249&rn=997614954&hlv=1&sd=http%3a%2f%2fwww.wjx.cn%2f&jqnonce=7618136b-c984-44e1-8b3c-e4b16c22b77f&jqsign=%3E%3F818%3A%3Fk%24j01%3D%24%3D%3Dl8%241k%3Aj%24l%3Dk8%3Fj%3B%3Bk%3E%3Eo"),
                data: "submitdata=1%241%7D2%242%7D3%243%7D4%242%7D5%242%7D6%241%7D7%247%7D8%248%7D9%248%7D10%248%7D11%248%7D12%248%7D13%248%7D14%248%7D15%248%7D16%2410%7D17%2410%7D18%2410",
                headers: {
                    "Host": "www.wjx.cn",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
                    "Origin": "https://www.wjx.cn",
                    "Accept": "*/*",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Referer": "https://www.wjx.cn/jq/37912304.aspx",
                    "Cookie": "acw_tc=2f624a5215566364313742367e49e2ef8baaf0d148ad31c02bae2965bfcd51; .ASPXANONYMOUS=nfI0S_c11QEkAAAANjcyOWY5ZDctNDgxNC00OGVhLTg4ZDItMzYyNjk5YzA4MDQ50WtY_V9fa1o16QNKRy3KFnOo7QU1; jac37912304=12580375; UM_distinctid=16a6ec2f4a3591-03311ec861841e-1333062-144000-16a6ec2f4a455c; CNZZDATA4478442=cnzz_eid%3D427993368-1556635545-%26ntime%3D1556635545; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1556636432; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1556636432; ASP.NET_SessionId=k4bcukhqpygoioq1sdezp0zb",

                }

            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted () {
        
    }
}
</script>

<style>

</style>
